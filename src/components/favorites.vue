<template>
  <div id="article-new">
    <div class="article-heading">
      <div class="container overflow-hidden">
        <div class="header-container">
          <h1 style="margin-bottom: 30px">Favorite University</h1>
        </div>
        <div class="fav-container">
          <div class="row row-cols-1 row-cols-md-3 g-2" v-if="data">
            <div class="col" v-for="(item, key) in data" :key="key">
              <div class="card">
                <img
                  v-if="item.logo"
                  :src="item.logo"
                  class="card-img-top"
                  alt="..."
                  @click="goTo(key)"
                />
                <img
                  v-else
                  class="card-img-top"
                  src="../assets/yarn-error-removebg-preview.png"
                  alt=""
                  @click="goTo(key)"
                />
                <div class="card-body">
                  <h5 class="card-title">{{ item.Name }}</h5>
                  <div class="card-btn-container">
                    <button class="btn btn-primary" @click="goTo(key)">
                      Visit
                    </button>
                    <button
                      class="btn btn-warning"
                      @click="removeFavorite(key)"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else><h4>No Favorite University!</h4> </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, onValue, update } from "firebase/database";

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
    return { data: null };
  },
  mounted() {
    this.generateList(this.dataProps);
  },
  methods: {
    generateList(data) {
      let arrayFav = data.Favorite;
      if(arrayFav.length === 0){
        this.data = null
        return 
      }
      let dataItems = {};
      for (let item in arrayFav) {
        const db = getDatabase();
        const query = ref(db, "university/" + item);
        onValue(query, (snapshot) => {
          const dataItem = snapshot.val();
          dataItems[dataItem.Uid] = dataItem;
        });
      }
      this.data = dataItems;
    },
    removeFavorite(key) {
      let Uid = this.dataProps.Uid;
      const db = getDatabase();
      const updates = {};
      let dataNew = this.data;
      updates["Account/" + Uid + "/Favorite/" + key] = null;
      update(ref(db), updates)
        .then(() => {
          this.$swal({
            icon: "success",
            title: "Success",
            text: "Remove to Favorite",
          });
          delete dataNew[key];
          this.data = dataNew;
          this.generateList(this.dataProps)
        })
        .catch((e) => {
          this.$swal({
            icon: "Error",
            title: "Error",
            text: e,
          });
        });
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
  width: 70%;
  margin: 0 auto;
}
.card-title {
  text-overflow: ellipsis;
  width: 246px;
  overflow: hidden;
  white-space: nowrap;
}
.card-img-top {
  padding: 20px;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
</style>
