/*
 * @Author: 李永宏 860775126@qq.com
 * @Date: 2022-10-29 21:08:23
 * @LastEditors: 李永宏 860775126@qq.com
 * @LastEditTime: 2022-10-29 21:14:07
 * @FilePath: \mi\src\store\action.js
 * @Description: 传输
 */
export default {
    saveUserName(context, username) {
        context.commit('saveUserName', username);
    },
    saveCartCount(context, count) {
        context.commit('saveCartCount', count);
    }
}