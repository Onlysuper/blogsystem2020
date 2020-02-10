import Vue from 'vue';
import VueRouter from 'vue-router';
import MainLayout from '../views/MainLayout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'layout',
    component: MainLayout
  },
  {
    path: '/layout',
    name: 'layout',
    component: MainLayout,
    children: [
      {
        path: '/article',
        name: 'article',
        component: () => import(/* webpackChunkName: "article" */ '../views/Article.vue'),
      },
      {
        path: '/note',
        name: 'note',
        component: () => import(/* webpackChunkName: "note" */ '../views/Note.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
