<!--
 * @Author: 李永宏 860775126@qq.com
 * @Date: 2022-10-28 17:35:37
 * @LastEditors: 李永宏 860775126@qq.com
 * @LastEditTime: 2022-11-03 17:28:39
 * @FilePath: \mi\src\components\Modal.vue
 * @Description: 这里是公共组件--模态框
-->

<template>
  <!-- 给Modal组件添加动画 -->
  <transition name="slide">
    <!-- 结构模块 -->
    <div class="modal" v-show="showModal">
      <!-- 遮罩层 -->
      <div class="mask"></div>
      <!-- 遮罩层 END -->

      <!-- 弹框 -->
      <div class="modal-dialog">
        <!-- 头部 -->
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" v-on:click="$emit('cancel')"></a>
        </div>
        <!-- 头部 END -->

        <!-- 主体部分 -->
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <!-- 主体部分 END -->

        <!-- 底部 -->
        <div class="modal-footer">
          <!-- 在底部对按钮的类型进行判断 -->
          <!-- 如果btnType返回值是1就返回黄色小按钮 -->
          <a
            href="javascript:;"
            class="btn"
            v-if="btnType==1"
            v-on:click="$emit('submit')"
          >{{sureText}}</a>

          <!-- 如果btnType返回值是2就返回灰色小按钮 -->
          <a
            href="javascript:;"
            class="btn"
            v-if="btnType==2"
            v-on:click="$emit('cancel')"
          >{{cancelText}}</a>

          <!-- 如果btnType返回值是3就返回两个小按钮 -->
          <div class="btn-group" v-if="btnType==3">
            <a href="javascript:;" class="btn" v-on:click="$emit('submit')">{{sureText}}</a>
            <a href="javascript:;" class="btn" v-on:click="$emit('cancel')">{{cancelText}}</a>
          </div>
          <!-- 这里第四个选项是专门给首页的遮罩层准备的双选 -->
          <div class="btn-group" v-if="btnType==4">
            <a href="javascript:;" class="btn" v-on:click="$emit('submit')">{{sureText}}</a>
            <a
              href="javascript:;"
              class="btn btn-default"
              v-on:click="$emit('cancel')"
            >{{cancelText}}</a>
          </div>
        </div>
        <!-- 底部 END -->
      </div>
      <!-- 弹框 END  -->
    </div>
    <!-- 结构模块 END -->
  </transition>
  <!-- 给Modal组件添加动画 END -->
</template>


<!-- 行为模块 -->
<script>
export default {
  name: "modal",
  props: {
    //   弹框类型，小small、中middle、大large、表单form
    modalType: {
      type: String,
      default: "form"
    },
    // 弹框的标题
    title: String,
    // 按钮类型 1确定按钮，2取消按钮，3确定取消都有
    btnType: String,
    // 确定按钮
    sureText: {
      type: String,
      default: "确定"
    },
    // 取消按钮
    cancelText: {
      type: String,
      default: "取消"
    },
    showModal: Boolean
  }
};
</script>
<!-- 行为模块 END -->

<!-- 表现层 -->
 <style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/modal.scss";
</style>

<!-- 表现层 END -->

