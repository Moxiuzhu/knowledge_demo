
<template>
  <div class="news">
    <div class="news-item" v-for="(news, index) in newsList" :key="index">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="head-title">{{news.title}}</span>
        </div>
        <div class="content-box">
          <img :src="news.img" :alt="news.title" class="img">
          <div class="content" v-html="news.content"></div>
        </div>

      </el-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import img from '../assets/react.jpeg'
export default {
  data () {
    return {
      img,
      newsList: [
        {
          img: require('../assets/mobile.jpeg'),
          title: '浅谈移动端开发技术',
          content: `在说 Hybrid App 之前不得不先讲到 Native App，这是最为传统的一种移动端开发技术。<br />
          在 iOS 和安卓中官方的开发语言是 oc/swift、java/kotlin，使用这些开发出来的 App 一般称之为原生应用。<br />
          原生应用一般体验较好，性能比较高，可以提前把资源下载到本地，打开速度快。<br />
          除此之外，原生应用可以直接调用系统摄像头、通讯录、相册等功能，也可以访问到本地资源，功能强大。<br /><br />
          Hybrid App 是介于 Native 和 Web 之间的一些开发模式，一般称作混合开发。<br />
          简单来说 Hybrid 就是套壳 App，整个 App 还是原生的，也需要下载安装到手机，但是 App 里面打开的页面既可以是 Web 的，又可以是原生的。<br />
          H5 页面会跑在 Native 的一个叫做 WebView 的容器里面，我们可以简单理解为在 App 里面打开了一个 Chrome 浏览器，在这个浏览器里面打开一个 Tab 去加载线上或者本地的 H5 页面，这样还可以实现打开多 WebView 来加载多个页面。`
        },
        {
          img: require('../assets/vue.jpg'),
          title: '【Vuejs】探索 Vue.js 响应式原理',
          content: `提到“响应式”三个字，大家立刻想到啥？响应式布局？响应式编程？<br />
          从字面意思可以看出，具有“响应式”特征的事物会根据条件变化，使得目标自动作出对应变化。比如在“响应式布局”中，页面根据不同设备尺寸自动显示不同样式。<br />
          Vue.js 中的响应式也是一样，当数据发生变化后，使用到该数据的视图耶会相应进行自动更新。<br /><br />
          当我们使用目前主流的前端框架 Vue.js 和 React 开发业务时，只需关注页面数据如何变化，因为数据变化后，视图也会自动更新，这让我们从繁杂的 DOM 操作中解脱出来，提高开发效率。<br />
          “通过改变数据，来自动更新视图”，换个说法就是“数据改变后，使用该数据的地方被动发生响应，更新视图”。`
        },
        {
          img: require('../assets/boke.jpeg'),
          title: '静态博客如何高性能插入评论',
          content: `我们知道，静态博客由于不带有动态功能，所以针对评论这种动态需求比较大众的做法就是使用第三方评论系统。第三方评论的本质其实就是使用 JS 去调取第三方服务接口获取评论后动态渲染到页面中。虽然它很好的解决了这个问题，但是由于需要请求接口，在体验上远比动态博客的直出效果要差很多。所以当我把博客从动态博客 Typecho 迁移到静态博客 Hugo 上来时，就一直在思考这个问题。直到我看到了 Hugo 的 getJSON 方法，发现原来静态博客也是能够像动态博客一样直出评论的。<br /><br />
          大部分的静态博客的原理是解析存储内容的文件夹，使用一些模板语言遍历数据生成一堆 HTML 文件。而 Hugo 除了解析 Markdown 内容之外，还支持额外的数据获取方法 getJSON。由于有了 getJSON 方法的出现，我们可以实现在博客编译构建过程中动态的去获取评论接口数据，将其渲染到页面中，实现评论数据的直出效果。关于 getJSON 的更多介绍，可以查看 Hugo 文档数据模板[1]一节。`
        },
        {
          img: require('../assets/react.jpeg'),
          title: 'React Server Component 可能并没有那么香',
          content: `前段时间 React 团队发布了一项用于解决 React 页面在多接口请求下的性能问题的解决方案 React Server Components[1]。当然该方案目前还在草案阶段，官方也只是发了视频和一个示例 demo[2] 来说明这个草案[3]。<br /><br />
          官方在视频和 RFC 中说明了产生这个方案的主要原因是因为大量的 React 组件依赖数据请求才能做渲染。如果每个组件自己去请求数据的话会出现子组件要等父组件数据请求完成渲染子组件的时候才会开始去请求子组件的数据，也就是官方所谓的 WaterFall 数据请求队列的问题。而将数据请求放在一起请求又非常不便于维护。<br><br>
          既然组件需要数据才能渲染，那为什么接口不直接返回渲染后的组件呢？所以他们提出了 Server Components 的解决方案。我们暂且不管这其中的逻辑有没有道理，先来看看该方案的大体流程是怎样的。<br /><br />
          方案的大概就是将 React 组件拆分成 Server 组件（.server.tsx）和 Client 组件（.client.tsx）两种类型。其中 Server 组件会在服务端直接渲染并返回。与 SSR 的区别是 Server Components 返回的是序列化的组件数据，而不是最终的 HTML。`
        }
      ]
    }
  },
  methods: {
    getData () {
      // 执行 POST 请求
      axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.news {
  padding: 20px 60px;
  .news-item {
    margin-bottom: 15px;
    .head-title {
      font-weight: bold;
    }
    .content-box {
      display: flex;
      align-items: center;
      .img {
        min-width: 380px;
        max-width: 380px;
        height: 220px;
      }
      .content {
        margin-left: 15px;
        line-height: 26px;
      }
    }
  }
}
</style>
