import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import { Button, Table,Layout,Header,Footer,Menu,MenuItem,Sider,Icon } from 'view-design';
Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Layout', Layout);
Vue.component('Header', Header);
Vue.component('Footer', Footer);
Vue.component('Menu', Menu);
Vue.component('MenuItem', MenuItem);
Vue.component('Sider', Sider);
Vue.component('Icon', Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
