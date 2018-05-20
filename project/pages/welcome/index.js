Page({
  onLoad() {
    this.isHaveUserInfo().then(res => {
      this.setData({showWelcome: !res})
    })
  },

  /**
   * 判断用户是否授权
   */
  isHaveUserInfo() {
    return new Promise((resolve, reject) =>{
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            resolve(true)
          } else {
            resolve(false)
          }
        },
      })
    })
  },

  getUserInfo(e) {
    this.setData({showWelcome: false},() => {
      if (e.detail.errMsg == 'getUserInfo:fail auth deny') {
        // 用户拒绝授权
        this.openSetting()
      } else {
        // 用户同意授权
        wx.setStorageSync('userInfo', e.detail.userInfo)
      }
    })
  },

  openSetting() {
    wx.openSetting({
      success: res => {
        if (!res.authSetting['scope.userInfo']) {
          this.openSetting()
        } else {
          wx.getUserInfo({
            success: res =>{
              wx.setStorageSync('userInfo', res.userInfo)
            }
          })
        }
      }
    })
  }
})
