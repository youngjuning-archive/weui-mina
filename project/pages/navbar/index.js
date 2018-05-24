Page({
  data: {
    tabs: ["钢铁侠","美国队长","蜘蛛侠","黑寡妇"], // tabs标题
    activeIndex: 0, // 默认索引
    sliderOffset: 0, // 滑块偏移量
    sliderLeft: 0, // 滑块居中偏移量，受tabs长度和sliderWidth影响
    views: [
      {
        src: 'http://t.cn/R1v7LR7'
      },
      {
        src: 'http://t.cn/R1v73kO'
      },
      {
        src: 'http://t.cn/R1vzGEk'
      },
      {
        src: 'http://t.cn/R1vz0HR'
      }
    ]
  },
  onLoad: function () {
    // 初始化navbar
    wx.getSystemInfo({
      success: res => {
        let sliderWidth = res.windowWidth / this.data.tabs.length * 0.8 // 滑动条宽度，可调整阈值
        this.setData({
          sliderLeft: (res.windowWidth / this.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / this.data.tabs.length * this.data.activeIndex,
          windowWidth: res.windowWidth,
          sliderWidth: sliderWidth
        })
      }
    })
  },
  // 点击navbar
  tabClick(e) {
    this.setData({
      activeIndex: e.currentTarget.id
    })
  },
  // swiper滑动change事件
  handleSwiperChange: function (e) {
    let current = e.detail.current
    let sliderOffset = current*this.data.windowWidth/this.data.tabs.length
    this.setData({
      sliderOffset: sliderOffset,
      activeIndex: current
    })
  },
})
