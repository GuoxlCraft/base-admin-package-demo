<template>
  <div class="page-container" style="padding: 30px">
    <detail :id="$route.query.id" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ExampleDetail'
})
</script>

<script setup lang="ts">
import Detail from './components/Detail.vue'
</script>
