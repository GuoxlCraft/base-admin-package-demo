<template>
  <div>
    <el-alert
      effect="dark"
      :closable="false"
      title="抽取于 Element 的图片预览组件进行改造，实现函数式调用组件，无需基于图片进行点击预览。"
      type="info"
      style="margin-bottom: 20px"
    />

    <el-alert
      effect="dark"
      :closable="false"
      title="有底图预览。"
      type="info"
      style="margin-bottom: 20px"
    />

    <div class="img-wrap">
      <div
        v-for="(item, $index) in imgList"
        :key="item"
        class="img-item"
        @click="showHasImg($index)"
      >
        <img :src="item" alt="" />
      </div>
    </div>

    <el-alert
      effect="dark"
      :closable="false"
      title="无底图预览。"
      type="info"
      style="margin-top: 20px; margin-bottom: 20px"
    />
    <el-button type="primary" @click="showNoImg">点击预览</el-button>

    <el-alert
      effect="dark"
      :closable="false"
      title="点击事件，包含图片点击事件以及关闭事件。"
      type="info"
      style="margin-top: 20px; margin-bottom: 20px"
    />
    <el-button type="primary" @click="showImg">点击预览</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'PreviewDemo'
})
</script>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import { Preview } from '_c'
const root = (getCurrentInstance() as any).proxy

const imgList = ref<string[]>([
  require('@/assets/img/test1.png'),
  require('@/assets/img/test2.png'),
  require('@/assets/img/test3.png')
])

function showHasImg(i: number) {
  Preview({
    index: i,
    list: imgList.value
  })
}

function showNoImg() {
  Preview({
    index: 0,
    list: imgList.value
  })
}

function showImg() {
  Preview({
    index: 0,
    list: imgList.value,
    onClose: (i: number) => {
      root.$message.info('关闭的图片索引：' + i)
    },
    onSelect: (i: number) => {
      root.$message.info('当前点击的图片索引：' + i)
    }
  })
}
</script>

<style lang="less" scoped>
.img-wrap {
  display: flex;
  justify-content: center;

  .img-item {
    position: relative;
    width: 400px;
    height: 300px;
    margin: 0 10px;
    overflow: hidden;
    cursor: pointer;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
