import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import axios from "axios";
import store from "./store";
import VueMeta from "vue-meta";
import moment from "moment";

Vue.config.productionTip = false;

axios.defaults.baseURL = "https://sikadu-unbaja.herokuapp.com";

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("DD-MM-YYYY");
  }
});

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});

store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
  new Vue({
    vuetify,
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
