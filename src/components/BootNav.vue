<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus'

import { Icon } from '@iconify/vue'

import avatar from '@/assets/avatar.jpg'
import { saveLanguage } from '@/utils/i18n'
import defaultHttp from '@/api/http'

import type { GoodsInfo } from 'types/auction'

const router = useRouter()
const isDark = useDark()
const toggleDark = useToggle(isDark)
const { t, availableLocales, locale } = useI18n()
function toggleLocales() {
    const locales = availableLocales
    locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
    saveLanguage(locale.value) // 保存切换后的语言到本地存储
}

function goPage(path: string) {
    defaultHttp
        .get({
            url: '/getGoodsList/1/6',
        })
        .then((res: Array<GoodsInfo>) => {
            const goods = JSON.stringify(res)
            ElMessage.success('get goods success!')
            console.log(goods)
            router.push(`${path}/${goods}`)
        })
        .catch((err: any) => {
            ElMessage.error(err)
        })
}
function goGitHub() {
    window.open('https://github.com/Valinaa')
}
function getEmails() {
    void ElMessageBox.alert(
        `${t('email content')}<br/>
        <ul>
            <li><b>valinaa@valinaa-wei.tech<b/></li>
            <li><b>1114854003@qq.com<b/></li>
            <li><b>ecustck@163.com<b/></li>
            <li><b>20002605@mail.ecust.edu.cn<b/></li>
            <li><b>valinaa.chenkang@gmail.com<b/></li>
        <ul/>`,
        t('contact info'),
        {
            autofocus: true,
            confirmButtonText: 'OK',
            dangerouslyUseHTMLString: true,
            callback: () => {
                ElMessage({
                    type: 'success',
                    message: `${t('thank for visit')} ^_^`,
                })
            },
        }
    )
}
</script>

<template>
    <b-navbar
        class="font-semibold font-mono"
        toggleable="lg"
        :dark="isDark"
        :variant="isDark ? 'dark' : 'light'">
        <b-navbar-brand>
            <div
                style="
                    padding-right: 16px;
                    padding-left: 20px;
                    place-items: center center;
                ">
                <el-avatar
                    :size="55"
                    :src="avatar" />
            </div>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse
            id="nav-collapse"
            is-nav>
            <b-navbar-nav class="mr-auto">
                <b-nav-item @click="goPage('/')">
                    <span class="span-tab">
                        <i class="menu-item-icon">
                            <Icon
                                icon="solar:home-outline"
                                width="20.15"
                                height="20.15" />
                        </i>
                        {{ t('auction.home') }}
                    </span>
                </b-nav-item>
                <b-nav-item @click="goPage('/hotGoods')">
                    <span class="span-tab">
                        <i class="menu-item-icon">
                            <Icon
                                icon="mingcute:fork-spoon-line"
                                width="20.15"
                                height="20.15" />
                        </i>
                        {{ t('auction.hotGoods') }}
                    </span>
                </b-nav-item>
                <b-nav-item @click="goPage('/addGoods')">
                    <span class="span-tab">
                        <i class="menu-item-icon">
                            <Icon
                                icon="solar:document-add-broken"
                                width="20.15"
                                height="20.15" />
                        </i>
                        {{ t('auction.addGoods') }}
                    </span>
                </b-nav-item>
                <b-nav-item @click="goPage('/myAuctions')">
                    <span class="span-tab">
                        <i class="menu-item-icon">
                            <i-tabler-bulb />
                        </i>
                        {{ t('auction.myAuctions') }}
                    </span>
                </b-nav-item>
                <b-nav-item @click="goPage('/myGoods')">
                    <span class="span-tab">
                        <i class="menu-item-icon">
                            <i-tabler-bulb />
                        </i>
                        {{ t('auction.myGoods') }}
                    </span>
                </b-nav-item>
                <b-nav-item @click="goPage('/rank')">
                    <span class="span-tab">
                        <i class="menu-item-icon">
                            <i-tabler-bulb />
                        </i>
                        {{ t('auction.getRanks') }}
                    </span>
                </b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-item class="res-composition">
                    <span>
                        <el-tooltip
                            :content="
                                isDark ? t('change light') : t('change dark')
                            "
                            placement="top">
                            <button
                                class="mx-2 !outline-none"
                                @click="toggleDark()">
                                <i-ph-cloud-moon-bold
                                    v-if="isDark"
                                    class="icon-nav" />
                                <i-ph-sun-horizon-bold
                                    v-else
                                    class="icon-nav" />
                            </button>
                        </el-tooltip>
                    </span>
                </b-nav-item>
                <b-nav-item class="res-composition lg:mr-4">
                    <span>
                        <el-tooltip
                            :content="t('change lang')"
                            placement="top">
                            <button
                                class="icon-btn mx-2"
                                @click="toggleLocales()">
                                <i-la-language class="icon-nav" />
                            </button>
                        </el-tooltip>
                    </span>
                </b-nav-item>
                <b-nav-item @click="goPage('intro')">
                    <span class="span-tab">
                        <i style="font-size: 1.05em">
                            <i-carbon-user-speaker />
                        </i>
                        {{ t('intro') }}
                    </span>
                </b-nav-item>
                <b-nav-item-dropdown :text="t('contact me')">
                    <b-dropdown-item @click="goGitHub()">
                        <i class="menu-item-icon"><i-iconoir-github /></i>
                        GitHub
                    </b-dropdown-item>
                    <b-dropdown-item @click="getEmails">
                        <i class="menu-item-icon">
                            <i-line-md-email-twotone />
                        </i>
                        {{ t('emails') }}
                    </b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<style scoped>
.avatar-img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    object-fit: cover;
}

.res-composition button {
    border: 0;
    background-color: transparent;
}

.bg-light,
.bg-dark {
    background-color: transparent !important;
}

.icon-nav {
    font-size: 1.3em;
}

.menu-item-icon {
    font-size: 1.2em;
}

.res-composition {
    width: 60px;
}

.span-tab {
    margin-right: 10px;
}

.navbar-nav {
    --bs-nav-link-padding-y: 0 !important;
    --bs-nav-link-hover-color: var(--el-color-primary);
}

.container * {
    --bs-gutter-x: 0 !important;
}

@media screen and (width <= 992px) {
    .nav-item {
        margin: 6px auto;
    }

    .res-composition {
        width: 100px !important;
    }
}
</style>
