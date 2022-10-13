import Vue from 'vue'
import {
  ComTable,
  SvgIcon,
  ComSearch,
  ComDialog,
  ComDetail,
  ComForm,
  Echart,
  Ellipsis,
  Marquee,
  Preview,
  ElMessage
  // showMore
} from 'base-admin'

// register globally
Vue.component('ComTable', ComTable)
Vue.component('SvgIcon', SvgIcon)
Vue.component('ComSearch', ComSearch)
Vue.component('ComDialog', ComDialog)
Vue.component('ComDetail', ComDetail)
Vue.component('ComForm', ComForm)

import '@/assets/icons' // icon

export { Echart, SvgIcon, Ellipsis, Marquee, Preview, ElMessage }
