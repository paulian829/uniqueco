<template>
  <div id="article-new">
    <div class="article-heading">
      <div class="container overflow-hidden">
        <div class="header-container">
          <h1 style="margin-bottom: 30px">Favorite University</h1>
        </div>
        <div class="fav-container">
          <div class="row row-cols-1 row-cols-md-3 g-2">
            <div class="col">
              <div class="card" v-for="(item,key) in data" :key="key">
                <img
                  src="https://www.voicesofyouth.org/sites/voy/files/images/2019-03/school.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <p>{{item}}</p>
                <div class="card-body">
                  <h5 class="card-title">Card title Card title Card title</h5>
                  <div class="card-btn-container">
                    <button class="btn btn-primary">{{item.name}}</button>
                    <button class="btn btn-warning">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref,onValue } from "firebase/database";

// import {
//   reauthenticateWithCredential,
//   EmailAuthProvider,
//   updatePassword,
//   updateEmail,
// } from "firebase/auth";
// import { passAuth } from "../db";

export default {
  name: "addArticle",
  props: ["dataProps"],
  data: function () {
    return { data:  {}};
  },
  mounted() {
    this.generateList(this.dataProps);
  },
  methods: {
    generateList(data) {
      let arrayFav = data.Favorite;
      for (let item in arrayFav) {
        const db = getDatabase();
        const query = ref(db, "university/" + item);
        onValue(query, (snapshot) => {
          const dataItem = snapshot.val();
          this.data[dataItem.Uid] = dataItem;
        });
      }
    },
  },
};
</script>
<style scoped>
#article-new {
  padding: 50px;
}
.card-btn-container {
  display: flex;
  justify-content: space-around;
}
.card-title {
  text-overflow: ellipsis;
  width: 246px;
  overflow: hidden;
  white-space: nowrap;
}
</style>