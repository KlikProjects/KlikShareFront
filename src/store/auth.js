import { attempt } from "joi";
import { authService } from "..//services/authService";


export default {
  namespaced: true,
  state: {
      token: null,
      user:null,
  },
  mutations: {},
  actions: {
      async LogIn({ dispatch },credentials){
        let response = await authService.getLogin(credentials)
       

        dispatch('attempt', response.data.data.token)
      },
      async attempt(_, token){
        console.log(token)
      }
  },

}  