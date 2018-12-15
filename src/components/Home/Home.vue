<template>
  <div class="main-container">
    <div class="nav-container">
      <h2>Table showing Alubums and Photos</h2>
    </div>
    <div class="search-container">
      <div>
        <input type="text" placeholder="Search.......">
        <select>
          <option placeholder="" value="0">ALL</option>
          <option value="1"> Alubum Title </option>
          <option value="2"> Photo title </option>
        </select>
      </div>
    </div>

    <div class="table-container">
      <Table/>
    </div>
  </div>
</template>

<script>
import Table from '@/components/Home/Table'
import { fetchAlubums, fetchPhotos } from '../../api'

export default {
  name: 'Home',
  components: {Table},
  data () {
    return {}
  },
  mounted: async function () {
    try {
      const [alubums, photos] = await Promise.all([fetchAlubums(), fetchPhotos()])
      console.log('ALUBUMS', alubums)
      console.log('PHOTOS', photos)
      this.$store.dispatch('setPhotosAndAlubums', {photos, alubums})
    } catch (e) {
      console.log('Ooops an error coured', e)
    }
  }
}
</script>

<style>
.main-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  /* margin: 10px 30px 0px 30px; */
}
.content-container {
  display: flex;
  flex-direction: row;
}
.search-container {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-self: center;
  padding: 5px;
}
.table-container {
  justify-content: center;
  align-self: center;
}
input[type=text] {
  height: 35px;
  padding-left: 10px;
  text-decoration: none;
  background: #979797;
  border-radius: 5px;
  border: 2px;
  color: white;
  font-weight: bold;
  font-size: 15pt;
  width: 30vw;
}
select {
  height: 35px;
  max-width: 150px;
  padding: 10px;
  color: white;
  font-weight: bold;
  font-size: 10pt;
  background: #979797;

}
::placeholder {
  color: white;
  font-weight: bold;
  size: 10pt;
}

</style>
