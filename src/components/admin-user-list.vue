<template>
  <div id="Articles">
    <div class="article-header-container">
      <h2>User List</h2>
      <button class="btn btn-primary primary" style="margin-left: 20px">
        Add new
      </button>
      <div class="search-group-container">
        <div class="input-group mb-3 input-group-lg">
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            v-model="searchString"
          />
          <button class="btn btn-primary" type="button" id="button-addon2">
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="articles-list-container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Uid</th>
            <th scope="col">Date Created</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="index in data" :key="index.uid">
            <td class="text-left">{{ index.uid }}</td>
            <td class="text-left">{{ textSlice(index.data.dateCreated) }}</td>
            <td class="text-left">{{ index.email }}</td>
            <td class="text-left"><button class="btn btn-primary">Edit</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import { getDatabase, onValue, ref, set } from "@firebase/database";
const axios = require("axios");
export default {
  name: "Articles",
  props: ["dataProps"],
  data: function () {
    return {
      data: [],
      searchString: "",
      originalData: [],
      url: "https://ramenadmin.pythonanywhere.com",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    textSlice(item) {
      let d = new Date(item);
      d = d.toString();
      return d.slice(0, 21);
    },
    getData() {
      this.$emit("setLoading", true);

      axios
        .get(this.url, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          let dataArr = response.data;
          // for (let item in dataArr) {
          //   this.data.push(dataArr[item]);
          //   this.$set(this.data, item, {
          //     data: dataArr[item],
          //   });
          // }
          this.data = dataArr;
          this.originalData = dataArr;
          console.log(this.data);
          this.$emit("setLoading", false);
        })
        .catch((e) => alert(e));
    },
  },
};
</script>


<style scoped>
div#Articles {
  padding: 40px;
}
.article-header-container {
  display: flex;
  padding-bottom: 30px;
}
.text-left {
  text-align: left;
}
.articles-btn-container {
  display: flex;
  justify-content: left;
}
.input-group.mb-3 {
  margin-bottom: 0 !important;
}
.search-group-container {
  margin-left: auto;
}
#Articles {
  text-align: left;
}
</style>