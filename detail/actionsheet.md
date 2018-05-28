# actionsheet

仿 weui.js actionsheet 组件,因为默认的不支持调起 contact/share/getUserInfo/getPhoneNumber/launchApp 这些接口，所以写了这个组件出来

| 属性名          | 类型    | 默认值  | 说明                | 必须 |
| --------------- | ------- | ------- | ------------------- | ---- |
| color           | String  | #000000 | 字体颜色            | 否   |
| itemList        | Array   | []      | 按钮的文字数组      | 是   |
| showActionSheet | Boolean | false   | 是否显示ActionSheet | 是   |
| bindselect      | Event   |         | 自定义选择事件      | 是   |
| bindcancel      | Event   |         | 自定义取消选择事件  | 否   |

**注：itemList 不要写太多项，后期我会控制数组长度为最大为6个**

## 墙裂推荐

如果你没有在 actionsheet 中使用 `contact/share/getUserInfo/getPhoneNumber/launchApp` 这些开放能力的需求的话，就自觉使用 `wx.showActionSheet` API吧。但是你要是有这个需求，这个组件绝对是你的不二选择。


## 使用该组件

1、配置json

```json
{
  "usingComponents": {
    "actionsheet": "/components/actionsheet/index"
  }
}
```

2、视图层引入

itemList、showActionSheet、bindselect 都是必须的，只有 bindcancel 不是

```html
<actionsheet itemList="{{itemList}}"
  showActionSheet="{{showActionSheet}}"
  bindselect="select"
  bindcancel="cancel">
    <button type="default" open-type="share" plain>分享给朋友</button>
  </actionsheet>
<view class="weui-btn-area">
  <button type="primary" class="weui-btn" bindtap="showActionSheet">显示ActionSheet</button>
</view>
```

3、样式

> 下面的样式放在页面中，注意不要修改，而且 button 组件必须加上 plain 属性

```css
button[open-type="share"][plain] {
  border:none;
  border-radius:0;
  color:#000000;
}

actionsheet button:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #d9d9d9;
  transform-origin: 0 0;
  transform: scaleY(.5);
}
```

3、逻辑层设置

需要注意的是，tapIndex 是通过 `e.detail.tapIndex` 获取的，你需要在 select 中通过这个值来判断你点击是哪一个按钮

```js
Page({
  data: {
    itemList: ['拍照','从相册选择'] // 不要超过6项
  },
  /**
   * 显示actionsheet
   */
  showActionSheet (){
    this.setData({showActionSheet: true})
  },
  /**
   * 响应点击项的事件
   */
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
  /**
   * 响应点击取消或遮罩层的事件 - 可以不设置
   */
  cancel () {
    console.log('取消选择')
  },
  ,
  onShareAppMessage: function () {
    return {
      title: 'wxComponents',
      desc: '💄一款致力于微信小程序组件开发的开源库🏗!'
    }
  }
})
```

## 演示

![](http://cdn.wakeuptocode.me/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20180510144730.png)
