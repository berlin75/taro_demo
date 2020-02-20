const menusData = {
  name: 'Taro API',
  desc: '这里展示的是 Taro 官方端能力，将演示基本 API 的调用方式及效果。',
  list: [{
      name: '网络',
      url: '/api/pages/network/index'
    }, {
      name: '媒体',
      url: '/api/pages/media/index'
    }, {
      name: '数据缓存',
      url: '/api/pages/storage/index'
    }, {
      name: '位置',
      url: '/api/pages/location/index'
    }, {
      name: '设备',
      subList: [{
        name: '系统信息',
        url: '/api/pages/system/systemInfo/index'
      }, {
        name: '网络状态',
        url: '/api/pages/system/networkType/index'
      }]
    }, {
      name: '界面',
      url: '/api/pages/interface/index'
  }]
}
export default menusData
