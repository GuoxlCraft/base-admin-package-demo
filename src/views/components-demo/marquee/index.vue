<template>
  <div class="page-container" style="padding: 60px">
    <el-alert
      effect="dark"
      :closable="false"
      title="无缝滚动组件。容器需要固定尺寸"
      type="info"
      style="margin-bottom: 20px"
    />
    <marquee class="container" :data="list">
      <div v-for="item in list" :key="item.title" class="item">
        <span class="title">{{ item.title }}</span>
        <span class="date">{{ item.date }}</span>
      </div>
    </marquee>

    <el-alert
      effect="dark"
      :closable="false"
      title="向下滚动"
      type="info"
      style="margin-top: 20px; margin-bottom: 20px"
    />
    <marquee class="container" :data="list" direction="down">
      <div v-for="item in list" :key="item.title" class="item">
        <span class="title">{{ item.title }}</span>
        <span class="date">{{ item.date }}</span>
      </div>
    </marquee>

    <el-alert
      effect="dark"
      :closable="false"
      title="向左滚动"
      type="info"
      style="margin-top: 20px; margin-bottom: 20px"
    />
    <marquee class="container2" :data="list" direction="left">
      <div v-for="(item, index) in list" :key="item.title" class="item2">
        {{ index }}
      </div>
    </marquee>

    <el-alert
      effect="dark"
      :closable="false"
      title="向右滚动"
      type="info"
      style="margin-top: 20px; margin-bottom: 20px"
    />
    <marquee class="container2" :data="list" direction="right">
      <div v-for="(item, index) in list" :key="item.title" class="item2">
        {{ index }}
      </div>
    </marquee>

    <el-alert
      effect="dark"
      :closable="false"
      title="间隔滚动"
      type="info"
      style="margin-top: 20px; margin-bottom: 20px"
    />
    <marquee class="container" :data="list" :scroll-length="60" :wait-time="2000">
      <div v-for="item in list" :key="item.title" class="item">
        <span class="title">{{ item.title }}</span>
        <span class="date">{{ item.date }}</span>
      </div>
    </marquee>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MarqueeDemo'
})
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { Marquee } from '_c'

const list = ref<IObj[]>([])

for (let i = 0; i < 20; i++) {
  list.value.push({
    title: `无缝滚动第${i}行无缝滚动第${i}行`,
    date: '2017-12-16'
  })
}
</script>

<style lang="less" scoped>
.container {
  height: 150px;
}

.item {
  height: 30px;
  line-height: 30px;
}

.date {
  margin-left: 50px;
}

.container2 {
  height: 70px;
  font-size: 0;
}

.item2 {
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 10px;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  background: #91d5ff;
}
</style>
