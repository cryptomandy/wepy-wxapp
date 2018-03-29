import wepy from 'wepy'
import * as Mock from './mock.js'

const API_HOST = ''  //真正的调取地址
const DEBUG = true

const request = async params => {
  const { url, data, method = 'GET' } = params

  if (!url) {
    return
  }

  wx.showToast({
    title: '加载中',
    icon: 'loading'
  })

  if (!DEBUG) {
    const res = await wepy.request({
      url: API_HOST + url,
      method: method || 'GET',
      data: data || {},
      header: {'Content-Type': 'application/json'}
    })

    wx.hideToast()

    return res.data
  } else {
    return Mock.request(url, method, data)
  }
}

module.exports = {
  request
}
