var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["选项一","选项二","选项三"],
    activeIndex: 0, // 默认索引
    sliderOffset: 0, //
    sliderLeft: 0 // 定义滑块偏移量
  },
  onLoad: function () {
    wx.getSystemInfo({
      success: res => {
        this.setData({
          sliderLeft: (res.windowWidth / this.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / this.data.tabs.length * this.data.activeIndex,
          windowWidth: res.windowWidth
        })
      }
    })
  },
  tabClick(e) {
    this.setData({
      activeIndex: e.currentTarget.id
    })
  },
  handleSwiperChange: function (e) {
    let current = e.detail.current
    let sliderOffset = current*this.data.windowWidth/this.data.tabs.length
    this.setData({
      sliderOffset: sliderOffset,
      activeIndex: current
    })
  },
})
