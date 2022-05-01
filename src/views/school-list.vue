<template>
  <div id="university-list">
    <div class="flex-list">
      <div class="search-bar-container">
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >School Name</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Location?</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>
          <div class="col search-btn-container">
            <button class="btn btn-primary">Search</button>
            <button class="btn btn-primary">Reset</button>
          </div>
        </div>
      </div>
      <div class="school-group-container">
        <div class="school-item" v-for="(item, key) in data" :key="key" v-show="item.publish === true">
          <div class="school-logo-container">
            <img :src="item.logoURL" alt="" />
          </div>
          <div class="list-item-details-container">
            <h3>
              <strong>{{ item.Name }}</strong>
            </h3>
            <h6>{{ item.Address.Lot }} {{ item.Address.Barangay }}</h6>
            <br />
            <h6><strong>Programs Offered</strong></h6>
            <h6>
              <span v-for="(program, key) in item.ProgramsOffered" :key="key">{{
                program.Field
              }}</span>
            </h6>
            <div class="school-list-btn-group">
              <router-link :to="'/university/view/' + item.Uid"
                ><button class="btn btn-primary">View</button></router-link
              >
              <a :href="item.Website"
                ><button class="btn btn-primary">Visit Website</button></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import unversityList from "../../manyschools.json";
// import Loader from "../components/loader.vue"
import { getDatabase, ref, onValue } from "firebase/database";
// import {
//   getDownloadURL,
//   getStorage,
//   ref as storageRef,
// } from "firebase/storage";

export default {
  data() {
    return {
      data: unversityList,
      isLoading: false,
    };
  },
  mounted() {
    this.getSchools();
  },
  methods: {
    getSchools() {
      try {
        this.isLoading = true;
        const db = getDatabase();
        const query = ref(db, "universities");
        // const storage = getStorage();
        onValue(query, (snapshot) => {
          const data = snapshot.val();
          console.log(data);
          this.data = data;
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
div#university-list {
  min-height: 100vh;
  background: #e4eef4;
}
.flex-list {
  height: 100%;
  padding: 50px;
}
.search-bar-container {
  max-width: 1280px;
  width: 100%;
  background: white;
  box-shadow: 0 0 50px #ccc;
  border-radius: 4px;
  margin: 0 auto;
  padding: 30px 30px 20px 30px;
  text-align: left;
}
.search-bar-container label {
  font-size: 20px;
  font-weight: 600;
}
.search-bar-container input {
  font-size: 18px;
  padding: 10px;
}

.search-bar-container button {
  padding: 10px 50px;
}

.search-btn-container {
  display: flex;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
}
.school-group-container {
  max-width: 1280px;
  width: 100%;
  margin: 50px auto;
}
.school-item {
  padding: 30px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 0 50px #ccc;
  margin: 50px 0px;
  display: flex;
  align-items: center;
}
.school-logo-container {
  max-width: 300px;
  width: 100%;
}
.list-item-details-container {
  text-align: left;
  margin-left: 30px;
}
.school-list-btn-group button {
  margin-top: 20px;
  margin-right: 20px;
}
</style>
