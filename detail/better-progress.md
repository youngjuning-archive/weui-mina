# better-progress

仿 BootStrap 进度条组件

| 属性名                | 类型   | 默认值  | 说明                   |
| --------------------- | ------ | ------- | ---------------------- |
| fontSize              | String | 0.75rem | 组件字体               |
| progressHeight        | String | 50rpx   | 组件高度               |
| progressBarAnimated   | String |         | 组件是否开启动画       |
| progressBarStriped    | String |         | 组件是否开启条纹样式   |
| progressBackground    | String | #e9ece  | 组件背景颜色           |
| progressBarBackground | String | #1AAD19 | 组件已完成部分的背景色 |
| percentage            | Number | 0       | 已完成百分比           |

**注：设置了progressBarAnimated就不用设置progressBarStriped**

## 使用该组件

1、配置json

```json
{
  "usingComponents": {
    "better-progress": "/components/better-progress/index"
  }
}
```

2、基本视图层引入

> 目前该组件只有一个属性，那就是百分比，注意是不带 **%** 号的。

```html
<better-progress percentage="{{percentage}}"></better-progress>
```

3、高级视图层引入

`.progress-container` 和 `progress-tip` 都已经设置了默认样式，你也可以覆盖默认样式。

```html
<view class="progress-container">
  <better-progress percentage="{{percentage}}"></better-progress>
  <view class="progress-tip">{{year}}年已经过去了{{percentage}}%</view>
</view>
```

## 演示

![](http://cdn.wakeuptocode.me/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20180506212716.png)

## 其他

下面是 BootStrap 的配色，大家可以参考一下：

```css
/*背景色*/
.bg-success{
  background-color: #28a745!important;
}
.bg-info{
  background-color: #17a2b8!important;
}
.bg-warning{
  background-color: #ffc107!important;
}
.bg-danger{
  background-color: #dc3545!important;
}
```
