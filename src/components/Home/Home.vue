<template>
  <div class="main-container">
    <div class="nav-container">
      <h2>Table showing Alubums and Photos</h2>
    </div>
    <div class="content-container">
      <div class="side-bar">
        <p>Search By </p>
        <div>
          <select>
          <option value="0"> All </option>
          <option value="1"> Alubum Title </option>
          <option value="2"> Photo title </option>
        </select>
        </div>
      </div>
      <div class="table-container">
      <Table/>
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/Home/Table'

export default {
  name: 'Home',
  components: {Table}
}
</script>

<style>
.main-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  /* margin: 10px 30px 0px 30px; */
}
.content-container {
  display: flex;
  flex-direction: row;
}
.side-bar {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;

}
.table-container {
  flex-grow: 3
}

select {
  padding: 5px;
  margin-left: 12px;
  margin-top: 6px;
}

</style>
