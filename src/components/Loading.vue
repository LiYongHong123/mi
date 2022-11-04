<!--
 * @Author: 李永宏 860775126@qq.com
 * @Date: 2022-11-04 15:01:35
 * @LastEditors: 李永宏 860775126@qq.com
 * @LastEditTime: 2022-11-04 15:10:04
 * @FilePath: \mi\src\components\Loading.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="loading">
    <img src="/imgs/loading-svg/loading-bars.svg" alt />
  </div>
</template>
<script>
export default {
  name: "loading"
};
</script>
<style lang="scss">
.loading {
  height: 180px;
  line-height: 180px;
  text-align: center;
  padding: 80px 0;
  img {
    height: 100%;
  }
}
</style>