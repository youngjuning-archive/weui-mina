Page({
  data: {
    percentage:0
  },
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    let startYear = new Date().getFullYear().toString()
    let endYear = (new Date().getFullYear()+1).toString()
    this.setData({
      percentage: (((new Date().getTime()/1000 - new Date(startYear).getTime()/1000)/(new Date(endYear).getTime()/1000 - new Date(startYear).getTime()/1000))*100).toFixed(4),
      year: new Date().getFullYear()
    },() => {
      let interval = setInterval(() => {
        this.setData({
          percentage: (((new Date().getTime()/1000 - new Date(startYear).getTime()/1000)/(new Date(endYear).getTime()/1000 - new Date(startYear).getTime()/1000))*100).toFixed(4),
          year: new Date().getFullYear()
        })
      },1000)
      wx.hideLoading()
    })
  },

  onShareAppMessage: function () {
    return {
      title: new Date().getFullYear().toString()+'年已经过去了'+ this.data.last + '%'
    }
  }
})
