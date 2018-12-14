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
        <td>{{photo.alubumId}}</td>
        <td>{{photo.alubumTitle}}</td>
        <td>{{photo.title}}</td>
        <td>
          <div><img
            v-bind:src="photo.thumbnailUrl"
            alt=""></div>
        </td>
      </tr>
    </tbody>

  </table>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Table',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['photosPerPage'])
  }
}
</script>

<style scoped>
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
  padding-left: 10px;
  /* margin: 10px; */
}
thead th:nth-child(1) {
  width: 8%;
}
thead th:nth-child(2) {
  width: 30%;
}
thead th:nth-child(3) {
  width: 30%;
}

thead th:nth-child(4) {
  width: 30%;
}

th, td {
  padding: 20px;
}
tbody tr:nth-child(odd) {
  background-color: #F2F2F2;
}

tbody tr:nth-child(even) {
  background-color: #FFFFFF;
}
thead {
  background-color: #3D3D3D;
  color: white;
}
</style>
