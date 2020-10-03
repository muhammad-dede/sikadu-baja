import axios from "axios";

export default {
  namespaced: true,

  state: {
    pembayaran: [],
  },

  mutations: {
    SET_PEMBAYARAN(state, data) {
      state.pembayaran = data;
    },
  },

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
