Component({
  /**
   * 组件的外部样式 - 类似hover-class
   */
  externalClasses: ['hover-class'],
  /**
   * 组件的对外属性
   */
  properties: {
    fontSize: {
      type: String,
      value: '0.75rem'
    },
    progressHeight: {
      type: String,
      value: '50rpx'
    },
    progressBarAnimated: {
      type: String,
      value: ''
    },
    progressBarStriped: {
      type: String,
      value: ''
    },
    progressBackground: {
      type: String,
      value: '#e9ecef'
    },
    progressBarBackground: {
      type: String,
      value: '#1AAD19'
    },
    percentage: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
