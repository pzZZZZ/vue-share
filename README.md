[Vue-share](https://github.com/pzZZZZ/vue-share)
----
一款基于[share.js](https://github.com/overtrue/share.js)开发的一款Vue插件.
> 一键分享到微博、QQ空间、QQ好友、微信、腾讯微博、豆瓣、Facebook、Twitter、Linkedin、Google+、点点等社交网站。

# 安装方式
1. [npm](https://npmjs.com)
```shell
npm i vue-share.js
```
2. [yarn](https://yarnpkg.com/zh-Hans/)
```shell
yarn add vue-share.js
```

# 使用方式
```js
import share from 'vue-share'
Vue.use(share)
Vue.components('V-share',share)
```
# 参数

| name         |type           | default  | description  |
| ------------  |:-------------:| :-----:|  -----|
| shareUrl      | String        | window.location.href | 需要分享的地址|
| shareTitle     | String, Number    |   document.title |标题 默认读取 document.title 或者 &lt;meta name="title" content="share.js" /&gt;|
| shareDescription | String      |    无 |描述, 默认读取head标签：&lt;meta name="description" content="PHP弱类型的实现原理分析" /&gt;|
| shareDisabled | Array      |   [] |禁用的站点|
| shareSites | Array      |    无 |启用的站点|
| shareWechatQrcodeTitle | String      |    "微信扫一扫：分享" |微信二维码提示文字|
| shareWechatQrcodeHelper | String      |   &lt;p&gt;微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。&lt;/p&gt; |二维码描述文字|
