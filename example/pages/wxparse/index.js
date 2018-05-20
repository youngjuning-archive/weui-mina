import WxParse from '../../components/wxparse/wxParse.js'
Page({
  onLoad: function (options) {
    let content = '<a href="https://www.baidu.com">百度</a><img src="https://raw.githubusercontent.com/icindy/wxParse/master/screenshoot/screen.jpg">'
    WxParse.wxParse('content','html',content,this)
  },
  atap(e) {
    let src = e.detail.src
    wx.navigateTo({
      url: '/pages/webview/index?src='+src
    })
  }
})
