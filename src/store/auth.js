import { attempt } from "joi";
import { authService } from "..//services/authService";


export default {
  namespaced: true,
  state: {
      token: null,
      user:null,
  },
  mutations: {
    SET_TOKEN (state, token){
      state.token = token;
    },
    SET_USER (state, data){
      state.user = data;
    }
  },
  actions: {
      async LogIn({ dispatch },credentials){
        let response = await authService.getLogin(credentials)
       

        dispatch('attempt', response.data.data.token)
      },
      async attempt({commit}, token){
        commit('SET_TOKEN', token)

        try {
          let response = await authService.getUser(token)

          commit('SET_USER', response.data)
        }catch(e){
          console.log('tamalito')
        }
        
      }
  },

}  