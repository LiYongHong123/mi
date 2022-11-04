/*
 * @Author: 李永宏 860775126@qq.com
 * @Date: 2022-10-26 22:31:52
 * @LastEditors: 李永宏 860775126@qq.com
 * @LastEditTime: 2022-10-26 22:31:57
 * @FilePath: \mi1\src\env.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 环境文件
let baseURL;
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api';
        break;
    case 'prev':
        baseURL = 'http://prev-mall-pre.springboot.cn/api';
        break;
    case 'prod':
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
    default:
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
}

export default {
    baseURL
}