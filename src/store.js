import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    photoAndAlubums: null,
    currentPage: 1,
    totalNumberOfPages: 0,
    photosPerPage: [],
    filteredPhotos: []
  },

  mutations: {
    SET_PHOTOSANDALUBUMS (state, photoAlubum) {
      state.photoAndAlubums = photoAlubum
      state.photosPerPage = photoAlubum.slice(0, 25)
      const totalNumberOfPages = Math.round(photoAlubum.length / 25)
      state.totalNumberOfPages = totalNumberOfPages
    },

    SET_CURRENT_PAGE (state, page) {
      state.currentPage = page
      if (state.filteredPhotos.length > 0) {
        state.photosPerPage = state.filteredPhotos.slice(25 * (state.currentPage - 1), 25 * state.currentPage)
      } else {
        state.photosPerPage = state.photoAndAlubums.slice(25 * (state.currentPage - 1), 25 * state.currentPage)
      }
    },

    SET_FILTERED_PHOTOS (state, photos) {
      state.currentPage = 1
      state.filteredPhotos = photos
      state.photosPerPage = photos.slice(0, 25)
      const totalNumberOfPages = Math.round(photos.length / 25)
      state.totalNumberOfPages = totalNumberOfPages
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
    },

    filterPhotos ({commit}, {searchTerm, filterBy}) {
      const photos = this.state.photoAndAlubums.filter(photo => {
        if (filterBy === 'ALUBUM_TITLE') {
          return photo.alubumTitle.includes(searchTerm)
        } else if (filterBy === 'PHOTO_TITLE') {
          return photo.title.includes(searchTerm)
        }
        return []
      })
      commit('SET_FILTERED_PHOTOS', photos)
    }

  },

  getters: {
    photos: state => state.photos,
    alubums: state => state.alubums,
    photosPerPage: state => state.photosPerPage,
    currentPage: state => state.currentPage,
    totalNumberOfPages: state => state.totalNumberOfPages,
    photoAndAlubums: state => state.photoAndAlubums
  }

})

export default store
