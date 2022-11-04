<!--
 * @Author: 李永宏 860775126@qq.com
 * @Date: 2022-10-25 14:19:08
 * @LastEditors: 李永宏 860775126@qq.com
 * @LastEditTime: 2022-11-03 14:26:06
 * @FilePath: \mi1\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "app",
  components: {},
  data() {
    return {};
  },
  mounted() {
    //1.本地加载请求静态json文件的形式
    // axios.get("/mock/user/login.json").then(res => {
    //   this.res = res;
    // });
    // --------------------------------------
    //2.esay-mock方法加载数据
    // axios.get("/user/login").then(res => {
    //   this.res = res;
    // });
    // --------------------------------------
    //3.本地集成mockjs实现数据mock
    // axios.get("/user/login").then(res => {
    //   this.res = res;
    // });
    if (this.$cookie.get("userId")) {
      // if(this.$cookie.get("userId")) {
      this.getUser();
      this.getCartCount();
    }
  },
  methods: {
    // 获取用户信息
    getUser() {
      this.axios.get("/user").then((res = {}) => {
        // 保存倒vuex里面
        this.$store.dispatch("saveUserName", res.username);
      });
    },
    // 获取购物车数量
    getCartCount() {
      this.axios.get("/carts/products/sum").then((res = 0) => {
        // 保存倒vuex里面
        this.$store.dispatch("saveCartCount", res);
      });
    }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>
