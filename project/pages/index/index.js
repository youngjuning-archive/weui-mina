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
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.onLaunchReadyCallback = res => {
        this.initPage(wx.getStorageSync('userInfo'))
      }
    }
  },
  initPage(userInfo) {
    return new Promise((resolve, reject) =>{
      this.setData({userInfo: userInfo},() => {
        resolve()
      })
    })
  },
  navigator(e) {
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: url
    })
  }
})
