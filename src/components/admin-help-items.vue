<template>
  <div id="Articles">
    <div class="article-header-container">
      <h2>Help Items</h2>
            <button
        class="btn btn-primary primary"
        style="margin-left: 20px"
      >
        Add new
      </button>
      <div class="search-group-container">
        <div class="input-group mb-3 input-group-lg">
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            @input="search"
            v-model="searchString"
          />
          <button
            class="btn btn-primary"
            @click="search"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="articles-list-container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in data" :key="key">
            <td class="text-left">{{ item.Title }}</td>
            <td class="text-left" v-text="item.Content"></td>
            <td class="articles-btn-container">
              <!-- <button class="btn btn-secondary" @click="viewArticle(key)">
                View
              </button> -->
              <button class="btn btn-primary" @click="goToEdit(key)">
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { getDatabase, onValue, ref  } from "@firebase/database";
export default {
  name: "Articles",
  components: {},
  props: ["dataProps"],
  data: function () {
    return {
      data: "",
      searchString: "",
      originalData: "",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const db = getDatabase();
      const query = ref(db, `helpItems/`);
      onValue(query, (snapshot) => {
        const data = snapshot.val();
        this.data = data;
        this.originalData = data;
      });
    },
    textSlice(item) {
      let d = new Date(item);
      d = d.toString();
      return d.slice(0, 21);
    },
    search() {
      let searchString = this.searchString;
      searchString = searchString.toLowerCase();
      let result = {};
      for (const prop in this.originalData) {
        let title = this.originalData[prop].Name;
        title = title.toLowerCase();
        if (title.includes(searchString)) {
          result[prop] = this.originalData[prop];
        }
      }
      this.data = result;
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