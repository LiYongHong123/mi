<!--
 * @Author: 李永宏 860775126@qq.com
 * @Date: 2022-11-04 18:07:56
 * @LastEditors: 李永宏 860775126@qq.com
 * @LastEditTime: 2022-11-04 19:14:07
 * @FilePath: \mi\src\components\NoData.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- 结构层 -->
<template>
  <div class="no-data">
    <img src="/imgs/icon-no-data.png" alt />
    <p>当前暂无提交的订单记录</p>
  </div>
</template>
<!-- 结构层 END -->

<!-- 行为层 -->
<script>
export default {
  name: "no-data"
};
</script>
<!-- 行为层 END -->

<!-- 表现层 -->
<style lang="scss">
.no-data {
  text-align: center;
  font-size: 20px;
  color: #999999;
  margin: 50px 0;
  img {
    width: 240px;
    height: 180px;
    margin-bottom: 30px;
  }
}
</style>
<!-- 表现层 END -->
