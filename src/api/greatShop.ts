import CreateAxios from '../utils/http/index'

export const aclHttp = CreateAxios({
    requestOptions: {
        apiUrl: '/greatShop',
        urlPrefix: '/acl',
    },
})

export const sysHttp = CreateAxios({
    requestOptions: {
        apiUrl: '/greatShop',
        urlPrefix: '/sys',
    },
})
