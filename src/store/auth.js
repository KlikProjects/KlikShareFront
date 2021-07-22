import { attempt } from "joi";
import { authService } from "..//services/authService";

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
    async LogIn({ dispatch }, credentials) {
      let response = await authService.getLogin(credentials);

      dispatch("attempt", response.data.data.token);
    },

    async attempt({ commit, state }, token) {
      if (token) {
        commit("SET_TOKEN", token);
      }
      if (!state.token) {
        return;
      }

      try {
        let response = await authService.getUser();

        commit("SET_USER", response.data);
      } catch (e) {
        commit("SET_USER", null);
        commit("SET_TOKEN", null);
      }
    },
    logOut({commit}){
      return authService.getLogedOut().then(() => {
        commit("SET_USER", null);
        commit("SET_TOKEN", null);
      })

    }
  },
};
