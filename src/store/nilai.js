import axios from "axios";

export default {
  namespaced: true,

  state: {
    nilai: [],
    detail: [],
  },

  mutations: {
    SET_NILAI(state, data) {
      state.nilai = data;
    },

    SET_DETAIL_NILAI(state, data) {
      state.detail = data;
    }
  },

  actions: {
    async getNilai({ commit }) {
      await axios
        .get("mahasiswa/grade/summary/" + localStorage.getItem("token"))
        .then((response) => {
          commit("SET_NILAI", response.data.Grade);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getDetailNilai({ commit }, params) {
      await axios
        .get("mahasiswa/grade/" + params.year + '/' + params.quart + '/' + localStorage.getItem("token"))
        .then((response) => {
          commit("SET_DETAIL_NILAI", response.data.Grade);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
