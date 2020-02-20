import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import Index from './index/index'

import './app.scss'

class App extends Component {
  config = {
    pages: [
      'index/index',

      // 'tag/index',
      'tag/pages/view/view',
      'tag/pages/scroll-view/scroll-view',
      'tag/pages/icon/icon',
      'tag/pages/progress/progress',
      'tag/pages/image/image',
      'tag/pages/audio/audio',
      'tag/pages/video/video',
      'tag/pages/swiper/swiper',
      'tag/pages/form/form',
      'tag/pages/input/input',
      'tag/pages/checkbox/checkbox',
      'tag/pages/radio/radio',
      'tag/pages/button/button',
      'tag/pages/text/text',
      'tag/pages/label/label',
      'tag/pages/picker/picker',
      'tag/pages/picker-view/picker-view',
      'tag/pages/slider/slider',
      'tag/pages/switch/switch',
      'tag/pages/textarea/textarea',
      'tag/pages/canvas/canvas',
      'tag/pages/map/map',
      'tag/pages/navigator/navigator',
      'tag/pages/redirectPage/redirectPage',
      'tag/pages/navigatePage/navigatePage',
      'tag/pages/camera/camera',

      // 'api/pages/index/index',
      'api/pages/network/index',
      'api/pages/storage/index',
      'api/pages/location/index',
      'api/pages/interface/index',
      'api/pages/media/index',
      'api/pages/system/systemInfo/index',
      'api/pages/system/networkType/index',

      // 'ui/pages/index/index',
      'ui/pages/basic/index',
      'ui/pages/view/index',
      'ui/pages/view/article/index',
      'ui/pages/feedback/index',
      'ui/pages/data-entry/index',
      'ui/pages/layout/index',
      'ui/pages/navigation/index',
      'ui/pages/navigation/indexes/index',
      'ui/pages/advanced/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
