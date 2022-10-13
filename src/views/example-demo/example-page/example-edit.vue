<template>
  <div class="page-container" style="padding: 30px">
    <info-write :id="$route.query.id" @success="success" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ExampleEdit'
})
</script>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import InfoWrite from './components/InfoWrite.vue'
const root = (getCurrentInstance() as any).proxy

function success(type: string) {
  root.$bus.emit('success', type)
}
</script>
