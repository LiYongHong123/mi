/*
 * @Author: 李永宏 860775126@qq.com
 * @Date: 2022-10-27 09:30:00
 * @LastEditors: 李永宏 860775126@qq.com
 * @LastEditTime: 2022-10-29 20:43:50
 * @FilePath: \mi\src\mock\api.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//这里专门用来定义mock文件
import Mock from 'mockjs'

Mock.mock('/api/user/login', {
    "status": 0,
    "data": {
        // "id": 12,
        "id|10001-11000": 0,
        // "username": "admin",
        "username": "@cname",
        "email": "admin@51purse.com",
        "phone": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
});