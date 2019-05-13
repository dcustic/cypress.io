import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import HelloWorld from "./components/HelloWorld";
import AboutUs from "./components/AboutUs";
import Register from "./components/Register";

Vue.config.productionTip = false;
Vue.use(VueRouter);


let router = new VueRouter({
routes : [
  {
    name: 'test',
    path: '/',
    component: HelloWorld
  },
  {
    name: 'aboutus',
    path: '/aboutus',
    component: AboutUs
  },
  {
    name: 'register',
    path: '/register',
    component: Register
  }
]
});



new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app');
