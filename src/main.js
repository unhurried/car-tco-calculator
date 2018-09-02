import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

import App from "./components/App.vue";
import store from "./store.js";
import router from "./router.js";
import "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
