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
      // Pake then untuk catch error nya dan get hasil dari promises
      await axios.post(
        "/login/mahasiswa",
        qs.stringify(credentials)
      ).then((response) =>{
        return dispatch("attempt", response.data.Token);
      },(error) =>{
        console.log(error);
      });
    },

    async attempt({ commit, state }, token) {
      if (token) {
        commit("SET_TOKEN", token);
        localStorage.setItem("token", token);
      }

      if (!state.token) {
        return;
      }

      await await axios.get(
        "/mahasiswa/info/" + localStorage.getItem("token")
      ).then((response) =>{
        commit("SET_USER", response.data.Info);
      },(error) =>{
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
        console.log(error);
      });
    },

    logout({ commit }) {
      commit("SET_TOKEN", null);
      commit("SET_USER", null);
      localStorage.removeItem("token");
    },
  },
};
