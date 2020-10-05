import axios from "axios";

export default {
    namespaced: true,

    state: {
        jadwal: [],
        detail: [],
    },

    getters: {
        dataJadwal(state) {
            return state.jadwal
        },

        detailJadwal(state) {
            return state.detail
        }
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
        async getJadwal({ commit }, token) {
            await axios
                .get(`mahasiswa/schedule/${token}`)
                .then((response) => {
                    commit("SET_JADWAL", response.data.Info);
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        async getDetailJadwal({ commit }, params) {
            await axios
                .get(`mahasiswa/schedule/${params.year}/${params.quart}/${params.token}`)
                .then((response) => {
                    commit("SET_DETAIL_JADWAL", response.data.Info)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
};
