import axios from "axios";

export default {
    namespaced: true,

    state: {
        nilai: [],
    },

    getters: {
        chartNilai(state) {
            return state.nilai
        },
    },

    mutations: {
        SET_NILAI(state, data) {
            state.nilai = data;
        },
    },

    actions: {
        async getChartNilai({ commit }, token) {
            await axios
                .get(`mahasiswa/grade/summary/${token}`)
                .then((response) => {
                    commit("SET_NILAI", response.data.Grade.Data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
