import axios from "axios";

export default {
  namespaced: true,

  // Ketiga
  state: {
    nilai: [],
    detail: [],
  },

  // Keempat
  getters: {
    dataNilai(state) {
      return state.nilai
    },
    detailNilai(state) {
      return state.detail
    },
  },

  // Kedua
  mutations: {
    SET_NILAI(state, data) {
      state.nilai = data;
    },

    SET_DETAIL_NILAI(state, data) {
      state.detail = data;
    }
  },

  // Pertama
  actions: {
    async getNilai({ commit }, token) {
      await axios
        .get(`mahasiswa/grade/summary/${token}`)
        .then((response) => {
          commit("SET_NILAI", response.data.Grade);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getDetailNilai({ commit }, params) {
      await axios
        .get(`mahasiswa/grade/${params.year}/${params.quart}/${params.token}`)
        .then((response) => {
          commit("SET_DETAIL_NILAI", response.data.Grade);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async printNilai(_, params) {
      await axios({
        url:
          `mahasiswa/report/grade/${params.year}/${params.quart}/${params.token}`,
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Nilai_Semester.pdf");
        document.body.appendChild(link);
        link.click();
      });
    },

    async printTranskrip(_, token) {
      await axios({
        url: `mahasiswa/report/transcript/${token}`,
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Transkrip-Nilai.pdf");
        document.body.appendChild(link);
        link.click();
      });
    },
  },
};
