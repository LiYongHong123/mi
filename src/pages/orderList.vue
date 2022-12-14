<template>
  <div class="order-list">
    <!-- 头部组件的引用 -->
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
      </template>
    </order-header>
    <!-- 头部组件的引用 END  -->

    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <loading v-if="loading"></loading>
          <div class="order" v-for="(order,index) in list" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{order.createTime}}
                <span>|</span>
                {{order.receiverName}}
                <span>|</span>
                {{order.orderNo}}
                <span>|</span>
                {{order.paymentTypeDesc}}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{order.payment}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(item,i) in order.orderItemVoList" :key="i">
                  <div class="good-img">
                    <img v-lazy="item.productImage" alt />
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{item.productName}}</div>
                    <div class="p-money">{{item.totalPrice + "元 x " + item.quantity + "件"}}</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="order.status == 20">
                <a href="javascript:;">{{order.statusDesc}}</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:;" @click="goPay(order.orderNo)">{{order.statusDesc}}</a>
              </div>
            </div>
          </div>

          <!-- element-ui加载分页器 -->
          <el-pagination
            v-if="true"
            background
            layout="prev,pager,next"
            :pageSize="pageSize"
            :total="total"
            @current-change="handleChange"
          ></el-pagination>
          <!-- element-ui加载分页器 END -->

          <!-- 滚动加载详情页 -->
          <div
            v-if="false"
            class="scroll-more"
            v-infinite-scroll="scrollMore"
            infinite-scroll-disabled="busy"
            infinite-scroll-distance="410"
          >
            <img src="/imgs/loading-svg/loading-bars.svg" alt v-show="loading" />
          </div>
          <!-- 滚动加载详情页 END-->

          <!-- 加载无数据显示组件 -->
          <no-data v-if="!loading && list.length==0"></no-data>
          <!-- 加载无数据显示组件 END -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OrderHeader from "./../components/OrderHeader";
import Loading from "./../components/Loading";
import NoData from "./../components/NoData";
import { Pagination } from "element-ui";
import infiniteScroll from "vue-infinite-scroll";
export default {
  name: "order-list",
  components: {
    OrderHeader,
    Loading,
    NoData,
    [Pagination.name]: Pagination
  },
  directives: {
    infiniteScroll
  },
  data() {
    return {
      loading: true,
      list: [],
      pageSize: 10,
      pageNum: 1,
      total: 0,
      busy: false //滚动加载，是否触发
    };
  },
  mounted() {
    this.getOrderList();
    // this.goPay();
  },
  methods: {
    getOrderList() {
      this.axios
        .get("/orders", {
          params: {
            pageNum: this.pageNum
          }
        })
        .then(res => {
          this.loading = false;
          // 测试空数据页面加载组件
          // this.list = [] || res.list;
          this.list = res.list;
          // this.list = this.list.concat(res.list);
          this.total = res.total;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    // 点击未支付跳转到支付页面
    goPay(orderNo) {
      // 3种路由跳转页面的方式
      // 1，直接push传参跳转
      // this.router.push("/order/list");

      // 2，使用push搭配name和param跳转，注意name的值是路由的名字不是路由
      // this.router.push({
      //   name: "order-list",
      //   param: {
      //     orderNo
      //   }
      // });

      // 3，使用push搭配path和query跳转
      this.$router.push({
        path: "/order/pay",
        query: {
          orderNo
        }
      });
    },
    // 分页器事件
    handleChange(pageNum) {
      this.pageNum = pageNum;
      this.getOrderList();
    },
    // 加载更多按钮
    // loadMore() {
    //   this.pageNum++;
    //   this.getOrderList();
    // }

    // 滚动加载，通过npm插件实现
    scrollMore() {
      this.busy = true;
      setTimeout(() => {
        this.pageNum++;
        this.getList();
      }, 500);
    },
    // 专门给scrollMore使用
    getList() {
      this.loading = true;
      this.busy = true;
      this.axios
        .get("/orders", {
          params: {
            pageSize: 10,
            pageNum: this.pageNum
          }
        })
        .then(res => {
          this.list = this.list.concat(res.list);
          this.loading = false;
          if (res.hasNextPage) {
            this.busy = false;
          } else {
            this.busy = true;
          }
        });
    }
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.order-list {
  .wrapper {
    background-color: $colorJ;
    padding-top: 33px;
    padding-bottom: 110px;
    .order-box {
      .order {
        @include border();
        background-color: $colorG;
        margin-bottom: 31px;
        &:last-child {
          margin-bottom: 0;
        }
        .order-title {
          @include height(74px);
          background-color: $colorK;
          padding: 0 43px;
          font-size: 16px;
          color: $colorC;
          .item-info {
            span {
              margin: 0 9px;
            }
          }
          .money {
            font-size: 26px;
            color: $colorB;
          }
        }
        .order-content {
          padding: 0 43px;
          .good-box {
            width: 88%;
            .good-list {
              display: flex;
              align-items: center;
              height: 145px;
              .good-img {
                width: 112px;
                img {
                  width: 100%;
                }
              }
              .good-name {
                font-size: 20px;
                color: $colorB;
              }
            }
          }
          .good-state {
            @include height(145px);
            font-size: 20px;
            color: $colorA;
            a {
              color: $colorA;
            }
          }
        }
      }

      .el-pagination {
        text-align: center;
      }
      .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #ff6600;
      }
      .el-button--primary {
        background-color: #ff6600;
        border-color: #ff6600;
      }
      .load-more,
      .scroll-more {
        text-align: center;
        img {
          height: 50px;
        }
      }
    }
  }
}
</style>