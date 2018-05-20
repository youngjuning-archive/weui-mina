App({
  onLaunch: function () {
    this.login().then(res => {
      console.log(res)
    })
    this.getUserInfo()
  },
  // 登录
  login() {
    return new Promise((resolve, reject) =>{
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          resolve(res)
        }
      })
    })
  },
  // 获取用户信息
  getUserInfo() {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              wx.setStorageSync('userInfo', res.userInfo)
              this.globalData.isOnLaunch = true

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.onLaunchReadyCallback) {
                this.onLaunchReadyCallback(res)
              }
            }
          })
        } else {
          wx.reLaunch({
            url: '/pages/wxlogin/index'
          })
        }
      }
    })
  },
  globalData: {
    isOnLaunch: false
  }
})
