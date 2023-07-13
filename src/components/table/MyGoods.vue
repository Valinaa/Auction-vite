<!-- <template>
    <div>
        <el-table
            :data="decodedData()"
            style="width: 100%"
            max-height="600px"
            row-key="id"
            stripe
            highlight-current-row
            border
            lazy
            :load="load"
            :tree-props="{ children: 'merge', hasChildren: 'hasChildren' }">
            <el-table-column
                :label="t('name')"
                width="280px">
                <template #default="{ row }">
                    <el-popover
                        v-if="getType(row) === '数据表'"
                        effect="light"
                        trigger="hover"
                        placement="top"
                        width="auto">
                        <template #default>
                            <el-button
                                link
                                type="primary">
                                <a
                                    :href="viewPublicData(row)"
                                    target="_blank">
                                    {{ t('click to view') }}
                                </a>
                            </el-button>
                            <br />
                            <el-button
                                link
                                type="warning">
                                <a
                                    :href="editPublicData(row)"
                                    target="_blank">
                                    {{ t('click to edit') }}
                                </a>
                            </el-button>
                        </template>
                        <template #reference>
                            {{ getName(row) }}
                        </template>
                    </el-popover>
                    <template v-if="getType(row) === '文件夹'">
                        {{ getName(row) }}
                    </template>
                </template>
            </el-table-column>
            <el-table-column
                :label="t('type')"
                width="100px"
                align="center">
                <template #default="{ row }">
                    <el-tag :type="getTypeColor(row)">
                        {{
                            getType(row) === '文件夹' ? t('dir') : t('dataset')
                        }}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column
                :label="t('create time')"
                width="185px"
                align="center">
                <template #default="{ row }">
                    <div style="display: flex; align-items: center">
                        <i-ep-timer style="margin-right: 10px" />
                        {{ row.initTime }}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                :label="t('update time')"
                width="185px"
                align="center">
                <template #default="{ row }">
                    <div style="display: flex; align-items: center">
                        <i-ep-timer style="margin-right: 10px" />
                        {{ getUpdateTime(row) }}
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                prop="createBy"
                :label="t('create by')"
                width="80px"
                align="center" />
            <el-table-column
                :label="t('able to update')"
                width="85px"
                align="center">
                <template #default="{ row }">
                    {{ getEditable(row) }}
                </template>
            </el-table-column>
            <el-table-column
                :label="t('dataset info')"
                align="center">
                <el-table-column
                    :label="t('type')"
                    width="185px"
                    align="center">
                    <template #default="{ row }">
                        <el-tag :type="getTableTypeColor(row)">
                            {{ getTableType(row) }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                    :label="t('engine')"
                    width="100px"
                    align="center">
                    <template #default="{ row }">
                        <el-tag :type="getEngineTypeColor(row)">
                            {{ getEngineType(row) }}
                        </el-tag>
                    </template>
                </el-table-column>
            </el-table-column>
        </el-table>
    </div>
</template>
<script setup lang="ts"></script> -->
