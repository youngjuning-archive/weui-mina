var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Component({
  // 组件的外部样式 - 类似hover-class
  externalClasses: ['hover-class'],
  // 组件的对外属性
  properties: {
    tabs: {
      type: Array,
      value: ["选项一", "选项二", "选项三"]
    }
  },
  data: {
    activeIndex: 0, // 默认索引
    sliderOffset: 0, // 
    sliderLeft: 0 // 定义滑块偏移量
  },
  ready: function() {
    wx.getSystemInfo({
      success: res => {
        this.setData({
          sliderLeft: (res.windowWidth / this.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / this.data.tabs.length * this.data.activeIndex
        });
      }
    });
  },
  methods: {
    getUserInfo(e) {
      this.triggerEvent('getuserinfo', e.detail)
    },
    tabClick: function (e) {
      console.log(e)
      this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
      });
    }
  }
})
