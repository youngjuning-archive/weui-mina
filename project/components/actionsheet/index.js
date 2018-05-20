Component({
  /**
   * 组件的外部样式 - 类似hover-class
   */
  externalClasses: ['hover-class'],
  /**
   * 组件的对外属性
   */
  properties: {
    color: {
      type: String,
      value: '#000000'
    },
    itemList: {
      type: Array,
      value: []
    },
    showActionSheet: {
      type: Boolean,
      value: false
    }
  },
  data: {
    showActionSheet: false
  },
  methods: {
    onTap (e) {
      var myEventDetail = {
        tapIndex: e.currentTarget.dataset.index
      } // detail对象，提供给事件监听函数
      this.triggerEvent('select', myEventDetail)
    },
    onCancel () {
      this.setData({
        showActionSheet: false
      }, () => {
        this.triggerEvent('cancel')
      })
    }
  }
})
