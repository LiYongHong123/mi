/*
 * @Author: 李永宏 860775126@qq.com
 * @Date: 2022-10-27 22:39:16
 * @LastEditors: 李永宏 860775126@qq.com
 * @LastEditTime: 2022-11-02 18:39:52
 * @FilePath: \mi\babel.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    "presets": [
        '@vue/cli-plugin-babel/preset'
    ],
    "plugins": [
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ]
    ]
}