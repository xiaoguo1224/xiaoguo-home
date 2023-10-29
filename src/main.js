import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import "animate.css"
// import "wowjs/css/libs/animate.css"// 巨坑... 此地方要引入两个css
// import wow from 'wowjs'
// Vue.prototype.$wow = wow
import $ from 'jquery'
Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueParticles from 'vue-particles'  
Vue.use(VueParticles)

// md文件引入
import { mdArticle } from "./docs/index";
Vue.use(mdArticle);

import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)

// import axios from 'axios'
new Vue({
  router,
  $,
  render: h => h(App)
}).$mount('#app')
