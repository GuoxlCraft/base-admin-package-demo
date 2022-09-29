import 'core-js/stable'
import 'custom-event-polyfill'
import 'whatwg-fetch'
import 'core-js/web/url'
import 'regenerator-runtime/runtime'

import Vue from 'vue'

import '@/plugins/element-ui' // 按需引入element

import installBase from '@/installBase' // 加载公共依赖包
installBase(Vue)

import App from './App.vue'

import '@/components' // 引入全局组件

import { ElMessage } from '_c' // 引入自定义message配置
Vue.prototype.$message = ElMessage

import router from './router'

import store from './store' // 状态管理

import 'normalize.css' // 重置不同浏览器之间的标签默认样式

import VueBus from 'vue-bus' // bus总线
Vue.use(VueBus)

import '@/styles/index.less' // 引入全局样式

import './permission' // permission control

import { mockXHR } from '@/mock'
mockXHR()

Vue.config.productionTip = false

import { importDirective, $utils } from 'base-admin' // 引入全局指令
importDirective(Vue)
Vue.mixin({
  methods: {
    $splitNum: $utils.splitNum
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
