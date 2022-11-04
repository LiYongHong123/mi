/*
 * @Author: 李永宏 860775126@qq.com
 * @Date: 2022-10-29 21:07:35
 * @LastEditors: 李永宏 860775126@qq.com
 * @LastEditTime: 2022-10-29 21:13:55
 * @FilePath: \mi\src\store\mutations.js
 * @Description: 读取
 */
// 定义各种方法
export default {
    saveUserName(state, username) {
        state.username = username;
    },
    saveCartCount(state, count) {
        state.cartCount = count;
    }
}