import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/historia',
    name: 'Historia',
    component: () => import(/* webpackChunkName: "Historia" */ '../views/Historia.vue')
  },
  {
    path: '/eventos',
    name: 'Eventos',
    component: () => import(/* webpackChunkName: "Historia" */ '../views/Eventos.vue')
  },
  {
    path: '/tetos',
    name: 'Tetos',
    component: () => import(/* webpackChunkName: "Historia" */ '../views/Tetos.vue')
  },
  {
    path: '/discografia',
    name: 'Discografia',
    component: () => import(/* webpackChunkName: "Historia" */ '../views/Historia.vue')
  },
  {
    path: '/contactos',
    name: 'Contactos',
    component: () => import(/* webpackChunkName: "Historia" */ '../views/Historia.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
