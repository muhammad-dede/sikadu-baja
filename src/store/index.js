import Vue from "vue";
import Vuex from "vuex";
import auth from "@/store/auth";
import pembayaran from "@/store/pembayaran";
import nilai from "@/store/nilai";
import jadwal from '@/store/jadwal'
import beranda from '@/store/beranda'

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
    beranda,
    jadwal,
    nilai,
    pembayaran,
    auth,
  },
});
