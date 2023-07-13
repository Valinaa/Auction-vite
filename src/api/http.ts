import CreateAxios from '../utils/http/index'

const defaultHttp = CreateAxios({
    requestOptions: {
        apiUrl: '/auction',
    },
})
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
export default defaultHttp
