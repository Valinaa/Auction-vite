import CreateAxios from '../utils/http/index'

export const userHttp = CreateAxios({
    requestOptions: {
        apiUrl: '/api',
        urlPrefix: '/user',
    },
})

export const accountHttp = CreateAxios({
    requestOptions: {
        apiUrl: '/api',
        urlPrefix: '/account',
    },
})
