/**
 * 配置及公有属性
 **/
var realWindowWidth = 0;
var realWindowHeight = 0;
wx.getSystemInfo({
  success: function(res) {
    realWindowWidth = res.windowWidth
    realWindowHeight = res.windowHeight
  }
})
Component({
  properties: {
    content: Object
  },
  methods: {
    // a标签点击事件
    wxParseTagATap(e) {
      this.triggerEvent('atap', e.currentTarget.dataset)
    },
    // 图片点击事件
    wxParseImgTap(e) {
      var that = this;
      var nowImgUrl = e.target.dataset.src;
      var tagFrom = e.target.dataset.from;
      if (typeof(tagFrom) != 'undefined' && tagFrom.length > 0) {
        wx.previewImage({
          current: nowImgUrl, // 当前显示图片的http链接
          urls: that.data[tagFrom].imageUrls // 需要预览的图片http链接列表
        })
      }
    },
    /**
     * 图片视觉宽高计算函数区
     **/
    wxParseImgLoad(e) {
      var that = this;
      var tagFrom = e.target.dataset.from;
      var idx = e.target.dataset.idx;
      if (typeof(tagFrom) != 'undefined' && tagFrom.length > 0) {
        this.calMoreImageInfo(e, idx, that, tagFrom)
      }
    },
    // 假循环获取计算图片视觉最佳宽高
    calMoreImageInfo(e, idx, that, bindName) {
      var temData = that.data[bindName];
      if (!temData || temData.images.length == 0) {
        return;
      }
      var temImages = temData.images;
      var recal = this.wxAutoImageCal(e.detail.width, e.detail.height, that, bindName);
      var index = temImages[idx].index
      var key = `${bindName}`
      for (var i of index.split('.')) key += `.nodes[${i}]`
      var keyW = key + '.width'
      var keyH = key + '.height'
      that.setData({
        [keyW]: recal.imageWidth,
        [keyH]: recal.imageheight,
      })
    },

    // 计算视觉优先的图片宽高
    wxAutoImageCal(originalWidth, originalHeight, that, bindName) {
      //获取图片的原始长宽
      var windowWidth = 0,
        windowHeight = 0;
      var autoWidth = 0,
        autoHeight = 0;
      var results = {};
      var padding = that.data[bindName].view.imagePadding;
      windowWidth = realWindowWidth - 2 * padding;
      windowHeight = realWindowHeight;
      //判断按照那种方式进行缩放
      if (originalWidth > windowWidth) { //在图片width大于手机屏幕width时候
        autoWidth = windowWidth;
        autoHeight = (autoWidth * originalHeight) / originalWidth;
        results.imageWidth = autoWidth;
        results.imageheight = autoHeight;
      } else { //否则展示原来的数据
        results.imageWidth = originalWidth;
        results.imageheight = originalHeight;
      }
      return results;
    }
  }
})
