import Vue from 'vue'
import Router from 'vue-router'
import cart from '@/components/cart'
import cart1 from '@/components/cart1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cart',
      component: cart
    },{
    	path: '/cart1',
      name: 'cart1',
      component: cart1
    }
  ]
})
