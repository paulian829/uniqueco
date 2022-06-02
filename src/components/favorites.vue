<template>
  <div id="article-new">
    <div class="article-heading">
      <div class="container overflow-hidden">
        <div class="header-container">
          <h1 style="margin-bottom: 30px">Favorite University</h1>
        </div>
        <div class="fav-container">
          <div
            class="row row-cols-1 row-cols-md-3 g-2"
            v-if="Object.keys(data).length > 0"
          >
            <div class="col" v-for="(item, key) in data" :key="key">
              <div class="shadow card">
                <button
                  type="button"
                  class="btn-close"
                  aria-label="Close"
                  @click="removeFavorite(item.value.Uid)"
                ></button>
                <img
                  v-if="item.value.logo"
                  :src="item.value.logo"
                  class="card-img-top"
                  alt="..."
                  @click="goTo(item.value.Uid)"
                />
                <img
                  v-else
                  class="card-img-top"
                  src="../assets/yarn-error-removebg-preview.png"
                  alt=""
                  @click="goTo(item.value.Uid)"
                />
                <div class="card-body">
                  <h5 class="card-title">{{ item.value.Name }}</h5>
                </div>
              </div>
            </div>
          </div>
          <div v-else><h4>No Favorite University!</h4></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, update, get, child } from "firebase/database";
// import MDBBtnClose  from 'mdb-vue-ui-kit';

// import {
//   reauthenticateWithCredential,
//   EmailAuthProvider,
//   updatePassword,
//   updateEmail,
// } from "firebase/auth";
// import { passAuth } from "../db";

export default {
  name: "addArticle",
  // components:{MDBBtnClose},
  props: ["dataProps"],
  data: function () {
    return { data: {} };
  },
  mounted() {
    this.generateList(this.dataProps);
  },
  methods: {
    generateList(data) {
      let arrayFav = data.Favorite;
      if (arrayFav.length === 0) {
        this.data = null;
        return;
      }
      // let dataItems = {};

      for (let item in arrayFav) {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `university/${item}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              let value = snapshot.val();
              console.log(value.Uid);
              this.$set(this.data, value.Uid, {
                value,
              });
              console.log(this.data);
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    removeFavorite(key) {
      let Uid = this.dataProps.Uid;
      const db = getDatabase();
      const updates = {};
      let dataNew = this.data;
      updates["Account/" + Uid + "/Favorite/" + key] = null;
      update(ref(db), updates)
        .then(() => {
          // this.$swal({
          //   icon: "success",
          //   title: "Success",
          //   text: "Remove to Favorite",
          // });
          if (Object.keys(dataNew).length === 1) {
            this.data = {};
          } else {
            delete dataNew[key];
            console.log(dataNew);
            this.data = dataNew;
          }

          this.generateList(this.dataProps);
        })
        .catch(() => {
          // this.$swal({
          //   icon: "success",
          //   title: "Success",
          //   text: "Removed to Favorite",
          // });
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
  /* width: 246px; */
  overflow: hidden;
  white-space: nowrap;
}
.card-img-top {
  padding: 20px;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
.card {
  padding: 10px;
}
.btn-close {
  margin-left: auto;
}
</style>
