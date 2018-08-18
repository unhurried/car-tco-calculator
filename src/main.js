import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

import App from "./components/App.vue";
import store from "./store.js";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import './registerServiceWorker'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
