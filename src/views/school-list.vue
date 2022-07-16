<template>
  <!-- eslint-disable prettier/prettier -->
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
                v-model="searchName"
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
                v-model="searchLocation"
              />
            </div>
          </div>
          <div class="col search-btn-container">
            <button
              class="btn btn-primary"
              @click="search(searchName, searchLocation)"
            >
              Search
            </button>
            <button class="btn btn-secondary" @click="reset()">Clear</button>
          </div>
        </div>
      </div>
      <div class="school-group-container">
        <div
          class="school-item"
          v-for="(item, key) in data"
          :key="key"
          v-show="!item.Admin && item.publish"
        >
          <!-- <div class="school-item" v-for="(item, key) in data" :key="key" > -->

          <div class="school-logo-container">
            <img v-if="item.logo" :src="item.logo" alt="" />
            <img
              v-else
              src="../assets/yarn-error-removebg-preview.png"
              alt=""
            />
          </div>
          <div class="list-item-details-container">
            <h3>
              <strong>{{ item.Name }}</strong>
            </h3>

            <h6><Icon icon="clarity:map-marker-solid" style="margin-right:10" /> {{ item.Address.Lot }} {{ item.Address.Barangay }}</h6>
            <h6><Icon icon="ic:baseline-school" style="margin-right:10" /> {{ item.schoolType }}</h6>
            <h6> <Icon icon="carbon:phone-filled" style="margin-right:10" />{{ item.contact }}</h6>
            <br />
            <div class="school-list-btn-group">
              <router-link :to="'/university/view/' + item.Uid"
                ><button class="btn btn-primary">View</button></router-link
              >
              <a :href="item.Website"
                ><button class="btn btn-secondary">Visit Website</button></a
              >
              <button
                v-if="
                  type === 'student' && FavoriteList[item.Uid] === undefined
                "
                class="btn btn-secondary"
                @click="addToFavorites(item.Uid)"
              >
                Add to Favorites
              </button>
              <button
                v-else
                v-show="accountType === 'student'"
                class="btn btn-secondary"
                @click="removeToFavorites(item.Uid)"
              >
                Remove to Favorites
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */

import { getDatabase, ref, onValue, update } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { passAuth } from "../db";
// import StarRating from "vue-star-rating";
import { Icon } from '@iconify/vue2';


export default {
  name: "uniList",
  components: { Icon },
  data() {
    return {
      data: "",
      isLoading: false,
      searchLocation: "",
      searchName: "",
      originalData: "",
      type: "",
      uid: "",
      FavoriteList: {},
      accountType: "university",
    };
  },
  mounted() {
    this.getSchools();
    this.checkLoggedIn();
  },
  methods: {
    getSchools() {
      try {
        this.isLoading = true;
        const db = getDatabase();
        const query = ref(db, "university");
        // const storage = getStorage();
        onValue(query, (snapshot) => {
          const data = snapshot.val();

          for (let uni in data) {
            console.log(data[uni].reviews);
            let average = this.getAverage(data[uni].reviews);
            console.log(average);
            data[uni].score = average;
          }

          this.data = data;
          this.originalData = data;
          console.log(data);
        });
      } catch (e) {
        console.log(e);
      }
    },
    getAverage(arr) {
      if (!arr) {
        return 0;
      }
      let score = 0;
      let reviewCount = 0;
      for (let item in arr) {
        score = score + arr[item].rating;
        reviewCount = reviewCount + 1;
      }
      // console.log(score);
      return score / reviewCount;
      // console.log(reviewCount);
      // this.score = score / reviewCount;
      // this.reviewCount = reviewCount;
    },
    search(searchName, searchLocation) {
      let searchResults = {};
      let finalResults = {};
      for (const prop in this.originalData) {
        let schoolName = this.originalData[prop].Name;
        schoolName = schoolName.toLowerCase();
        searchName = searchName.toLowerCase();
        if (schoolName.includes(searchName)) {
          searchResults[prop] = this.originalData[prop];
        }
      }
      console.log(searchResults);

      for (const prop in searchResults) {
        let obj = JSON.stringify(searchResults[prop].Address);
        obj = obj.toLowerCase();
        searchLocation = searchLocation.toLowerCase();
        if (obj.includes(searchLocation)) {
          finalResults[prop] = searchResults[prop];
        }
      }
      this.data = finalResults;
    },
    reset() {
      this.searchName = "";
      this.searchLocation = "";
      this.data = this.originalData;
    },
    checkLoggedIn() {
      const auth = passAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          this.uid = uid;
          this.checkIfStudent(uid);
        } else {
          console.log("user is logged out");
        }
      });
    },
    checkIfStudent(uid) {
      const db = getDatabase();
      const query = ref(db, "Account/" + uid);
      onValue(query, (snapshot) => {
        const data = snapshot.val();
        this.accountType = data.type;
        if (data.Favorite === undefined) {
          this.FavoriteList = { None: "None" };
        } else {
          this.FavoriteList = data.Favorite;
        }
        console.log(data.Favorite);
        this.type = data.type;
      });
    },
    addToFavorites(UniId) {
      let Uid = this.uid;
      console.log(UniId, Uid);
      const db = getDatabase();
      const updates = {};
      updates["Account/" + Uid + "/Favorite/" + UniId] = UniId;
      update(ref(db), updates)
        .then(() => {
          this.$swal({
            icon: "success",
            title: "Success",
            text: "Added to Favorite",
          });
        })
        .catch((e) => {
          this.$swal({
            icon: "Error",
            title: "Error",
            text: e,
          });
        });
    },
    removeToFavorites(UniId) {
      let Uid = this.uid;
      console.log(UniId, Uid);
      const db = getDatabase();
      const updates = {};
      updates["Account/" + Uid + "/Favorite/" + UniId] = null;
      update(ref(db), updates)
        .then(() => {
          this.$swal({
            icon: "success",
            title: "Success",
            text: "Remove to Favorite",
          });
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
  max-height: 300px;
  height: 100%;
}
.list-item-details-container {
  text-align: left;
  margin-left: 30px;
}
.school-list-btn-group button {
  margin-top: 20px;
  margin-right: 20px;
}
.school-logo-container img {
  width: 100%;
  height: 100%;
  max-height: 300px;
  max-width: 300px;
  object-fit: cover;
}
</style>
