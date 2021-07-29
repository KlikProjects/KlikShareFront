
import { apiService } from "..//services/apiService";

export default {
  namespaced: true,
  state: {
    requested: null,
   
  },

  getters: {
    SET_REQUEST(state){
      state.requested = tf ;
    }
  },

  mutations: {
    SET_REQUEST(state, token) {
      state.token = token;
    },

  },
  actions: {
    async CheckIfRequested({ dispatch }, id) {
        let response = await apiService.requestedProducts();
      
        dispatch("attempt", response.data.data, id);
      },
      async attempt({ commit, state }, data, id) {
        if (data.products.includes(id)) {
          commit("SET_TOKEN", tf= true); 
        }
      }
     
  },
};
