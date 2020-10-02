import axios from "axios";

export default {
  namespaced: true,

  state: {
    nilai: [],
  },

  mutations: {
    SET_NILAI(state, data) {
      state.nilai = data;
    },
  },

  actions: {
    getNilai({ commit }) {
      axios
        .get("mahasiswa/grade/summary/" + localStorage.getItem("token"))
        .then((response) => {
          commit("SET_NILAI", response.data.Grade);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
