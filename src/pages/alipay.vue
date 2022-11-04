<template>
  <div class="ali-pay">
    <!-- 头部组件引用 -->
    <order-header title="订单支付">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
      </template>
    </order-header>
    <!-- 头部组件引用 END -->
    <loading v-if="loading"></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>
<script>
import OrderHeader from "./../components/OrderHeader";
import Loading from "./../components/Loading";
export default {
  name: "alipay",
  components: {
    OrderHeader,
    Loading
  },
  data() {
    return {
      // orderId: this.$route.query.orderId,
      orderId: this.$route.query.orderId,
      content: "",
      loading: true
    };
  },
  mounted() {
    this.paySubmit();
  },
  methods: {
    // 支付
    // 支付宝支付是调用后台接口，返回一个表单字符串，把这个字符串渲染倒网页上然后submit提交
    // 微信支付是调用后台接口，返回一个二维码字符串，需要前端自己把字符串转换成二维码，才可以进行支付
    // 微信支付分为
    // 1,付款码支付
    // 2,JSAPI支付,就是公众号支付
    // 3,二维码支付，扫码支付，native支付
    // 4,App支付
    // 5,h5支付，移动端网页支付
    // 6,小程序支付
    // 7,人脸支付。
    // 本次项目中使用二维码支付
    paySubmit() {
      this.axios
        .post("/pay", {
          orderId: this.orderId,
          orderName: "Vue高仿小米商城", //扫码支付时订单名称
          amount: 0.01, //单位元
          payType: 1 //1,支付宝 2,微信
        })
        .then(res => {
          this.content = res.content;
        });
      setTimeout(() => {
        document.forms[0].submit();
      }, 100);
    }
  }
};
</script>