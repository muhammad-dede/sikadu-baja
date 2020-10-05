import axios from "axios";
import qs from "qs";

export default {
  namespaced: true,

  state: {
    token: null,
    user: null,
    serverError: null,
  },

  getters: {
    authenticated(state) {
      return state.token && state.user;
    },

    user(state) {
      return state.user;
    },
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },

    SET_USER(state, data) {
      state.user = data;
    },

    SET_ERROR(state, error) {
      state.serverError = error;
    },
  },

  actions: {
    async login({ dispatch }, credentials) {
      // Pake then untuk catch error nya dan get hasil dari promises
      await axios
        .post("/login/mahasiswa", qs.stringify(credentials))
        .then((response) => {
          return dispatch("attempt", response.data.Token);
        })
    },

    async attempt({ commit }, token) {
      await axios.get(`/mahasiswa/info/${token}`)
        .then((response) => {
          localStorage.setItem("token", token);
          commit("SET_TOKEN", token);
          commit("SET_USER", response.data.Info);
          commit("SET_ERROR", null);
        })
        .catch((error) => {
          commit("SET_TOKEN", null);
          commit("SET_USER", null);
          commit("SET_ERROR", "NIM/Password tidak valid");
          localStorage.removeItem("token");
          return error;
        });
    },

    logout({ commit }) {
      commit("SET_TOKEN", null);
      commit("SET_USER", null);
      localStorage.removeItem("token");
    },
  },
};
