<template>
  <div class="page-container" style="padding:0 30px">
    <div class="search__example--wrap">
      <com-search :schema="searchData" @search-submit="searchSubmit" @reset-submit="resetSubmit" />
    </div>

    <div class="button__example--wrap">
      <el-button type="primary" icon="el-icon-circle-plus-outline" @click="open(null, 'InfoWrite')">
        新增
      </el-button>
      <el-button type="danger" icon="el-icon-delete" @click="dels">删除</el-button>
    </div>

    <com-table
      v-loading="loading"
      selection
      :columns="columns"
      :data="tableData"
      :pagination="{
        currentPage: defaultParams.pageIndex,
        total: total,
        onSizeChange: handleSizeChange,
        onCurrentChange: handleCurrentChange
      }"
      @selection-change="handleSelectionChange"
    >
      <template #importance="scope">
        <el-tag
          :type="
            scope.row.importance === 3
              ? 'success'
              : scope.row.importance === 2
              ? 'warning'
              : 'danger'
          "
        >
          {{ scope.row.importance === 3 ? '重要' : scope.row.importance === 2 ? '良好' : '一般' }}
        </el-tag>
      </template>
      <template #action="scope">
        <el-button type="primary" size="mini" @click="open(scope.row, 'InfoWrite')">编辑</el-button>
        <el-button type="success" size="mini" @click="open(scope.row, 'Detail')">查看</el-button>
        <el-button type="danger" size="mini" @click="dels(scope.row)">删除</el-button>
      </template>
    </com-table>

    <com-dialog :visible.sync="dialogVisible" :title="dialogTitle">
      <info-write
        v-if="comName === 'InfoWrite' && dialogVisible"
        :info="rowData"
        @close="toggleVisible"
        @success="refreshTable"
      />
      <detail v-if="comName === 'Detail' && dialogVisible" :info="rowData" @close="toggleVisible" />
    </com-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ExampleDialog'
})
</script>

<script setup lang="ts">
import { getExampleListApi, delsExampApi } from './api'
import { $hooks } from 'base-admin'
import InfoWrite from './components/InfoWrite.vue'
import Detail from './components/Detail.vue'

const {
  defaultParams,
  tableData,
  loading,
  total,
  dialogVisible,
  dialogTitle,
  comName,
  rowData,
  handleSizeChange,
  handleCurrentChange,
  handleSelectionChange,
  toggleVisible,
  getList,
  searchSubmit,
  resetSubmit,
  open,
  refreshTable,
  dels
} = $hooks.work.useWork({
  listFun: getExampleListApi,
  delFun: delsExampApi
})

const searchData: FormSchemaConfig[] = [
  {
    label: '标题',
    value: '',
    component: 'Input',
    field: 'title',
    componentProps: {
      placeholder: '请输入标题',
      clearable: true
    }
  }
]

const columns = [
  {
    field: 'title',
    label: '标题',
    showOverflowTooltip: true
  },
  {
    field: 'author',
    label: '作者'
  },
  {
    field: 'display_time',
    label: '创建时间'
  },
  {
    field: 'importance',
    label: '重要性'
  },
  {
    field: 'pageviews',
    label: '阅读数'
  },
  {
    field: 'action',
    label: '操作',
    width: '220px'
  }
]

getList()
</script>
