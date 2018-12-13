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
      <tr>
        <td>1</td>
        <td>title will go here</td>
        <td>photo title will go Here</td>
        <td>
          <div><img
            src="https://via.placeholder.com/150/24f355"
            alt=""></div>
        </td>
      </tr>

      <tr>
        <td>1</td>
        <td>title will go here</td>
        <td>photo title will go Here</td>
        <td>
          <div><img
            src="https://via.placeholder.com/150/24f355"
            alt=""></div>
        </td>
      </tr>
    </tbody>

  </table>
</template>
<script>
export default {
  name: 'Table',
  data () {
    return {}
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
