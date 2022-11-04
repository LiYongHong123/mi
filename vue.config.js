/*
 * @Author: 李永宏 860775126@qq.com
 * @Date: 2022-10-26 22:15:05
 * @LastEditors: 李永宏 860775126@qq.com
 * @LastEditTime: 2022-10-26 22:15:20
 * @FilePath: \mi1\src\vue.config.js
 * @Description: 这是代理获取跨域数据配置文件
 */
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://mall-pre.springboot.cn',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    // lintOnSave: false 校验，关闭以后就不会有代码提示了 
    // lintOnSave: false 设置以后要重启npm serve
}