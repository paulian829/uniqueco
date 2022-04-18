<template>
  <div id="Articles">
    <div class="article-header-container">
      <h2>Articles</h2>
      <button class="btn btn-primary" style="margin-left: 20px">Add new</button>
    </div>
    <div class="articles-list-container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Date Created</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in data" :key="key">
            <td>{{ item.name }}</td>
            <td>{{ item.dateCreated }}</td>
            <td>
              <button class="btn btn-primary" @click="goToEdit(key)">
                Edit</button
              ><button
                style="margin-left: 30px"
                @click="deleteArticle(key)"
                class="btn btn-warning"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Articles",
  components: {},
  data: function () {
    return {
      data: {
        random1: {
          name: "Lorem ipsum dolor sit amet, consectetur tempor magna aliqua.",
          dateCreated: "1-2-2021",
        },
        random2: {
          name: "Lorem ipsum dolor sit amet, consectetur tempor magna aliqua.",
          dateCreated:'1-5-2020'
        },
      },
    };
  },
  methods: {
    goToEdit(key) {
      console.log(key, "Edit");
    },
    deleteArticle(key) {
      console.log(key, "Delete");
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
</style>