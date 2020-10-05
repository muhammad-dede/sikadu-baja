import axios from "axios";

export default {
  namespaced: true,

  // Ketiga
  state: {
    pembayaran: [],
  },

  // Keempat
  getters: {
    dataPembayaran(state) {
      return state.pembayaran
    },
  },

  // Kedua
  mutations: {
    SET_PEMBAYARAN(state, data) {
      state.pembayaran = data;
    },
  },

  // Pertama
  actions: {
    async getPembayaran({ commit }) {
      await axios
        .get("mahasiswa/finance/" + localStorage.getItem("token"))
        .then((response) => {
          commit("SET_PEMBAYARAN", response.data.Finance);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
