import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/page/index'
import Home from '@/page/home'
import Category from '@/page/category'
import ShoppingCart from '@/page/cart'
import Me from '@/page/me'
import BookDetail from '@/page/detail'
// import HelloWorld from '@/components/HelloWorld'
// import HelloVue from '@/components/HelloVue';
// import TodoList from '@/components/todo';
// import DuoLibrary from '@/page/index';
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    linkActiveClass: "active",
    routes: [
      {
        name: 'Index',
        path: '/',
        component: Index,
        children: [
          {
            name: 'Home',
            path: 'home',
            component: Home
          },
          {
            name: 'Categories',
            path: 'categories',
            component: Category
          },
          {
            name: 'ShoppingCart',
            path: 'shopping-cart',
            component: ShoppingCart
          },
          {
            name: 'Me',
            path: 'me',
            component: Me
          }
        ]
      },
      {
        name: 'BookDetail',
        path: '/books/:id',
        component: BookDetail
      }
      // {
      //   path: '/hello',
      //   component: HelloWorld,
      //   children: [{
      //     path:'vue',
      //     component: HelloVue
      //   }]
      // },
      // {
      //   path: '/vue',
      //   component: HelloVue
      // },
      // {
      //   path: '/todo',
      //   component: TodoList
      // },
      // {
      //   path: '/library',
      //   component: DuoLibrary
      // }
    ]
  })