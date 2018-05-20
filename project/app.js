App({
  onLaunch: function () {
    this.login().then(res => {
      this.getUserInfo()
    })
  },
  // 登录
  // 若用户满足一定条件，则可以用 wx.login 获取到的 code 直接换到 unionId
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
  // wx.getUserInfo 不需要依赖 wx.login 就能调用得到数据
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
    isOnLaunch: false // 使用该变量来标示 onLaunch 中的异步请求是否完成（登录、获取用户信息）
  }
})
