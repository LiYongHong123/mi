/*
 * @Author: 李永宏 860775126@qq.com
 * @Date: 2022-10-25 14:19:08
 * @LastEditors: 李永宏 860775126@qq.com
 * @LastEditTime: 2022-11-02 18:20:16
 * @FilePath: \mi1\src\main.js
 */
import Vue from 'vue'
import router from './router.js'
import store from './store/index.js'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
// import env from './env'

//mock开关
const mock = false;
if (mock) {
    require('./mock/api');
}

// 根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5dc7afee2b69d9223b633cbb/mimall';
axios.defaults.baseURL = '/api';

axios.defaults.timeout = 8000;
//根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

// 接口错误拦截
axios.interceptors.response.use(function(response) {
    let res = response.data;
    let path = location.hash;
    if (res.status == 0) {
        return res.data;
    } else if (res.status == 10) {
        if (path != '#/index') {
            window.location.href = '/#/login'
                // return Promise.reject(res);
        }
        return Promise.reject(res);
    } else {
        // alert(res.msg);
        Message.warning(res.msg);
        return Promise.reject(res);
    }
}, (error) => {
    let res = error.response;
    Message.error(res.data.message);
    return Promise.reject(error);
});

// 把插件添加到vue的原型上，这样就可以this使用了。
Vue.prototype.axios = axios;
Vue.use(VueCookie);
// Vue.use(Message);
Vue.prototype.$message = Message;
Vue.config.productionTip = false;
Vue.use(VueLazyLoad, {
    loading: '/imgs/loading-svg/loading-bars.svg'
})


new Vue({
    store: store,
    router: router,
    render: h => h(App),
}).$mount('#app')