import Vue from 'vue'
import Router from 'vue-router'
import Home from '../home'
import About from '../about'

Vue.use(Router)

const routes = [
  {path: '/home', component: Home},
  {path: '/about', component: About}
]

export default new Router({
  routes
})
