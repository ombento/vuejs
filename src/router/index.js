import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import tes from '@/components/hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloworld',
      component: tes
    },
    {
      path: '/tes',
      name: 'tes',
      component: HelloWorld
    }
  ]
})
