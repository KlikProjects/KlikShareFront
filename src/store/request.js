
import { apiService } from "..//services/apiService";

export default {
  namespaced: true,
  state: {
    requets: null,
   
  },

  getters: {
  
  },

  mutations: {
    SET_REQUEST(state, token) {
      state.token = token;
    },

  },
  actions: {
    async request({ dispatch }, id) {
        let response = await apiService.requestProduct(id);
  
        dispatch("attempt", response.data.);
      },
  
  },
};
