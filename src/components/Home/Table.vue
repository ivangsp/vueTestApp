<template>
  <table>
    <thead>
      <tr>
        <th>Album Id</th>
        <th> Alubum Title</th>
        <th>Photo Title</th>
        <th>Photo Thumbnail</th>
      </tr>

    </thead>

    <tbody>
      <tr v-for="photo in photosPerPage" :key="photosPerPage.indexOf(photo)">
        <td>{{photo.albumId}}</td>
        <td>{{photo.alubumTitle}}</td>
        <td>{{photo.title}}</td>
        <td>
          <div><img
            v-bind:src="photo.thumbnailUrl"
            alt=""></div>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">
          <div class="pagination">
            <button v-if="currentPage > 1" class="button" v-on:click="goToPreviousPage()" > prev</button>
            <span v-for="i in Array(this.totalNumberOfPages).fill(0).map((e, i) => i + 1).slice(startPage, endPage)" :key="i"
            v-on:click="setCurrentPage(i)" v-bind:class="currentPage === i ? 'current-page' : ''">{{i}}</span>
            <div>.......</div>
            <button v-if="currentPage <= totalNumberOfPages" class="button" v-on:click="goToNextPage()">Next</button>

          </div>
        </td>
        </tr>
    </tfoot>
  </table>
</template>
<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Table',
  data () {
    return {
      startPage: 0,
      endPage: 25
    }
  },
  computed: {
    ...mapGetters(['photosPerPage', 'currentPage', 'totalNumberOfPages'])
  },
  methods: {
    setCurrentPage: function (page) {
      this.$store.dispatch('setCurrentPage', page)
    },

    goToNextPage: function () {
      this.startPage += 1
      this.endPage += 1
      this.$store.dispatch('setCurrentPage', this.currentPage + 1)
    },

    goToPreviousPage: function () {
      this.startPage -= 1
      this.endPage -= 1
      this.$store.dispatch('setCurrentPage', this.currentPage - 1)
    }
  }
}
</script>

<style scoped>

table {
  width: 80vw;
  table-layout: fixed;
  border-collapse: collapse;
  display: table;
  display: block;
}
thead {
  background-color: #3D3D3D;
  color: white;
  width: 80vw;
  display: block;
}
tbody {
  display: block;
  overflow: auto;
  width: 80vw;
  height: 70vh;
  overflow: auto;
}
thead th:nth-child(1) {
  width: 8%;
}
thead th:nth-child(2){
  width: 30%;
}
thead th:nth-child(3) {
  width: 30%;
}

thead th:nth-child(4){
  width: 30%;
}
tbody tr {
  width: 80vw;
}
th {
  padding: 20px;
}
td:nth-child(1) {
  width: 5%;
}
td:nth-child(2) {
  width: 30%;
}
td:nth-child(3) {
  width: 30%;
}
td:nth-child(4) {
  width: 30%;
}
tbody tr:nth-child(odd) {
  background-color: #F2F2F2;
}

tbody tr:nth-child(even) {
  background-color: #FFFFFF;
}
.button {
  padding: 5px;
  width: 100px;
  cursor: pointer;
}
span {
  width: 40px;
  height: 30px;
  padding: 2px;
  cursor: pointer;
  border: 1px solid black;
}
.pagination {
  display: flex;
  flex-direction: row
}
.current-page {
  background: gray;
  font-weight: 200px;
}
</style>
