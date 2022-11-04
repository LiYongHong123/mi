<!--
 * @Author: 李永宏 860775126@qq.com
 * @Date: 2022-10-26 18:16:23
 * @LastEditors: 李永宏 860775126@qq.com
 * @LastEditTime: 2022-11-02 17:25:26
 * @FilePath: \mi1\src\components\OrderHeader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- 购物车头部组件公共部分 -->
  <div class="order-header">
    <!-- 版心 -->
    <div class="container clearfix">
      <!-- logo部分 -->
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <!-- logo部分 END -->

      <!-- 标题部分 -->
      <div class="title">
        <h2>
          {{title}}
          <slot name="tip"></slot>
        </h2>
      </div>
      <!-- 标题部分 END -->

      <!-- 用户名 -->
      <div class="username">
        <a href="javascript:;">{{username}}</a>
      </div>
      <!-- 用户名 END -->
    </div>
    <!-- 版心 END -->
  </div>
  <!-- 购物车头部组件公共部分 END -->
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "order-header",
  props: {
    title: String
  },
  computed: {
    ...mapState(["username"])
  }
};
</script>

<style lang="scss">
// 头部组件样式
.order-header {
  padding: 30px 0;
  border-bottom: 2px solid #ff6600;
  .header-logo {
    float: left;
  }
  .title,
  .username {
    display: inline-block;
    height: 55px;
    line-height: 55px;
  }
  .title {
    font-size: 28px;
    float: left;
    color: #333333;
    margin-left: 54px;
    h2 {
      color: #333333;
      font-size: 28px;
    }
    span {
      font-size: 14px;
      margin-left: 17px;
      color: #999999;
      font-weight: 400;
    }
  }
  .username {
    float: right;
    a {
      color: #666666;
      font-size: 16px;
    }
  }
}
</style>