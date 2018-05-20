Page({
  data: {
    itemList: ['拍照','从相册选择']
  },
  btntap (){
    this.setData({
      showActionSheet: true
    })
  },
  select (e){
    var tapIndex = e.detail.tapIndex
    if (tapIndex == 0) {
      wx.showToast({
        title: '点击了拍照',
        icon: 'success',
        mask: true
      })
    } else if (tapIndex == 1) {
      wx.showToast({
        title: '点击了从相册选择',
        icon: 'success',
        mask: true
      })
    }
  },
  cancel () {
    console.log('取消选择')
  },
  onShareAppMessage: function () {
    return {
      title: 'wxComponents',
      desc: '💄一款致力于微信小程序组件开发的开源库🏗!'
    }
  }
})
