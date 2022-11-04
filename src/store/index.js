/*
 * @Author: 李永宏 860775126@qq.com
 * @Date: 2022-10-29 21:07:05
 * @LastEditors: 李永宏 860775126@qq.com
 * @LastEditTime: 2022-10-29 21:11:39
 * @FilePath: \mi\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 管理vuex的入口

import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './action';
Vue.use(Vuex);

const state = {
    username: '', //登陆用户名 ,默认一定设置为null 不能是空格
    // cartCount: -1 测试购物车数量模块调用数据，如果从-1变成0就说明调用接口成功了
    cartCount: 0 //购物车商品数量
}
export default new Vuex.Store({
    state,
    mutations,
    actions
});