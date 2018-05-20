const App = getApp()
Page({
  getUserInfo(e) {
    let userInfo = e.detail.userInfo
    wx.setStorageSync('userInfo', userInfo)
    if (userInfo) {
      wx.reLaunch({
        url: '/pages/index/index?first=true'
      })
    }
  }
});
