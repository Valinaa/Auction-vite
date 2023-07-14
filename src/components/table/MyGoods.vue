<script setup lang="ts">
import { ElMessage } from 'element-plus'

import type { GoodsInfo } from 'types/auction'

const route = useRoute()
const { t } = useI18n()
const goodsList = (): GoodsInfo[] => {
    const list = route.params.data
    if (Array.isArray(list)) {
        ElMessage.warning('返回的数据不是字符串！')
        return new Array<GoodsInfo>()
    }
    const result = JSON.parse(decodeURIComponent(list))
    return result
}
function ViewGood(good: GoodsInfo) {
    console.log(good)
    ElMessage.success('get goods success!')
}
function EditGood(good: GoodsInfo) {
    console.log(good)
    ElMessage.success('edit goods success!')
}
function DeleteGood(good: GoodsInfo) {
    console.log(good)
    ElMessage.success('delete goods success!')
}
</script>

<template>
    <div>
        <el-table
            :data="goodsList()"
            style="width: 100%"
            max-height="600px"
            row-key="id"
            stripe
            lazy
            highlight-current-row
            border>
            <el-table-column
                :label="t('auction.startTime')"
                width="190px"
                align="center">
                <template #default="{ row }">
                    <div style="display: flex; align-items: center">
                        <i-ep-timer style="margin-right: 10px" />
                        {{ row.startTime }}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                :label="t('auction.endTime')"
                width="190px"
                align="center">
                <template #default="{ row }">
                    <div style="display: flex; align-items: center">
                        <i-ep-timer style="margin-right: 10px" />
                        {{ row.endTime }}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                prop="salerName"
                :label="t('auction.salerName')"
                width="80px"
                align="center" />
            <el-table-column
                :label="t('auction.goodInfo')"
                align="center">
                <el-table-column
                    prop="goodName"
                    :label="t('auction.goodName')"
                    width="100px"
                    align="center"></el-table-column>
                <el-table-column
                    prop="goodType"
                    :label="t('auction.goodType')"
                    width="50px"
                    align="center"></el-table-column>
                <el-table-column
                    prop="goodsDec"
                    :label="t('auction.goodsDec')"
                    width="100px"
                    align="center"></el-table-column>
                <el-table-column
                    prop="nowPrice"
                    :label="t('auction.nowPrice')"
                    width="60px"
                    align="center"></el-table-column>
                <el-table-column
                    prop="startPrice"
                    :label="t('auction.startPrice')"
                    width="60px"
                    align="center"></el-table-column>
            </el-table-column>
            <el-table-column
                prop="pricePlus"
                :label="t('auction.pricePlus')"
                width="80px"
                align="center" />
            <el-table-column
                prop="pic"
                :label="t('auction.pic')"
                width="80px"
                align="center" />
            <el-table-column
                prop="status"
                :label="t('auction.status')"
                width="80px"
                align="center" />

            <el-table-column
                prop="status"
                :label="t('auction.preferentialInfo')"
                width="80px"
                align="center">
                <template #default="{ row }">
                    <div style="display: flex; align-items: center">
                        {{ row.ensure }}
                        {{ row.packMail }}
                        {{ row.oimei }}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                :label="t('operation')"
                width="150px"
                align="center">
                <template #default="{ row }">
                    <el-button
                        type="primary"
                        size="small"
                        @click="ViewGood(row)">
                        {{ t('auction.viewGood') }}
                    </el-button>
                    <el-button
                        type="warning"
                        size="small"
                        @click="EditGood(row)">
                        {{ t('auction.editGood') }}
                    </el-button>
                    <el-button
                        type="warning"
                        size="small"
                        @click="DeleteGood(row)">
                        {{ t('auction.deleteGood') }}
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
