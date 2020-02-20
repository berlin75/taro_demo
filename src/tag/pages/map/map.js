import './map.scss'

import Taro, { Component } from '@tarojs/taro'
import { View, Text, Navigator } from '@tarojs/components'

import Header from '../../components/head/head'

export default class PageView extends Component {

  config = {
    navigationBarTitleText: 'Map组件'
  }

  constructor() {
    super(...arguments)
  }

  render() {
    return (
      <View className='container'>
        <Header title='Map'></Header>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
              {Taro.getEnv() == Taro.ENV_TYPE.WEAPP ? <Text>可直接使用微信小程序的Map组件</Text> : <Text>暂未支持，敬请期待</Text>}
            </View>
          </View>
        </View>
      </View>
    )
  }
}