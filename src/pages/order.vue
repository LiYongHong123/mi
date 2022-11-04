<!--
 * @Author: 李永宏 860775126@qq.com
 * @Date: 2022-10-26 16:36:28
 * @LastEditors: 李永宏 860775126@qq.com
 * @LastEditTime: 2022-11-04 18:01:18
 * @FilePath: \mi1\src\pages\order.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import ServiceBar from "./../components/ServiceBar";
import NavFooter from "./../components/NavFooter.vue";
export default {
  name: "order",
  data() {
    return {
      title: "",
      tip: ""
    };
  },
  components: {
    ServiceBar,
    NavFooter
  }
};
</script>