import Vue from "vue";
import Vuex from "vuex";
import auth from "@/store/auth";
import pembayaran from "@/store/pembayaran";
import nilai from "@/store/nilai";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //
  },

  mutations: {
    //
  },

  actions: {
    //
  },

  modules: {
    auth,
    pembayaran,
    nilai,
  },
});
