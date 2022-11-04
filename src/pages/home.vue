<!--
 * @Author: 李永宏 860775126@qq.com
 * @Date: 2022-10-26 16:29:21
 * @LastEditors: 李永宏 860775126@qq.com
 * @LastEditTime: 2022-10-27 11:02:10
 * @FilePath: \mi1\src\pages\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavHeader from "./../components/NavHeader.vue";
import NavFooter from "./../components/NavFooter.vue";
export default {
  name: "nav-home",
  components: {
    NavHeader,
    NavFooter
  }
};
</script>