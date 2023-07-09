<!-- eslint-disable camelcase -->
<script setup lang="ts">
import { ElMessage, ElNotification } from 'element-plus'

import { aclHttp } from '@/api/greatShop'

const { t } = useI18n()

const getPermission = () => {
    aclHttp
        .get({ url: '/permission' })
        .then((res: any) => {
            console.log(res)
        })
        .catch((err: any) => {
            console.error(err)
        })
}
// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'
ElMessage.success({
    message: t('welcome'),
    duration: 1000,
})
ElNotification({
    title: 'Issue',
    message: `${t(
        'issue'
    )}<br/><b><i>https://github.com/Valinaa/Site-Pages/issues<i/><b/>`,
    dangerouslyUseHTMLString: true,
    duration: 5000,
})
</script>

<template>
    <div class="mx-auto mt-10 max-w-3xl container">text text</div>
    <el-button
        type="success"
        @click="getPermission">
        get list
    </el-button>
</template>

<style lang="scss" scoped>
i {
    padding-top: 4px;
}

a {
    @apply text-sky-400 hover:(text-sky-600) transition-all ease-out duration-100;
}

.button-link-a {
    color: white !important;
}
</style>
