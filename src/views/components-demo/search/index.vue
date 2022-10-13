<template>
  <div>
    <el-alert
      effect="dark"
      :closable="false"
      title="查询 组件，实现查询、重置等功能，新增了收起/展开"
      type="info"
      style="margin-bottom: 20px"
    />
    <div class="searh">
      <com-search
        label-width="120px"
        :schema="dataList"
        @search-submit="searchSubmit1"
        @reset-submit="resetSubmit1"
      />
      <div>查询/重置后的数据：{{ formData1 }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SearchDemo'
})
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { data } from './data'

const dataList = ref<FormSchemaConfig[]>(data)
const formData1 = ref<IObj>({})

function searchSubmit1(data: any) {
  formData1.value = data
}

function resetSubmit1(data: any) {
  formData1.value = data
}
</script>

<style lang="less" scoped>
.searh {
  padding: 20px;
  background: #fff;
}
</style>
