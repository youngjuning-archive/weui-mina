var sliderWidth = 96

Page({
  data: {
    tabs: ["陈芷尤","陈华鑫","朱千雪",], // tabs标题
    activeIndex: 0, // 默认索引
    sliderOffset: 0, // 滑块偏移量
    sliderLeft: 0, // 滑块居中偏移量，受tabs长度和sliderWidth影响
    views: [
      {
        src: 'http://media.tantannews.com/wp-content/uploads/2017/11/329055-1.jpg'
      },
      {
        src: 'http://n.sinaimg.cn/sinacn/w640h608/20180113/2344-fyqrewh6043290.jpg'
      },
      {
        src: 'https://astrokentico.s3.amazonaws.com/xuan/files/1b/1b7befc9-66fd-4857-af79-049eb423f6bc.jpg'
      },
      {
        src: 'http://cf-xuan.digitalfive.com/getattachment/91e7ba9f-ed9d-4d3d-bd55-b0afce123f11/2-4.jpg.aspx'
      }
    ]
  },
  onLoad: function () {
    // 初始化navbar
    wx.getSystemInfo({
      success: res => {
        let sliderWidth = res.windowWidth / this.data.tabs.length * 0.7
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
