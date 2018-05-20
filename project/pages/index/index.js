const app = getApp()

Page({
  data: {
    btns: [
      {url:'/pages/wxparse/index',text:'wxparse组件'},
      {url:'/pages/wxlogin/index',text:'wxlogin组件'},
      {url:'/pages/welcome/index',text:'welcome组件'},
      {url:'/pages/actionsheet/index',text:'actionsheet组件'},
      {url:'/pages/better-progress/index',text:'better-progress组件'}
    ]
  },
  onLoad: function (options) {
    if (app.globalData.isOnLaunch || options.first) {
      this.initPage(wx.getStorageSync('userInfo'))
    } else {
      app.onLaunchReadyCallback = res => {
        this.initPage(res.userInfo)
      }
    }
  },
  initPage(userInfo) {
    this.setData({userInfo: userInfo})
  },
  navigator(e) {
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: url
    })
  }
})
