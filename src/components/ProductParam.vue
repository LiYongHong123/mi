<!--
 * @Author: 李永宏 860775126@qq.com
 * @Date: 2022-10-30 01:36:52
 * @LastEditors: 李永宏 860775126@qq.com
 * @LastEditTime: 2022-11-01 17:42:09
 * @FilePath: \mi\src\components\ProductParam.vue
 * @Description: 产品栈公共组件
-->

<!-- 结构层 -->
<template>
  <!-- 头部组件 -->
  <div class="nav-bar" :class="{'is_fixed':isFixed}">
    <!-- 版心 -->
    <div class="container">
      <!-- 标题 -->
      <div class="pro-title">{{title}}</div>
      <!-- 标题 END -->

      <!-- 参数 -->
      <div class="pro-param">
        <a href="javascript:;">概述</a>
        <span>|</span>
        <a href="javascript:;">参数</a>
        <span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
      <!-- 参数 END -->
    </div>
    <!-- 版心 -->
  </div>
  <!-- 头部组件 EDN -->
</template>
<!-- 结构层 END -->

<!-- 行为层 -->
<script>
export default {
  name: "nav-bar",
  props: {
    title: String
  },
  data() {
    return {
      isFixed: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
  },

  methods: {
    initHeight() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > 152 ? true : false;
    }
  },
  // 销毁吸顶效果函数
  destroyes() {
    window.removeEventListener("scroll", this.initHeight, false);
  }
};
</script>
<!-- 行为层 END -->

<!-- 表现层 -->
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
// 头部组件样式

.nav-bar {
  height: 70px;
  line-height: 70px;
  border-top: 1px solid $colorH;
  // border-bottom: 1px solid $colorH;
  background-color: $colorG;
  z-index: 1001;
  transition: all 0.5s;
  &.is_fixed {
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  // 版心样式
  .container {
    @include flex();
    // 左侧标题样式
    .pro-title {
      font-size: $fontH;
      color: $colorB;
      font-weight: bold;
    }
    //右侧参数样式
    .pro-param {
      font-size: $fontJ;
      a {
        color: $colorC;
      }
      span {
        margin: 0 10px;
      }
    }
  }
}
</style>
<!-- 表现层 END -->
