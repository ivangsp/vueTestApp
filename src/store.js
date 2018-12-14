import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    photoAndAlubums: null,
    currentPage: 0,
    totalNumberOfPages: 0,
    photosPerPage: []
  },

  mutations: {
    SET_PHOTOSANDALUBUMS (state, photoAlubum) {
      state.photoAndAlubums = photoAlubum
      state.photosPerPage = photoAlubum.slice(0, 20)
    },

    SET_CURRENT_PAGE (state, page) {
      state.currentPage = page
      state.photosPerPage = state.photoAndAlubums.slice(20 * (state.currentPage - 1), 20 * state.currentPage)
    }

  },

  actions: {
    setPhotosAndAlubums ({commit}, {photos, alubums}) {
      const photoAndAlubums = photos.map(photo => {
        const alubum = alubums.find(alubum => alubum.id === photo.albumId)
        return {...photo, alubumTitle: alubum.title}
      })
      commit('SET_PHOTOSANDALUBUMS', photoAndAlubums)
    },
    setCurrentPage ({commit}, pageNumber) {
      commit('SET_CURRENT_PAGE', pageNumber)
    }

  },

  getters: {
    photos: state => state.photos,
    alubums: state => state.alubums,
    photosPerPage: state => state.photosPerPage,
    currentPage: state => state.currentPage
  }

})

export default store
