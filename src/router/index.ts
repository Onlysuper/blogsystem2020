import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../views/Layout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
  },
  {
    path: '/article',
    name: 'article',
    component: () => import(/* webpackChunkName: "about" */ '../views/Article.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
