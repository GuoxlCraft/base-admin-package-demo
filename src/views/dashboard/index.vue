<template>
  <div class="dashboard page-container">
    <div class="dashboard-header">
      <img src="@/assets/img/logoBig.png" alt="" />
      <h4>起源公共依赖库</h4>
      <span>基于vue2.7的npm私库</span>
      <div class="button" @click="openDocswweb()">前往使用文档</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Dashboard'
}
</script>
<script setup lang="ts">
function openDocswweb() {
  window.open('https://guoxlcraft.github.io/microapp-cli-doc/')
}
</script>

<style lang="less" scoped>
.dashboard {
  &-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      margin: 60px 0 30px;
    }
    h4 {
      font-size: 48px;
      font-weight: bold;
      line-height: 60px;
      margin: 0;
    }
    span {
      line-height: 60px;
      color: #999;
      font-weight: bold;
    }
    .button {
      line-height: 30px;
      width: 130px;
      text-align: center;
      color: #666;
      border: 1px solid #999;
      border-radius: 8px;
      cursor: pointer;
      background: #f0f0f0;
      box-shadow: 0px 5px 15px rgba(136, 142, 184, 0.3);
      transition: all ease 0.5s;
      &:hover {
        background: #fff;
        color: #333;
        transform: translateY(-5px);
        box-shadow: 0px 10px 15px rgba(136, 142, 184, 0.3);
      }
    }
  }

}
</style>
