<!--
 * @Author: 李永宏 860775126@qq.com
 * @Date: 2022-10-26 16:32:30
 * @LastEditors: 李永宏 860775126@qq.com
 * @LastEditTime: 2022-11-05 01:30:19
 * @FilePath: \mi1\src\components\NavFooter.vue
 * @Description: 这里是首页-底部公共组件模块页面
-->
<template>
  <!-- 底部模块 -->
  <div class="footer">
    <!-- 底部的上部分logo模块 -->
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" />
      <p>小米商城</p>
    </div>
    <!-- 底部的上部分logo模块 END -->

    <!-- 底部的下部分链接模块 -->
    <div class="footer-link">
      <a href="javascript:;">我叫李宏</a>
      <span>|</span>
      <a href="javascript:;">掌握HTML5/CSS3新特性</a>
      <span>|</span>
      <a href="javascript:;">掌握原生JavaScript操作Dom/Bom</a>
      <span>|</span>
      <a href="javascript:;">熟练使用Vue全家桶</a>
      <span>|</span>
      <a href="https://github.com/LiYongHong123/mi">这是我的github</a>
    </div>
    <!-- 底部的下部分链接模块 END -->

    <!-- 底部版权模块 -->
    <div class="copyright">
      Copyright ©2019
      <span class="domain">mi.futurefe.com</span> All Rights Reserved.
    </div>
    <!-- 底部版权模块 END -->
  </div>
  <!-- 底部模块 END -->
</template>
<script>
export default {
  name: "nav-footer"
};
</script>

<style lang="scss" scoped>
/* 底部模块CSS样式 */
.footer {
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
  .copyright {
    .domain {
      color: #ff6600;
    }
  }
}
</style>