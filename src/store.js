import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    alubums: null,
    photos: null
  },

  mutations: {
    SET_ALUBUMS (state, alubums) {
      state.alubums = alubums
    },
    SET_PHHOTOS (state, photos) {
      state.photos = photos
    }
  },

  actions: {
    setAlubums ({commit}, alubums) {
      commit('SET_ALUBUMS', alubums)
    },
    setPhotos ({commit}, photos) {
      commit('SET_PHOTOS', photos)
    }

  },

  getters: {
    photos: state => state.photos,
    alubums: state => state.alubums
  }

})

export default store
