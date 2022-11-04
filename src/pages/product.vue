<!--
 * @Author: 李永宏 860775126@qq.com
 * @Date: 2022-10-26 16:35:08
 * @LastEditors: 李永宏 860775126@qq.com
 * @LastEditTime: 2022-11-01 17:41:29
 * @FilePath: \mi1\src\pages\product.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- 结构层 -->
<template>
  <!-- 产品栈 -->
  <div class="product">
    <!-- 头部组件的引用 -->
    <product-param v-bind:title="product.name">
      <template v-slot:buy>
        <button class="btn" @click="buy">立即购买</button>
      </template>
    </product-param>
    <!-- 头部组件的引用 END -->

    <!-- 版心 -->
    <div class="content">
      <!-- 图片上的文字介绍 -->
      <div class="item-bg">
        <h2>{{product.name}}</h2>
        <h3>{{product.subtitle}}</h3>
        <p>
          <a href id>全球首款双频 GP</a>
          <span>|</span>
          <a href id>骁龙845</a>
          <span>|</span>
          <a href id>AI 变焦双摄</a>
          <span>|</span>
          <a href id>红外人脸识别</a>
        </p>
        <div class="price">
          <span>
            ￥
            <em>{{product.price}}</em>
          </span>
        </div>
      </div>
      <!-- 图片上的文字介绍 END -->

      <!-- 背景大图 -->
      <div class="item-bg-2"></div>
      <div class="item-bg-3"></div>
      <!-- 背景大图 END -->

      <!-- swiper插件实现底部轮播图 -->
      <div class="item-swiper">
        <swiper :options="swiperOption">
          <swiper-slide>
            <img src="/imgs/product/gallery-2.png" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/product/gallery-3.png" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/product/gallery-4.png" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/product/gallery-5.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/product/gallery-6.jpg" alt />
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <p class="desc">小米8 AI变焦双摄拍摄</p>
      </div>
      <!-- swiper插件实现底部轮播图 END -->

      <!-- 视频模块 -->
      <div class="item-video">
        <h2>
          60帧超慢动作摄影
          <br />慢慢回味每一瞬间的精彩
        </h2>
        <p>
          后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！
          <br />更能AI 精准分析视频内容，15个场景智能匹配背景音效。
        </p>
        <div class="video-bg" @click="openVideo()"></div>

        <!-- 视频遮罩层模块 -->
        <div class="video-box">
          <!-- 底部视频遮罩层 -->
          <div class="overlay" v-if="showSlide"></div>
          <!-- 底部视频遮罩层 END -->

          <!-- 展示视频 -->
          <div class="video" v-bind:class="{'slide': showSlide}">
            <!-- 展示视频关闭按钮 -->
            <span class="icon-close" @click="closeVideo()"></span>
            <!-- 展示视频关闭按钮  END -->

            <video src="/imgs/product/video.mp4" muted autoplay controls="controls"></video>
          </div>
          <!-- 展示视频  END -->
        </div>
        <!-- 视频遮罩层模块 END -->
      </div>
      <!-- 视频模块 END -->
    </div>
    <!-- 版心 -->
  </div>
  <!-- 产品栈 END -->
</template>
<!-- 结构层 END -->

<!-- 行为层 -->
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import ProductParam from "./../components/ProductParam";
import "swiper/css/swiper.css";

export default {
  name: "product",
  // 这里swiper插件的版本引入问题，首字母一定要大写
  components: {
    Swiper,
    SwiperSlide,
    ProductParam
  },
  // 方法
  mounted() {
    this.getProductInfo();
  },
  methods: {
    // 关闭视频是记录播放的时间轴，再次打开可以继续播放，解决了关闭后视频继续播放的bug
    // 打开视频的方法
    openVideo() {
      this.showSlide = "true";
      let vi = document.getElementsByTagName("video")[0];
      vi.play();
    },
    // 关闭视频的方法
    closeVideo() {
      this.showSlide = "";
      let vi = document.getElementsByTagName("video")[0];
      vi.pause();
    },
    getProductInfo() {
      let id = this.$route.params.id;
      this.axios.get(`/products/${id}`).then(res => {
        this.product = res;
      });
    },
    buy() {
      let id = this.$route.params.id;
      this.$router.push(`/detail/${id}`);
    }
  },
  data() {
    return {
      // 动画效果实现视频下滑出现
      showSlide: "", //控制动画效果
      product: {}, //商品信息

      // 这是swiper插件绑定的方法
      swiperOption: {
        // 自动播放
        autoplay: true,
        // 循环播放
        loop: true,
        // 同时显示3张图片
        slidesPerView: 3,
        // 图片之间距离30像素
        spaceBetween: 30,
        // 每次移动一张图片的距离，true是鼠标滑动的距离
        freeMode: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>
<!-- 行为层 END-->


<!-- 表现层 -->
<style lang="scss">
@import "./../assets/scss/mixin.scss";
// 产品栈样式
.product {
  // 版心样式
  .content {
    // 图片背景
    .item-bg {
      background: url("/imgs/product/product-bg-1.png") no-repeat center;
      height: 718px;
      text-align: center;
      h2 {
        font-size: 80px;
        padding-top: 55px;
      }
      h3 {
        font-size: 24px;
        letter-spacing: 10px;
      }
      p {
        margin-top: 21px;
        margin-bottom: 40px;
        a {
          font-size: 16px;
          color: #333333;
        }
        span {
          margin: 0 15px;
        }
      }
      .price {
        font-size: 30px;
        color: #333333;
        em {
          font-style: normal;
          font-size: 38px;
        }
      }
    }
    .item-bg-2 {
      background: url(/imgs/product/product-bg-2.png) no-repeat center;
      height: 480px;
      background-size: 1226px 397px;
    }
    .item-bg-3 {
      background: url(/imgs/product/product-bg-3.png) no-repeat center;
      height: 638px;
      background-size: cover;
    }
    // swiper轮播图样式
    .item-swiper {
      margin: 36px auto 52px;
      .desc {
        font-size: 18px;
        color: #333333;
        text-align: center;
      }
      img {
        width: 100%;
      }
    }

    // 底部视频样式
    .item-video {
      height: 1044px;
      background-color: #070708;
      // margin-bottom: 76px;
      color: #ffffff;
      text-align: center;
      h2 {
        font-size: 60px;
        padding-top: 82px;
        margin-bottom: 47px;
      }
      p {
        font-size: 24px;
        margin-bottom: 58px;
      }
      .video-bg {
        background: url("/imgs/product/gallery-1.png") no-repeat center;
        background-size: cover;
        width: 1226px;
        height: 540px;
        margin: 0 auto 120px;
        cursor: pointer;
      }

      // 弹出视频的样式
      .video-box {
        // 底部视频遮罩层样式
        .overlay {
          @include position(fixed);
          background-color: #333333;
          opacity: 0.4;
          z-index: 1002;
        }

        // 展示视频的样式
        .video {
          position: fixed;
          top: -50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          width: 1000px;
          height: 536px;
          transition: all 0.6s;
          opacity: 0;
          // 设置层级是为了解决本模块层级较高盖倒吸顶bug
          z-index: 1003;
          &.slide {
            top: 50%;
            opacity: 1;
          }

          // 右上角的关闭按钮
          .icon-close {
            position: absolute;
            top: 20px;
            right: 20px;
            @include bgImg(20px, 20px, "/imgs/icon-close.png");
            cursor: pointer;
            z-index: 11;
          }

          video {
            width: 100%;
            height: 100%;
            // 取消视频的默认黑色阴影样式
            object-fit: cover;
            outline: none;
          }
        }
      }
    }
  }

  // 头部标准按钮距离左侧的外边距
  button {
    margin-left: 12px;
  }
}
</style>
<!-- 表现层 END -->
