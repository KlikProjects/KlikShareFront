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
      async LogIn(_,credentials){
        var response = await authService.getLogin(credentials)
        console.log(response.data)
      },
      async attempt({commit}, token){

      }
  },

}  