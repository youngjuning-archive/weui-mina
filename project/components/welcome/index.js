Component({
  /**
   * 组件的外部样式 - 类似hover-class
   */
  externalClasses: ['hover-class'],
  /**
   * 组件的对外属性
   */
  properties: {
    title: {
      type: String,
      value: '标题'
    },
    content: {
      type: String,
      value: '内容'
    },
    showWelcome: {
      type: Boolean,
      value: false
    }
  },
  data: {
    showActionSheet: false
  },
  methods: {
    getUserInfo(e) {
      this.triggerEvent('getuserinfo', e.detail)
    }
  }
})
