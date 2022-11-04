
<!-- ----结构层层 -->
<template>
  <!-- 登陆模块 -->
  <div class="login">
    <!-- 头部logo模块 -->
    <div class="container">
      <a href="/#/index">
        <img src="/imgs/login-logo.png" alt />
      </a>
    </div>
    <!-- 头部logo模块 END -->

    <!-- 登陆文本框模块 -->
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span>
            <span class="sep-line">|</span>
            <span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username" />
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password" />
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <div class="reg">
              立即注册
              <span>|</span>忘记密码？
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 登陆文本框模块 END -->

    <!-- 底部模块 -->
    <div class="footer">
      <div class="footer-link">
        <a href="javascript:;">我叫李宏</a>
        <span>|</span>
        <a href="javascript:;">掌握HTML5/CSS3新特性</a>
        <span>|</span>
        <a href="javascript:;">掌握原生JavaScript操作Dom/Bom元素</a>
        <span>|</span>
        <a href="javascript:;">熟练使用Vue全家桶</a>
        <span>|</span>
        <a href="https://github.com/LiYongHong123/mi">这是我的Github</a>
      </div>
      <p class="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
    </div>
    <!-- 底部模块 END -->
  </div>
  <!-- 登陆模块 END -->
</template>

<!-- ----行为层 -->

<script>
// import { mapActions } from "vuex";
// import { Message } from "element-ui";

export default {
  name: "login",
  data() {
    return {
      username: " ",
      password: "",
      userId: ""
    };
  },
  methods: {
    login() {
      let { username, password } = this;
      this.axios
        .post("/user/login", {
          username,
          password
        })
        .then(res => {
          // 把登陆的过期事件修改为Session浏览器关闭自动退出
          this.$cookie.set("userId", res.id, { expires: "Session" });
          // console.log(this.store);
          // to-do 保存用户名
          this.$store.dispatch("saveUserName", res.username);
          // this.saveUserName(res.username);
          // console.log(this.saveUserName);
          this.$router.push({
            // query判断和params判断的区别
            // query会在url显示login
            // params不会在url显示loogin
            // path: "/index",
            name: "index",
            // query: {
            //   from: "login"
            // }
            params: {
              from: "login"
            }
          });
        });
    },
    register() {
      this.axios
        .post("/user/register", {
          username: "admin1",
          password: "admin1",
          email: "admin1@163.com"
        })
        .then(() => {
          // alert("注册成功");
          // 使用Element ui 代替alert
          this.$message.success("注册成功");
        });
    }
  }
};
</script>

<!-- ----表现层 -->
<style lang="scss">
.login {
  // 头部样式
  & > .container {
    height: 113px;
    img {
      width: auto;
      height: 100%;
    }
  }

  // 中心文本输入样式
  .wrapper {
    background: url("/imgs/login-bg.jpg") no-repeat center;
    .container {
      height: 576px;
      .login-form {
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width: 410px;
        height: 510px;
        background-color: #ffffff;
        position: absolute;
        bottom: 29px;
        right: 0;
        h3 {
          line-height: 23px;
          font-size: 24px;
          text-align: center;
          margin: 40px auto 49px;
          .checked {
            color: #ff6600;
          }
          .sep-line {
            margin: 0 32px;
          }
        }
        .input {
          display: inline-block;
          width: 348px;
          height: 50px;
          border: 1px solid #e5e5e5;
          margin-bottom: 20px;
          input {
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn {
          width: 100%;
          height: 50px;
          line-height: 50px;
          margin-top: 10px;
          font-size: 16px;
        }
        .tips {
          margin-top: 14px;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          cursor: pointer;
          .sms {
            color: #ff6600;
          }
          .reg {
            color: #999999;
            span {
              margin: 0 7px;
            }
          }
        }
      }
    }
  }

  // 底部样式
  .footer {
    height: 100px;
    padding-top: 60px;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-link {
      a {
        color: #999999;
        display: inline-block;
      }
      span {
        margin: 0 10px;
      }
    }
    .copyright {
      margin-top: 13px;
    }
  }
}
</style>