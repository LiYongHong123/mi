<!--
 * @Author: 李永宏 860775126@qq.com
 * @Date: 2022-10-26 16:30:06
 * @LastEditors: 李永宏 860775126@qq.com
 * @LastEditTime: 2022-11-04 19:09:41
 * @FilePath: \mi1\src\components\NavHeader.vue
 * @Description: 这里是首页-底部公共组件模块页面
-->

<!-- 结构层 -->
<template>
  <!-- 顶部导航栏 -->
  <div class="header">
    <!-- 顶部导航栏上部分 -->
    <div class="nav-topbar">
      <!-- 版心容器 -->
      <div class="container">
        <!-- 左边菜单部分 -->
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">IOT</a>
        </div>
        <!-- 左边菜单部分END -->

        <!-- 右边用户部分 -->
        <div class="topbar-user">
          <a href="javascript:;" v-if="!username" @click="login">登陆</a>
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="username" @click="logout">退出</a>
          <a href="/#/order/list" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="gotoCart">
            <span class="icon-cart"></span>
            购物车({{cartCount}})
          </a>
        </div>
        <!-- <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username" @click="logout">退出</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart">
            <span class="icon-cart"></span>
            购物车({{cartCount}})
          </a>
        </div>-->
        <!-- 右边用户部分END -->
      </div>
      <!-- 版心容器END -->
    </div>
    <!-- 顶部导航栏上部分END -->

    <!-- 顶部导航栏下部分 -->
    <div class="nav-header">
      <!-- 版心容器 -->
      <div class="container">
        <!-- Logo部分 -->
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <!-- Logo部分END -->

        <!-- 中间的下拉菜单部分 -->
        <div class="header-menu">
          <!-- 小米手机 -->
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList " :key="index">
                  <a v-bind:href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle" />
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
                <!-- -------------- -->
              </ul>
            </div>
          </div>

          <!-- 红米手机 -->
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-1.png'" />
                    </div>
                    <div class="pro-name">Redmi&nbsp;K50&nbsp;至尊版</div>
                    <div class="pro-price">￥2699元起</div>
                  </a>
                </li>
                <!-- ------------ -->
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-2.png'" />
                    </div>
                    <div class="pro-name">Redmi&nbsp;Note&nbsp;11T&nbsp;Pro+</div>
                    <div class="pro-price">￥1899元起</div>
                  </a>
                </li>
                <!-- ------------ -->
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3.png'" />
                    </div>
                    <div class="pro-name">Redmi&nbsp;Note&nbsp;11T&nbsp;Pro</div>
                    <div class="pro-price">￥1569元起</div>
                  </a>
                </li>
                <!-- ------------ -->
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-4.png'" />
                    </div>
                    <div class="pro-name">Redmi&nbsp;Note&nbsp;11SE</div>
                    <div class="pro-price">￥999元起</div>
                  </a>
                </li>
                <!-- ------------ -->
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-5.png'" />
                    </div>
                    <div class="pro-name">Redmi&nbsp;10A</div>
                    <div class="pro-price">￥699元起</div>
                  </a>
                </li>
                <!-- ------------ -->
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-6.png'" />
                    </div>
                    <div class="pro-name">Redmi&nbsp;K50&nbsp;K50&nbsp;Pro</div>
                    <div class="pro-price">￥2999元起</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!-- 小米电视 -->
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'" />
                    </div>
                    <div class="pro-name">小米壁画电视&nbsp;65英寸</div>
                    <div class="pro-price">￥6999元起</div>
                  </a>
                </li>
                <!-- ------------ -->
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-2.jpg'" />
                    </div>
                    <div class="pro-name">小米全面屏电视E55A</div>
                    <div class="pro-price">1999元</div>
                  </a>
                </li>
                <!-- ------------ -->
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-3.png'" />
                    </div>
                    <div class="pro-name">小米电视4A&nbsp;32英寸</div>
                    <div class="pro-price">￥699元起</div>
                  </a>
                </li>
                <!-- ------------ -->
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-4.jpg'" />
                    </div>
                    <div class="pro-name">小米电视4A&nbsp;55英寸</div>
                    <div class="pro-price">￥1799元起</div>
                  </a>
                </li>
                <!-- ------------ -->
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-5.jpg'" />
                    </div>
                    <div class="pro-name">小米电视4A&nbsp;65英寸</div>
                    <div class="pro-price">￥2699元起</div>
                  </a>
                </li>
                <!-- ------------ -->
                <li class="product">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-6.png'" />
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">小米电视</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 中间的下拉菜单部分END -->

        <!-- 右侧搜索款部分 -->
        <div class="header-search">
          <div class="wapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
        <!-- 右侧搜索款部分 END -->
      </div>
      <!-- 版心容器END -->
    </div>
    <!-- 顶部导航栏下部分END -->
  </div>
  <!-- 顶部导航栏END -->
</template>
<!-- 结构层 END -->

<!-- 行为层 -->
<script>
import { mapState } from "vuex";

export default {
  name: "nav-header",
  data() {
    return {
      // username: this.$store.state.username,
      phoneList: []
    };
  },
  // 解决接口延迟bug的方法
  computed: {
    // username() {
    //   return this.$store.state.username;
    // },
    // cartCount() {
    //   return this.$store.state.cartCount;
    // }
    ...mapState(["username", "cartCount"])
  },

  filters: {
    currency(val) {
      if (!val) return "0.00";
      return "￥" + val.toFixed(2) + "元起";
    }
  },
  mounted() {
    this.getProductList();
    let params = this.$route.params;

    // 判断是否是从登陆页面登陆到首页
    // 主要用于用户退出并重新登陆首页还未刷新页面下获取购物车数量的功能
    if (params && params.from == "login") {
      this.getCartCount();
    }
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012",
            pageSize: 6
          }
        })
        .then(res => {
          // if (res.list.length > 6) {
          //   this.phoneList = res.list.slice(0, 6);
          // }
          // 修复了 pageSize: 6 这个bug以后就可以直接复制，不需要再if判断了
          this.phoneList = res.list;
        });
    },
    // 用户退出后重新登陆未刷新页面的情况下重新获取一次购物车数量
    getCartCount() {
      this.axios.get("/carts/products/sum").then((res = 0) => {
        // 保存倒vuex里面
        this.$store.dispatch("saveCartCount", res);
      });
    },
    // 退出功能实现
    logout() {
      this.axios.post("/user/logout").then(() => {
        this.$message.success("退出成功");
        this.$cookie.set("userId", "", { expires: "-1" });
        this.$store.dispatch("saveUserName", "");
        this.$store.dispatch("saveCartCount", "0");
      });
    },
    gotoCart() {
      this.$router.push("/cart");
    }
  }
};
</script>
<!-- 行为层 END -->

<!-- 表现层 -->
<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
// 顶部导航栏CSS样式
.header {
  // 顶部导航栏上部分CSS样式
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    // 版心容器CSS样式
    .container {
      @include flex();
      // 左边菜单部分CSS样式
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      // 左边菜单部分CSS样式 END

      // 顶部导航栏右侧购物车模块CSS样式
      .my-cart {
        width: 110px;
        height: 39px;
        background-color: #ff6600;
        color: #ffffff;
        margin-right: 0;
        text-align: center;
        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
          margin-right: 4px;
        }
      }
      // 顶部导航栏右侧购物车模块CSS样式 END
    }
    // 版心容器CSS样式
  }
  // 顶部导航栏上部分CSS样式 END

  //顶部导航栏下部分CSS样式
  .nav-header {
    // 版心容器CSS样式
    .container {
      position: relative;
      height: 112px;
      @include flex();
      // Logo的CSS样式 END
      // -----------------------

      // 中间的下拉菜单部分CSS样式
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            transition: all 0.5s;
            background-color: #fff;

            .product {
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              position: relative;
              a {
                display: inline-block;
              }
              img {
                height: 111px;
                width: auto;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
              &:before {
                content: "";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child:before {
                display: none;
              }
            }
          }
        }
      }
      // 中间的下拉菜单部分CSS样式 END
      // -----------------------

      .header-search {
        width: 320px;
        .wapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
            box-sizing: border-box;
          }
          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 16px;
          }
        }
      }
    }
    // 版心容器CSS样式 END
  }
  //顶部导航栏下部分CSS样式 END
}
// 顶部导航栏CSS样式 END
</style>
<!-- 表现层 END -->
