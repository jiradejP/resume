// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Nav from "./Nav";
import App from "./App";
import router from "./router";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#nav",
  components: { Nav },
  template: "<Nav/>"
})

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
// Vue.use(Quasar, {
//   components: {
//     QBtn
//   }
// })
// const Navbar = new Vue ({
//   el:'#navbar',
//   components:{
//     NavbarComponent
//   }
// })
