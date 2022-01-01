启动 npm run dev

打包npm run build

本次改版 提升开发效率80%以上


本框架所使用的是 以下最新版本， vue3 typescript4

"vue-class-component": "^8.0.0-rc.1",

"vue-loader": "^17.0.0",

"vue-property-decorator": "^10.0.0-rc.3",


#本框架已开发了所属相关组件，如有需要可以联系我定制组件

vue3 typescript组件库 在文件component 

本框架组件更适合前端开发，例：

##下拉框组件 常用下拉组件，

<Select @change="change" type="serch"
:data="[{label:11,value:111}] 也可以是 [111,222] 会自己动解析成[{label:111,value:111},{label:111,value:111}]"  v-model="value">
</Select>

change(data){

  常用组件data返回的是选中的值，如111,
  本组件会返回，三个值，
  {value:111,item:item,type:'serch'}
  其中item 为数组原对像如 {id:1,name:'下拉',creatime:'124124242',这些是后台所后的对像}

  this.valuename=data.item.name;
}


# createVue

## 项目介绍

- 本项目基于 webpack5 搭建 vue3 + ts 项目。[相关文章](https://juejin.cn/post/6955430382485553166)

- 你可以用此项目搭建属于你的项目！！

- 熬夜不易，如果您觉得我的文章或者 demo 有用，可以赏我杯咖啡(^\_−)☆

- webpack4 搭建 vue 项目点 [这里](https://github.com/zxpsuper/createVue/tree/v1.0.0)

  <details>
  <summary>微信</summary>

  <div>
      <img src="https://github.com/zxpsuper/Demo/blob/master/images/wechat.png" style="width: 320px; margin: 0 auto; display: block">
  </div>
  </details>

  **另外，我也做了一个[《从零搭建 react 的项目》](https://github.com/zxpsuper/createReact), 分享给大家**

> 在 github 项目的右上角，有三个按钮,分别是 watch、star、fork，新来的同学注意不要用错了，无休止的邮件提醒会给你造成不必要的信息干扰。
>
> 当你选择 Watching，表示你以后会关注这个项目的全部动态，以后只要这个项目发生变动，被别人提交了 pull request、被发起了 issue 等情况你都会收到邮件通知。
>
> star 相当于是点赞或收藏，方便以后查找。
>
> fork 表示你想要补充完善这个项目的内容。

![](https://github.com/zxpsuper/Demo/blob/master/images/fork_and_star.jpg)

## 使用方法：

```shell
# 克隆项目
git clone https://github.com/zxpsuper/createVue.git
# 进入文件夹
cd createVue

# 安装依赖
npm install

# 进入开发
npm start

# 打包
npm run build

# git commit
npm run commit
```


## 更新日志

#### :sunny:2021/04/17

- 添加 vue-router

- 添加 vuex

## 关于作者 :boy:

作者： 小皮咖

Email：zxpscau@163.com

Github: https://github.com/zxpsuper

知乎：https://www.zhihu.com/people/super-32-94-54/activities

掘金：https://juejin.im/user/5af17df4518825672a02e1f5

对内容有任何疑问，欢迎联系我。

