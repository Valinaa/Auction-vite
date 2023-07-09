// 不需要鉴权的业务路由
import type { RouteRecordRaw } from 'vue-router'

const indexPage = () => import('@/pages/muse/index.vue')

const commonRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'indexPage',
        component: indexPage,
    },
]

export default commonRoutes
