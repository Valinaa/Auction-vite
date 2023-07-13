// 不需要鉴权的业务路由
import type { RouteRecordRaw } from 'vue-router'

const indexPage = () => import('@/pages/muse/index.vue')
const myGoodsPage = () => import('@/components/table/MyGoods.vue')
const commonRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'indexPage',
        component: indexPage,
    },
    {
        path: '/myGoods/:data',
        name: 'myGoods',
        component: myGoodsPage,
    },
]

export default commonRoutes
