import Vue from "vue";
import Antd from "ant-design-vue";
// import { Button } from 'ant-design-vue';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";

// Vue.component(Button.name, Button);
Vue.config.productionTip = false;


Vue.use(Antd);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
