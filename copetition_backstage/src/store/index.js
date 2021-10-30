import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogin: false,
    user: {
      name: null,
      pwd: null,
    }
  },
  getters: {

  },
  mutations: {
    toLogin(state,data){
      state.user.name = data.name;
      state.user.pwd = data.pwd;
    }
  },
  actions: {
  },
  modules: {
  }
})
