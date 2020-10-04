import axios from "axios";

export default {
    namespaced: true,

    state: {
        jadwal: [],
        detail: [],
    },

    mutations: {
        SET_JADWAL(state, data) {
            state.jadwal = data;
        },

        SET_DETAIL_JADWAL(state, data) {
            state.detail = data;
        },
    },

    actions: {
        async getJadwal({ commit }) {
            await axios
                .get("mahasiswa/schedule/" + localStorage.getItem("token"))
                .then((response) => {
                    commit("SET_JADWAL", response.data.Info);
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        async getDetailJadwal({ commit }, params) {
            await axios
                .get("mahasiswa/schedule/" + params.year + '/' + params.quart + '/' + localStorage.getItem("token"))
                .then((response) => {
                    commit("SET_DETAIL_JADWAL", response.data.Info)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
};
