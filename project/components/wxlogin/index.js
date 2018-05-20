Component({
  properties: {
    logo: String,
    authorizeText: {
      type: String,
      value: '我们申请获取以下权限：获得你的公开信息（昵称、头像等）'
    },
    confirmText: {
      type: String,
      value: '微信登录'
    },
    copyright: {
      type: String,
      value: '欢迎使用 weui-mina 框架@youngjuning'
    },
    backgroundColor: {
      type: String,
      value: '#2DC799'
    }
  },
  data: {
    isLoaded: false,
    angle: 0
  },
  methods: {
    getUserInfo(e) {
      this.triggerEvent('getuserinfo', e.detail)
    }
  },
  ready:function () {
    setTimeout(() => {
      this.setData({isLoaded: true})
    }, 1000)
    wx.onAccelerometerChange(res => {
      let angle = -(res.x * 30).toFixed(1)
      if (angle > 14) { angle = 14 }
      else if (angle < -14) { angle = -14 }
      if (this.data.angle !== angle) {
        this.setData({
          angle: angle
        })
      }
    })
  }
})
