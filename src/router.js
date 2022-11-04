/*
 * @Author: 李永宏 860775126@qq.com
 * @Date: 2022-10-26 16:26:38
 * @LastEditors: 李永宏 860775126@qq.com
 * @LastEditTime: 2022-10-26 19:01:03
 * @FilePath: \mi1\src\router.js
 * @Description:  路由文件
 */

import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home.vue'
import Index from './pages/index.vue'
import Product from './pages/product.vue'
import Detail from './pages/detail.vue'
import Cart from './pages/cart.vue'
import Order from './pages/order.vue'
import OrderConfirm from './pages/orderConfirm.vue'
import OrderList from './pages/orderList.vue'
import OrderPay from './pages/orderPay.vue'
import AliPay from './pages/alipay.vue'
import Login from './pages/login.vue'

Vue.use(Router);

export default new Router({
    routes: [{
            //根组件路由
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/index',
            children: [{
                //子路由--首页
                path: '/index',
                name: 'index',
                component: Index,
            }, {
                path: '/detail/:id',
                name: 'detail',
                component: Detail,
            }, {
                path: '/product/:id',
                name: 'product',
                component: Product,
            }]
        }, {
            //购物车路由
            path: '/cart',
            name: 'cart',
            component: Cart,
        },
        {
            //登陆路由
            path: '/login',
            name: 'login',
            component: Login,
        }, {
            //订单 根组件路由
            path: '/order',
            name: 'order',
            component: Order,
            children: [{
                path: 'list',
                name: 'order-list',
                component: OrderList,
            }, {
                // 订单确认页面
                path: 'confirm',
                name: 'order-confirm',
                component: OrderConfirm,
            }, {
                //子路由 订单支付
                path: 'pay',
                name: 'order-pay',
                component: OrderPay,
            }, {
                // 阿里支付页面
                path: 'alipay',
                name: 'alipay',
                component: AliPay,
            }]
        }
    ]
});