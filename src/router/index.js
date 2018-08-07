import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloVue from '@/components/HelloVue';
import TodoList from '@/components/todo';
import DuoLibrary from '@/page/index';
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/hello',
        component: HelloWorld,
        children: [{
          path:'vue',
          component: HelloVue
        }]
      },
      {
        path: '/vue',
        component: HelloVue
      },
      {
        path: '/todo',
        component: TodoList
      },
      {
        path: '/library',
        component: DuoLibrary
      }
    ]
  })