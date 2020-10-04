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

    async printNilai(params) {
      await axios({
        url: 'mahasiswa/report/grade/' + params.year + '/' + params.quart + '/' + localStorage.getItem("token"),
        method: 'GET',
        responseType: 'blob', // important
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'file.pdf');
        document.body.appendChild(link);
        link.click();
      });
    }
  },
};
