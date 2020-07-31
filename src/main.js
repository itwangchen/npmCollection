import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import http from './http.js'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css';
// import wcPassword from "@/components/password-box/dist/index.common.js";
// Vue.component('wcPassword', wcPassword)
// Vue.use(ElementUI);
// Vue.use(wcPassword);
Vue.prototype.$http = http
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
