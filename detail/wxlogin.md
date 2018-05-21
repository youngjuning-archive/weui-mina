# wxlogin

这个登录授权页相当的漂亮，相信很多人对它的 UI 都不陌生，也有同学把它作为欢迎过渡页。

## 组件属性

| 属性名          | 类型   | 默认值   | 说明                                     | 必须 |
| --------------- | ------ | -------- | ---------------------------------------- | ---- |
| logo            | String |          | 顶部logo，是图片地址                     | 否   |
| wxlogo          | String | ...      | 一定要是绝对路径，不写的话会显示用户头像 | 否   |
| authorizeText   | String | ...      | 授权提示文字                             | 否   |
| confirmText     | String | 微信登录 | 授权按钮文字                             | 否   |
| copyright       | String |          | 底部版权信息                             | 否   |
| backgroundColor | String | #2DC799  | 背景和按钮的颜色                         | 否   |

## 组件事件

| 属性名          | 说明                 |
| --------------- | -------------------- |
| bindgetuserinfo | 顶部logo，是图片地址 |

## 使用该组件

1、配置json

```json
{
  "usingComponents": {
    "wxlogin": "/components/wxlogin/index"
  }
}
```

2、视图层引入

```html
<wxlogin
  wxlogo="/pages/wxlogin/images/logo.jpg"
  authorizeText="我们申请获取以下权限：获得你的公开信息（昵称、头像等）"
  confirmText="授权登录"
  copyright="&copy; 2018 某某某公司"
  bindgetuserinfo="getUserInfo"></wxlogin>
```

## 登录流

组件封装了登录授权的按钮，但是整个登录流程不是一个组件就能搞定的，需要配合页面逻辑、app.js 来共同实现，你可以参考我的 demo 来完成登录流程。

## demo

![](http://cdn.wakeuptocode.me/wxlogin.gif)
