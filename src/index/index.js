import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import './index.scss'

import UI from '../ui/pages/index/index'
import API from '../api/pages/index/index'
import TAG from '../tag/index'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro demo'
  }

  constructor () {
    super(...arguments)
    this.state = {
      tabbarCurrent: 0,
    }
  }

  handleTabBarClick (value) {
    this.setState({ tabbarCurrent: value })
  }

  render () {

    const tabbarList = [
      { title: 'component', iconType: 'bullet-list', text: 'new' }, 
      { title: 'taro-api', iconType: 'camera', dot: true }, 
      { title: 'taro-ui', iconType: 'folder', text: '100', max: 99 }
    ]
    
    const {tabbarCurrent} = this.state
    
    return (
      <View className='page'>
        <View className='content'>
          {
            tabbarCurrent == 0
            ? <TAG />
            :tabbarCurrent == 1
            ? <API />
            :tabbarCurrent == 2
            ? <UI />
            : null
          }
        </View>
        <AtTabBar 
          fixed 
          tabList={tabbarList} 
          onClick={this.handleTabBarClick.bind(this)} 
          current={this.state.tabbarCurrent} 
        />
      </View>
    )
  }
}
