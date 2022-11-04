<!--
 * @Author: 李永宏 860775126@qq.com
 * @Date: 2022-10-26 16:28:36
 * @LastEditors: 李永宏 860775126@qq.com
 * @LastEditTime: 2022-11-01 23:21:45
 * @FilePath: \mi1\src\pages\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- 结构层 -->
<template>
  <div>
    <!-- 首页模块 -->
    <div class="index">
      <!-- 版心模块 -->
      <div class="container">
        <!-- 轮播图模块 -->
        <div class="swiper-box">
          <!-- nav导航菜单实现 -->
          <div class="nav-menu">
            <ul class="menu-wrap">
              <!-- -----nav-1--------- -->
              <li class="menu-item">
                <a href="javascript:;">手机 电话卡</a>
                <!-- 导航栏右侧菜单模块 -->
                <div class="children">
                  <ul v-for="(item,i) in menuList" v-bind:key="i">
                    <li v-for="(sub,j) in item" v-bind:key="j">
                      <a v-bind:href="sub?'/#/product/'+sub.id:''">
                        <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" />
                        {{sub?sub.name:'小米9'}}
                      </a>
                    </li>
                  </ul>
                </div>
                <!-- 导航栏右侧菜单模块 END-->
              </li>
              <!-- -----nav-2--------- -->
              <li class="menu-item">
                <a href="javascript:;">电视 盒子</a>
                <div class="children">
                  <ul v-for="(item,i) in menuList" v-bind:key="i">
                    <li v-for="(sub,j) in item" v-bind:key="j">
                      <a v-bind:href="sub?'/#/product/' + sub.id: ''">
                        <img v-bind:src="sub?sub.img: '/imgs/item-box-2.png'" />
                        {{sub?sub.name:'小米8青春版'}}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <!-- -----nav-3--------- -->
              <li class="menu-item">
                <a href="javascript:;">笔记本 平板</a>
                <div class="children">
                  <ul v-for="(item,i) in menuList" v-bind:key="i">
                    <li v-for="(sub,j) in item" v-bind:key="j">
                      <a v-bind:href="sub?'/#/product/' + sub.id: ''">
                        <img v-bind:src="sub?sub.img: '/imgs/item-box-3.jpg'" />
                        {{sub?sub.name:'Redmi K20 Pro'}}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <!-- -----nav-4--------- -->
              <li class="menu-item">
                <a href="javascript:;">家电 插线板</a>
                <div class="children">
                  <ul v-for="(item,i) in menuList" v-bind:key="i">
                    <li v-for="(sub,j) in item" v-bind:key="j">
                      <a v-bind:href="sub?'/#/product/' + sub.id: ''">
                        <img v-bind:src="sub?sub.img: '/imgs/item-box-1.png'" />
                        {{sub?sub.name:'小米CC9'}}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <!-- -----nav-5--------- -->
              <li class="menu-item">
                <a href="javascript:;">出行 穿戴</a>
                <div class="children">
                  <ul v-for="(item,i) in menuList" v-bind:key="i">
                    <li v-for="(sub,j) in item" v-bind:key="j">
                      <a v-bind:href="sub?'/#/product/' + sub.id: ''">
                        <img v-bind:src="sub?sub.img: '/imgs/item-box-2.png'" />
                        {{sub?sub.name:'小米8青春版'}}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <!-- -----nav-6--------- -->
              <li class="menu-item">
                <a href="javascript:;">智能 路由器</a>
                <div class="children">
                  <ul v-for="(item,i) in menuList" v-bind:key="i">
                    <li v-for="(sub,j) in item" v-bind:key="j">
                      <a v-bind:href="sub?'/#/product/' + sub.id: ''">
                        <img v-bind:src="sub?sub.img: '/imgs/item-box-3.jpg'" />
                        {{sub?sub.name:'Redmi K20 Pro'}}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <!-- -----nav-7--------- -->
              <li class="menu-item">
                <a href="javascript:;">电源 配件</a>
                <div class="children">
                  <ul v-for="(item,i) in menuList" v-bind:key="i">
                    <li v-for="(sub,j) in item" v-bind:key="j">
                      <a v-bind:href="sub?'/#/product/' + sub.id: ''">
                        <img v-bind:src="sub?sub.img: '/imgs/item-box-1.png'" />
                        {{sub?sub.name:'小米CC9'}}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <!-- -----nav-8--------- -->
              <li class="menu-item">
                <a href="javascript:;">生活 箱包</a>
                <div class="children">
                  <ul v-for="(item,i) in menuList" v-bind:key="i">
                    <li v-for="(sub,j) in item" v-bind:key="j">
                      <a v-bind:href="sub?'/#/product/' + sub.id: ''">
                        <img v-bind:src="sub?sub.img: '/imgs/item-box-2.png'" />
                        {{sub?sub.name:'小米8青春版'}}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <!-- nav导航菜单实现 END -->
          <!-- 轮播图功能实现 -->
          <swiper v-bind:options="swiperOption">
            <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
              <a v-bind:href="'/#/product/'+item.id">
                <img v-bind:src="item.img" />
              </a>
            </swiper-slide>

            <!-- 左右箭头相关的插件 -->
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <!-- 左右箭头相关的插件 END -->
          </swiper>
          <!-- 轮播图功能实现 END -->
        </div>
        <!-- 轮播图模块END -->

        <!-- 广告位 -->
        <div class="ads-box">
          <a
            v-bind:href="'/#/product/' + item.id"
            v-for="(item,index) in adsList"
            v-bind:key="index"
          >
            <img v-lazy="item.img" />
          </a>
        </div>
        <!-- 广告位 END -->

        <!-- banner导航栏 -->
        <div class="banner">
          <a href="'/#/product/30'">
            <img v-lazy="'/imgs/banner-1.png'" />
          </a>
        </div>
        <!-- banner导航栏 END -->
      </div>
      <!-- 版心模块 END -->
      <!-- --------------------- -->

      <!-- 商品模块需要在版心外面重新布局结构 -->
      <!-- 下方的商品模块版本需要重新嵌套版心，因为这个模块有一个单独的通栏背景颜色 -->
      <!-- --商品列表模块 -->
      <div class="product-box">
        <!-- 版心模块 -->
        <div class="container">
          <!-- ---上面是一个标题 -->
          <h2>手机</h2>
          <!-- 列表下面的展示模块 -->
          <div class="wrapper">
            <!-- 左边的广告位 -->
            <div class="banner-left">
              <a href="/#/product/35">
                <img v-lazy="'/imgs/mix-alpha.jpg'" />
              </a>
            </div>
            <!-- 左边的广告位 END -->

            <!-- 右边的具体商品 -->
            <div class="list-box">
              <!-- 具体展示的商品 -->
              <div class="list" v-for="(arr,i) in phoneList" v-bind:key="i">
                <div class="item" v-for="(item,j) in arr" v-bind:key="j">
                  <!-- 标签 -->
                  <span v-bind:class="{'new-pro':j%2==0}">新品</span>
                  <!-- 商品图片 -->
                  <div class="item-img">
                    <img v-lazy="item.mainImage" />
                  </div>
                  <!-- 商品名称和描述 -->
                  <div class="item-info">
                    <h3>{{item.name}}</h3>
                    <p>{{item.subtitle}}</p>
                    <p class="price" @click="addCart(item.id)">￥{{item.price}}元</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 右边的具体商品 END -->
          </div>
          <!-- 列表下面的展示模块 END -->
        </div>
        <!-- 版心模块 END -->
      </div>
      <!-- --商品列表模块 END -->

      <!-- 底部服务导航组件 -->
      <service-bar></service-bar>
      <!-- 底部服务导航组件 END -->

      <!-- 模态框模块 -->
      <modal
        title="提示"
        sureText="去购物车查看"
        cancelText="返回首页"
        btnType="4"
        modalType="middle"
        v-bind:showModal="showModal"
        v-on:submit="gotoCart"
        v-on:cancel="showModal = false"
      >
        <template v-slot:body>
          <p>商品添加成功！</p>
        </template>
      </modal>
      <!-- 模态框模块 END -->
    </div>
    <!-- 首页模块 END -->
  </div>
</template>
<!-- 结构层 END -->

<!-- 行为层 -->
<script>
// 引入组件 少一个默认组件directive，因为报错bug
import ServiceBar from "./../components/ServiceBar.vue";
import Modal from "./../components/Modal.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
    Modal,
    ServiceBar
    // directives: {
    //   swiper: directive
    // },
  },

  // --------------函数相关的
  // 商品列表模块-初始化商品方法
  mounted() {
    this.init();
  },
  // 商品列表模块-方法
  methods: {
    // 加载商品列表
    init() {
      this.axios
        .get("/products", {
          params: {
            // 后端手机接口100012
            categoryId: 100012,
            // 只获取后台返回的14条数据
            // 前6条数据是导航栏下拉菜单的数据
            // 后面8条数据是商品列表的数据
            pageSize: 14
          }
        })
        .then(res => {
          // 数组方法
          // lisce方法不会改变原数组
          // splice方法会改变原素组的对象
          // 先把返回来的14条数据分割出后面8条
          res.list = res.list.slice(6, 14);
          // 再把这8条数据存入phoneList这个双重数组里面
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
        });
    },
    // 点击商品列表购物车弹出模态框方法
    addCart(id) {
      // 实现模态框显示效果，这里没有添加购物车和跳转登陆功能

      // 登陆页面完成后再打开，因为这里点击购物车以后
      // 判断没有登陆会自定跳转到登陆页面
      this.axios
        .post("/carts", {
          productId: id,
          selected: true
        })
        .then(res => {
          this.showModal = true;
          this.$store.dispatch("saveCartCount", res.cartTotalQuantity);
        })
        .catch(() => {
          this.showModal = true;
        });
    },
    //遮罩层黄色按钮点击后跳转到购物车
    gotoCart() {
      this.$router.push("/cart");
    }
  },
  // --------------数据相关的
  data() {
    return {
      // 轮播图相关的
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          // 这两个属性slidShadows和shadow控制轮播图的阴影true和false
          slidShadows: false,
          shadow: false,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      // 轮播图展示数据
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "21",
          img: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "24",
          img: "/imgs/slider/slide-5.jpg"
        }
      ],
      // 导航栏左侧导航栏相关的双重循环数据
      menuList: [
        [
          {
            id: "30",
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: "31",
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: "32",
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro"
          },
          {
            id: "33",
            img: "/imgs/item-box-4.jpg",
            name: "移动5G+专区"
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      // 广告位相关的数据
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png"
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg"
        },
        {
          id: 45,
          img: "/imgs/ads/ads-2.jpg"
        },
        {
          id: 48,
          img: "/imgs/ads/ads-3.png"
        }
      ],
      // 手机商品列表数据
      phoneList: [],
      // 控制模态框的变量，默认隐藏
      showModal: false
    };
  }
};
</script>
<!-- 行为层 END -->


<!-- 样式层 -->
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.index {
  // ----------------轮播图模块
  .swiper-box {
    // position: relative;
    // nav导航菜单实现SCC
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      // 因为nav-menu默认顶着swiper-box左上角显示，所以不用给top值
      // left: 0;
      z-index: 9;
      padding: 26px 0;
      box-sizing: border-box;
      background-color: #55585a7a;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            display: block;
            position: relative;
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;
            &:after {
              content: "";
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
              position: absolute;
              right: 30px;
              top: 17px;
            }
          }

          // 导航栏右侧菜单部分
          .children {
            display: none;
            width: 962px;
            height: 451px;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            transition: all 1s;
            box-sizing: border-box;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              background-color: $colorG;

              li {
                height: 75px;
                flex: 1;
                line-height: 75px;
                line-height: center;
                padding-left: 23px;
              }
              a {
                color: $colorB;
                font-size: 14px;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 9px;
              }
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
        }
      }
    }
    // 轮播图功能实现CSS
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  // ----------------广告位模块
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
    }
  }
  // ----------------banner导航栏
  .banner {
    margin-bottom: 50px;
  }
  // ----------------商品列表模块
  .product-box {
    background-color: $colorJ;
    padding-top: 30px;
    padding-bottom: 50px;
    // 商品列表上方的标题的CSS样式
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 22px;
      color: $colorB;
      margin-bottom: 20px;
    }
    //列表下方的展示模块的CSS样式
    .wrapper {
      display: flex;
      // 展示模块左侧的广告位
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      // 展示模块右侧的具体商品
      .list-box {
        // 上下两行的样式
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            transition: all 0.2s linear;
            &:hover {
              transform: translate3d(0, -2px, 0);
              // box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
              box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            }
          }

          // 商品上的标签
          span {
            display: inline-block;
            width: 67px;
            height: 24px;
            font-size: 14px;
            line-height: 24px;
            color: $colorG;
            // 绿色标签-新品标签
            &.new-pro {
              background-color: #7ecf68;
            }
            // 红色标签-秒杀标签
            &.kill-pro {
              background-color: #e82626;
            }
          }
          .item-img {
            img {
              width: 100%;
              height: 195px;
            }
          }
          // 商品的名称和描述文字
          .item-info {
            h3 {
              font-size: $fontJ;
              font-weight: bold;
              color: $colorB;
              line-height: $fontJ;
            }
            p {
              color: $colorD;
              line-height: 13px;
              margin: 6px auto 13px;
            }
            .price {
              color: #f20a0a;
              font-size: $fontJ;
              font-weight: bold;
              cursor: pointer;
              &:after {
                content: "";
                @include bgImg(18px, 18px, "/imgs/icon-cart-hover.png");
                margin-left: 5px;
                vertical-align: middle;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<!-- 样式层 END -->
