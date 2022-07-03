<template>
  <!-- eslint-disable prettier/prettier -->
  <div id="university-list">
    <div class="flex-list">
      <div class="search-bar-container">
        <div class="row">
          <h1 style="text-align: center">Find your perfect School</h1>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >School Type</label
              >
              <select
                class="form-select form-select-lg mb-3"
                aria-label="Default select example"
                v-model="schoolType"
              >
                <option selected>Open this select menu</option>
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Location</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                v-model="searchLocation"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Program</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                v-model="program"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Max Tuition fee: PHP {{ range }}</label
              >
              <input
                type="range"
                class="form-range"
                id="customRange1"
                min="10000"
                max="100000"
                v-model="range"
              />
            </div>
          </div>
        </div>
        <div class="btn-container-match">
          <button
            class="btn btn-primary"
            @click="search(schoolType, searchLocation, program, range)"
          >
            Find a School Match
          </button>
        </div>
      </div>
      <div class="school-group-container" v-show="show">
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
            <StarRating
              style="margin-bottom: 10px"
              :rating="item.score"
              :read-only="true"
              :increment="0.1"
              :star-size="30"
              :show-rating="false"
            ></StarRating>
            <h6>{{ item.Address.Lot }} {{ item.Address.Barangay }}</h6>
            <br />
            <h6><strong>Programs Offered</strong></h6>
            <h6>
              <!-- <span>None provided {{item.ProgramsOffered.length}}</span> -->
              <span v-for="(program, key) in item.ProgramsOffered" :key="key"
                >{{ program.Field }}<br
              /></span>
            </h6>
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
    <Loader v-if="isLoading"></Loader>
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */

import { getDatabase, ref, onValue, update } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { passAuth } from "../db";
import StarRating from "vue-star-rating";
import Loader from "../components/loader.vue";

export default {
  name: "uniList",
  components: { StarRating, Loader },
  data() {
    return {
      data: "",
      searchLocation: "",
      searchName: "",
      originalData: "",
      type: "",
      uid: "",
      FavoriteList: {},
      schoolType: "",
      program: "",
      range: 50000,
      show: false,
      isLoading: false,
    };
  },
  mounted() {
    this.getSchools();
    this.checkLoggedIn();
  },
  methods: {
    getSchools() {
      this.isLoading = true;
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
          this.show = false;

          this.data = data;
          this.originalData = data;
          this.isLoading = false;

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

    error() {
      this.$swal({
        icon: "error",
        title: "Error",
        text: "All fields are required",
      });
    },
    search(schoolType, searchLocation, program, Maxtuition) {
      // let searchResults = {};
      this.isLoading = true;

      let finalResults = {};
      console.log(schoolType, searchLocation, program, Maxtuition);

      schoolType = schoolType.toLowerCase();
      searchLocation = searchLocation.toLowerCase();
      program = program.toLowerCase();

      // if (!schoolType) {
      //   this.isLoading = false;
      //   this.error();
      //   return;
      // }
      // if (!searchLocation) {
      //   this.isLoading = false;
      //   this.error();
      //   return;
      // }
      // if (!program) {
      //   this.isLoading = false;
      //   this.error();
      //   return;
      // }
      let highestPrice = 0;
      let progArray = {};

      for (const prop in this.originalData) {
        let currentSchoolType = this.originalData[prop].schoolType;
        if (currentSchoolType) {
          currentSchoolType = currentSchoolType.toLowerCase();
        } else {
          currentSchoolType = "none";
        }
        let currentSchoolLocation = JSON.stringify(
          this.originalData[prop].Address
        ).toString();
        currentSchoolLocation = currentSchoolLocation.toLowerCase();
        let currentPrograms = JSON.stringify(
          this.originalData[prop].ProgramsOffered
        ).toString();
        currentPrograms = currentPrograms.toLowerCase();

        // Get the highest price of program
        progArray = this.originalData[prop].ProgramsOffered;
        for (let item in progArray) {
          highestPrice = 0
          let tuition = progArray[item].TuitionMax
          if (tuition == undefined){
            tuition = '0'
          }
          if (/^[0-9]+$/.test(tuition) == false){
            tuition = '0'
          }
          tuition = tuition.toString()
          tuition = tuition.replace(/[^\d.-]/g, '');
          tuition = parseInt(tuition)

          if (tuition > highestPrice) {
            highestPrice = tuition;
          }
          console.log(highestPrice)
        }
        if (
          currentSchoolType.includes(schoolType) &&
          currentSchoolLocation.includes(searchLocation) &&
          currentPrograms.includes(program) &&
          Maxtuition >= highestPrice
        ) {
          finalResults[prop] = this.originalData[prop];
        }
      }
      if (Object.keys(finalResults).length === 0) {
        this.$swal({
          icon: "error",
          title: "Results",
          text: "No results were found!",
        });
        this.isLoading = false;
        this.data = {};

        return;
      }

      this.$swal({
        icon: "success",
        title: "Results found",
        text: `${Object.keys(finalResults).length} Were Found!`,
      });
      this.data = finalResults;
      this.show = true;
      this.isLoading = false;
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
.btn-container-match {
  display: flex;
  justify-content: center;
}
</style>
