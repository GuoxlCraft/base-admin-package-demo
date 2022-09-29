export default [
  // 详情接口
  {
    url: 'http://mockjs.test.cn/cas/auth',
    type: 'get',
    response: () => {
      return {
        code: 1,
        message: '操作成功',
        data: {
          token: '123456789',
          user: {
            id: '1',
            username: 'admin',
            nickname: 'admin'
          },
          ticket: '123456789',
          userMenus: [
            {
              name: '首页',
              url: 'dashboard',
              sort: 38,
              code: 'Dashboard',
              component: 'views/dashboard/index.vue',
              noCache: 1,
              openWay: '0',
              hidden: 0,
              type: 0,
              icon: 'homeLine',
              btnPower: [],
              children: []
            },
            {
              name: '功能组件',
              url: 'components-demo',
              component: '#',
              redirect: '/components-demo/echarts',
              code: 'ComponentsDemo',
              noCache: 1,
              openWay: '0',
              hidden: 0,
              type: 0,
              icon: 'homeLine',
              children: [
                {
                  name: '表格',
                  url: 'table',
                  component: 'views/components-demo/table/index',
                  code: 'TableDemo',
                  noCache: 1,
                  openWay: '0',
                  hidden: 0,
                  type: 0,
                  icon: 'homeLine'
                },
                {
                  name: '表单',
                  url: 'form',
                  component: 'views/components-demo/form/index',
                  code: 'FormDemo',
                  noCache: 1,
                  openWay: '0',
                  hidden: 0,
                  type: 0,
                  icon: 'homeLine'
                },
                {
                  name: '图表',
                  url: 'echarts',
                  component: 'views/components-demo/echarts/index',
                  code: 'EchartsDemo',
                  noCache: 1,
                  openWay: '0',
                  hidden: 0,
                  type: 0,
                  icon: 'homeLine'
                },
                {
                  name: '图片预览',
                  url: 'preview',
                  component: 'views/components-demo/preview/index',
                  code: 'PreviewDemo',
                  noCache: 1,
                  openWay: '0',
                  hidden: 0,
                  type: 0,
                  icon: 'homeLine'
                },
                {
                  name: '消息提示',
                  url: 'message',
                  component: 'views/components-demo/message/index',
                  code: 'MessageDemo',
                  noCache: 1,
                  openWay: '0',
                  hidden: 0,
                  type: 0,
                  icon: 'homeLine'
                },
                {
                  name: '查询',
                  url: 'search',
                  component: 'views/components-demo/search/index',
                  code: 'SearchDemo',
                  noCache: 1,
                  openWay: '0',
                  hidden: 0,
                  type: 0,
                  icon: 'homeLine'
                },

                {
                  name: '弹窗',
                  url: 'dialog',
                  component: 'views/components-demo/dialog/index',
                  code: 'DialogDemo',
                  noCache: 1,
                  openWay: '0',
                  hidden: 0,
                  type: 0,
                  icon: 'homeLine'
                },
                {
                  name: '详情组件',
                  url: 'detail',
                  component: 'views/components-demo/detail/index',
                  code: 'DetailDemo',
                  noCache: 1,
                  openWay: '0',
                  hidden: 0,
                  type: 0,
                  icon: 'homeLine'
                },

                {
                  name: '无缝滚动',
                  url: 'marquee',
                  component: 'views/components-demo/marquee/index',
                  code: 'MarqueeDemo',
                  noCache: 1,
                  openWay: '0',
                  hidden: 0,
                  type: 0,
                  icon: 'homeLine'
                }
              ]
            },
            {
              name: '综合实例',
              url: 'example-demo',
              component: '#',
              redirect: '/example-demo/example-dialog',
              code: 'ExampleDemo',
              noCache: 1,
              openWay: '0',
              hidden: 0,
              type: 0,
              icon: 'homeLine',
              children: [
                {
                  name: '弹窗',
                  url: 'example-dialog',
                  component: 'views/example-demo/example-dialog/index',
                  code: 'ExampleDialog',
                  noCache: 1,
                  openWay: '0',
                  hidden: 0,
                  type: 0,
                  icon: 'homeLine'
                },
                {
                  name: '页面',
                  url: 'example-page',
                  component: 'views/example-demo/example-page/index',
                  code: 'ExamplePage',
                  noCache: 1,
                  openWay: '0',
                  hidden: 0,
                  type: 0,
                  icon: 'homeLine'
                },
                {
                  name: '新增',
                  url: 'example-add',
                  component: 'views/example-demo/example-page/example-add',
                  code: 'ExampleAdd',
                  noCache: 1,
                  openWay: '0',
                  hidden: 0,
                  type: 0,
                  icon: 'homeLine'
                },
                {
                  name: '编辑',
                  url: 'example-edit',
                  component: 'views/example-demo/example-page/example-edit',
                  code: 'ExampleEdit',
                  noCache: 1,
                  openWay: '0',
                  hidden: 0,
                  type: 0,
                  icon: 'homeLine'
                },
                {
                  name: '详情',
                  url: 'example-detail',
                  component: 'views/example-demo/example-page/example-detail',
                  code: 'ExampleDetail',
                  noCache: 1,
                  openWay: '0',
                  hidden: 0,
                  type: 0,
                  icon: 'homeLine'
                }
              ]
            }
          ]
        }
      }
    }
    // 详情接口
  },

  {
    url: 'http://mockjs.test.cn/permission/getAllDictApi',
    type: 'get',
    response: () => {
      return {
        code: 1,
        message: '操作成功',
        data: []
      }
    }
  },
  {
    url: 'http://mockjs.test.cn/cas/logout',
    type: 'get',
    response: () => {
      return {
        code: 1,
        message: '操作成功',
        data: []
      }
    }
  }
]
