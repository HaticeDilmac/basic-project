// src/store/index.js

import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
// Vuex store'un durumu (state)
  state: {
    name: 'Deneme',
  },
  // Vuex store'un durumunu değiştiren fonksiyonlar (mutations)
  mutations: {
    setName(state, newName) {
      state.name = newName;
    },
  },
  // Vuex store'a veri gönderen fonksiyonlar (actions)
  actions: {
    updateName({ commit }, newName) {
      commit('setName', newName);
    },
  },
  // Vuex store'un durumunu tarayıcı depolama alanında saklamak için kullanılan plugin
  plugins: [createPersistedState()],
});
