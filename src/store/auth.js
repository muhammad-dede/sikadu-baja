import axios from "axios";
import qs from "qs";

export default {
  namespaced: true,

  state: {
    token: null,
    user: null,
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
        qs.stringify(credentials),
      );

      dispatch("attempt", response.data.Token);
    },

    async attempt({ commit }, token) {
      commit("SET_TOKEN", token);

      try {
        let response = await axios.get("/mahasiswa/info/"+token, {});

        commit("SET_USER", response.data);
      } catch (e) {
        console.log("failed");
      }
    },
  },
};
