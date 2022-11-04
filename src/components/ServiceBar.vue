<!--
 * @Author: 李永宏 860775126@qq.com
 * @Date: 2022-10-27 20:29:12
 * @LastEditors: 李永宏 860775126@qq.com
 * @LastEditTime: 2022-10-27 23:33:42
 * @FilePath: \mi\src\components\ServiceBar.vue
 * @Description: 这是底部服务导航栏模块组件
-->
<template>
  <!-- 这是底部服务导航栏模块组件 -->
  <div class="service">
    <!-- 版心模块 -->
    <div class="container">
      <ul>
        <li>
          <span class="icon-setting"></span>预约维修服务
        </li>
        <li>
          <span class="icon-7day"></span>7天无理由退货
        </li>
        <li>
          <span class="icon-15day"></span>15天免费换货
        </li>
        <li>
          <span class="icon-post"></span>满150包邮
        </li>
      </ul>
    </div>
    <!-- 版心模块 END -->
  </div>
  <!-- 这是底部服务导航栏模块组件 END -->
</template>
<script>
export default {
  name: "service-bar"
};
</script>

<style lang="scss">
@import "./../assets/scss/mixin.scss";
// 这是底部服务导航栏模块组件
.service {
  padding: 33px 0;
  color: #666666;
  font-size: 16px;
  text-align: center;

  li {
    display: inline-block;
    width: 24.8%;
    text-align: center;
    border-right: 1px solid #e5e5e5;

    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      vertical-align: middle;
      margin-right: 8px;
    }
    .icon-setting {
      @include bgImg(20px, 20px, "/imgs/icon-setting.png");
    }
    .icon-7day {
      @include bgImg(20px, 20px, "/imgs/icon-7day.png");
    }
    .icon-15day {
      @include bgImg(20px, 20px, "/imgs/icon-15day.png");
    }
    .icon-post {
      @include bgImg(20px, 20px, "/imgs/icon-post.png");
    }
  }
  ul :last-child {
    border-right: none;
  }
}
</style>