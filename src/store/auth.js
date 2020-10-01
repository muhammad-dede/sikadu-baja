import axios from "axios";
import qs from "qs";

export default {
  namespaced: true,

  state: {
    token: null,
    user: null,
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
  },

  actions: {
    async login({ dispatch }, credentials) {
      let response = await axios.post(
        "/login/mahasiswa",
        qs.stringify(credentials)
      );
      return dispatch("attempt", response.data.Token);
    },

    async attempt({ commit, state }, token) {
      if (token) {
        commit("SET_TOKEN", token);
        localStorage.setItem("token", token);
      }

      if (!state.token) {
        return;
      }

      try {
        let response = await axios.get("/mahasiswa/info/" + token);

        commit("SET_USER", response.data.Info);
      } catch (e) {
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
      }
    },
  },
};
