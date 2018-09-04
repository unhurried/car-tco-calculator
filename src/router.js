import Vue from "vue";
import VueRouter from "vue-router";

import Main from "./components/Main.vue";
import Config from "./components/Config.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/", component: Main },
    { path: "/config", component: Config }
  ]
});
