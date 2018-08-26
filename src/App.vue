<template>
  <div id="app">
    <!-- <h1>Hello App!</h1> -->
    <!-- <p> -->
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <!-- <router-link to="/hello">Go to World</router-link>
          <router-link to="/vue">Go to Vue</router-link> -->
    <!-- <md-button v-for="(item,index) in paths" :key="index" @click="goWorld(item)">{{item.title}}</md-button> -->
    <!-- </p> -->
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <!-- <div class="proj-list" v-for="(proj, index) in projs" :key="index" >
      <router-link class="title-link" :to=proj.path>{{proj.title}}</router-link>
    </div> -->
    <!-- <div class="tabs">
      <ul>
        <li>
          <router-link :to="{ name : 'Home' }" tag="li">
            <div><img src="/assets/images/home.svg"></div>
            <div>首页</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name : 'Categories' }" tag="li">
            <div><img src="/assets/images/category.svg"></div>
            <div>分类</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name : 'ShoppingCart' }" tag="li">
            <div><img src="/assets/images/cart.svg"></div>
            <div>购物车</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name : 'Me' }" tag="li">
            <div><img src="/assets/images/me.svg"></div>
            <div>我</div>
          </router-link>
        </li>
      </ul>
    </div> -->
    <!-- <div class="content"> -->
      <router-view></router-view>
    <!-- </div> -->
  </div>
</template>

<script type="text/ecmascript-6">
  import "./assets/less/site.less"
  export default {
    name: 'app',
    data() {
      return {
        // projs: [{
        //   title: '朵朵日记',
        //   path: '/todo'
        // },{
        //   title: '朵朵图书馆',
        //   path: '/library'
        // }],
        // paths: [{
        //     title: 'Go to world',
        //     path: '/hello/vue'
        //   },
        //   {
        //     title: 'Go to vue',
        //     path: '/vue'
        //   }
        // ]
      }
    },
    // components: {
    //   [Button.name]: Button
    // },
    methods: {
      // goWorld(item) {
      //   this.$router.push(item.path)
      // }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  /* .proj-list {
    flex-direction: column;
  }
  
  .title-link, .title-link:hover {
    text-decoration-line: none;
    color: #2c3e50;
    font-size: 24px;
  } */
</style>
