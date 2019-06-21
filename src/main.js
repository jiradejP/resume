import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
// import app from './styles/main.css'

// Vue.use(app)
Vue.config.productionTip = false

require('./styles/main.css')
new Vue({
  render: h => h(App),
}).$mount('#app')

