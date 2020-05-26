import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errors: [],
    maxId: 0
  },
  mutations: {
    CREATE_NEW_ERROR(state, error) {
      let id = state.maxId;
      let errorObj = {
        id,
        message: error
      }

      state.errors.push(errorObj);
      setTimeout(() => this.commit('REMOVE_ERROR', id), 5000);
      state.maxId++;
    },
    REMOVE_ERROR(state, id) {
      let newArray = state.errors.filter(item => item.id !== id)
      state.errors = newArray;
    }
  },
  actions: {
    showError({ commit }, error) {
      commit('CREATE_NEW_ERROR', error);
    }
  },
  modules: {}
});
