<!-- eslint-disable prettier/prettier -->
<template>
  <div id="uni-view">
    <div class="container" v-if="!errorFlag">
      <div class="inner-container">
        <div class="heading-container">
          <div class="details-containers">
            <div class="uni-flex-column">
              <div class="uni-column-img">
                <img :src="data.preview" alt="" />
              </div>
              <div class="uni-column">
                <h3>
                  <strong>{{ data.Name }}</strong>
                </h3>
                <StarRating
                  :rating="score"
                  :read-only="true"
                  :increment="0.1"
                  :star-size="30"
                ></StarRating>
                <span v-if="reviewCount <= 1">{{ reviewCount }} Review</span>
                <span v-else>{{ reviewCount }} Reviews</span>
                <h5 style="margin-top: 10px">
                  "{{ data.SchoolDetails.Qoute }}"
                </h5>
                <h4 style="margin-top: 20px"><strong>Address</strong></h4>
                <p>
                  {{ data.Address.Lot }} {{ data.Address.Barangay }}
                  {{ data.Address.City }} {{ data.Address.Province }}
                  {{ data.Address.ZipCode }}
                </p>
                <h4><strong>Contacts</strong></h4>
                <span>{{ data.contact }}</span>
                <div class="btn-container">
                  <a
                    :href="'https://' + data.Website"
                    target="_blank"
                    rel="noreferrer noopener"
                    ><button class="btn btn-primary">Go to Website</button></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="inner-container second-section">
        <div class="btn-container-two">
          <button
            class="btn btn-primary"
            v-on:click="selected = 'About'"
            :class="{ 'btn-active': selected == 'About' }"
          >
            About School
          </button>
          <button
            class="btn btn-primary"
            @click="selected = 'Programs'"
            :class="{ 'btn-active': selected == 'Programs' }"
          >
            Programs
          </button>
          <button
            class="btn btn-primary"
            @click="selected = 'Requirements'"
            :class="{ 'btn-active': selected == 'Requirements' }"
          >
            Requirements
          </button>
          <button
            class="btn btn-primary"
            @click="selected = 'Performance'"
            :class="{ 'btn-active': selected == 'Performance' }"
          >
            School Performance
          </button>
          <button
            class="btn btn-primary"
            @click="selected = 'Scholarship'"
            :class="{ 'btn-active': selected == 'Scholarship' }"
          >
            Scholarship
          </button>
        </div>
        <div id="About" class="selected-group" v-if="selected == 'About'">
          <div class="logo-container">
            <img :src="data.logo" alt="" />
          </div>
          <div class="about-details-container">
            <div>
              <h5 class="primary-color"><strong>About</strong></h5>
              <p>{{ data.SchoolDetails.AboutSchool }}</p>
            </div>
            <div>
              <h5 class="primary-color"><strong>Vission</strong></h5>
              <p>{{ data.SchoolDetails.Vission }}</p>
            </div>
            <div>
              <h5 class="primary-color"><strong>Mission</strong></h5>
              <p>{{ data.SchoolDetails.Mission }}</p>
            </div>
            <div>
              <h5 class="primary-color"><strong>Goal</strong></h5>
              <p>{{ data.SchoolDetails.Goal }}</p>
            </div>
          </div>
        </div>
        <div id="Programs" class="selected-group" v-if="selected == 'Programs'">
          <div class="program-heading">
            <h3><strong>Programs</strong></h3>
          </div>
          <div class="group-flex">
            <div
              v-for="program in data.ProgramsOffered"
              v-bind:key="program.Field"
              class="program-container"
            >
              <h5>
                <strong>{{ program.Field }}</strong>
              </h5>
              <h6><strong>Courses</strong></h6>
              <div
                v-for="course in stringSplit(program.programs)"
                v-bind:key="course"
                class="indented"
              >
                <p>{{ course }}</p>
              </div>
              <h6>
                <strong>Tuition:</strong> {{ program.TuitionMin }} -
                {{ program.TuitionMax }}
              </h6>
            </div>
          </div>
        </div>
        <div
          id="Requirements"
          class="selected-group"
          v-if="selected === 'Requirements'"
        >
          <div class="program-heading">
            <h3><strong>Admission Requirements</strong></h3>
          </div>
          <div class="group-flex center">
            <div class="data-container">
              <h5><strong>Deadline for Requirements</strong></h5>
              <h2>{{ data.Requirements.Date }}</h2>
            </div>
            <div class="group-flex center">
              <div class="data-container">
                <h5><strong>Freshmen</strong></h5>
                <p
                  v-for="item in stringSplit(data.Requirements.Freshmen)"
                  :key="item"
                >
                  {{ item }}
                </p>
              </div>
            </div>
            <div class="group-flex center">
              <div class="data-container">
                <h5><strong>Cross-Enrolless </strong></h5>
                <p
                  v-for="item in stringSplit(data.Requirements.CrossEnrolles)"
                  :key="item"
                >
                  {{ item }}
                </p>
              </div>
            </div>
            <div class="group-flex center">
              <div class="data-container">
                <h5><strong>Second Course</strong></h5>
                <p
                  v-for="item in stringSplit(data.Requirements.SecondCourse)"
                  :key="item"
                >
                  {{ item }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="Performance"
          class="selected-group"
          v-if="selected === 'Performance'"
        >
          <div class="program-heading">
            <h3><strong>School Performance</strong></h3>
          </div>
          <div class="group-centered">
            <br />
            <h5><strong>Ranking</strong></h5>
            <h1>{{ data.SchoolPerformance.Ranking }} Place on Philippines</h1>
            <br />
            <h5><strong>Board Exam Performance</strong></h5>
            <h1>{{ data.SchoolPerformance.BoardPerformance }} Passing Rate</h1>
            <br />
            <div class="performance-others">
              <h5><strong>Others</strong></h5>
              <p
                v-for="others in stringSplit(data.SchoolPerformance.Others)"
                v-bind:key="others"
              >
                {{ others }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="selected-group"
          id="Scholarship"
          v-if="selected === 'Scholarship'"
        >
          <div class="program-heading">
            <h3><strong>Scholarship</strong></h3>
          </div>
          <br />
          <div class="group-centered">
            <h4 v-for="item in stringSplit(data.Scholarship)" v-bind:key="item">
              {{ item }}
            </h4>
          </div>
        </div>
      </div>
      <div class="map-container" v-html="data.Address.gmap"></div>
      <div class="articles-view-container">
        <div class="articles-header-container" style="margin-bottom: 30px">
          <h3>Articles</h3>
        </div>
        <div class="no-articles" v-if="!data.articles">
          <h4>No Articles Available</h4>
        </div>
        <div class="row row-cols-1 row-cols-md-2 g-4" v-else>
          <div
            class="col"
            v-for="(item, key) in data.articles"
            :key="key"
            @click="goToArticles(key)"
          >
            <div class="card">
              <img :src="item.articleImageURL" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ stringTruncate(item.content) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="review-container">
        <div class="articles-header-container" style="margin-bottom: 30px">
          <h3>Reviews</h3>
        </div>
        <carousel-3d>
          <slide v-for="(index, i) in reviews" :key="i" :index="index.index">
            <div class="review-text">"{{ index.comment }}"</div>
            <div class="star-rating">
              <StarRating
                :rating="index.rating"
                :read-only="true"
                :increment="1"
                :star-size="30"
                :show-rating="false"
              ></StarRating>
            </div>
            <div class="review-name">
              {{ index.name }}, {{ index.Province }}
            </div>
          </slide>
        </carousel-3d>
      </div>
      <div class="comment-section" v-if="loggedIn">
        <div class="articles-header-container" style="margin-bottom: 30px">
          <h3>Write a comment</h3>
        </div>
        <div class="comment-section-form">
          <textarea
            name="comment"
            id="comment"
            maxlength="150"
            cols="30"
            rows="10"
            v-model="rating.comment"
            style="padding: 10px"
          ></textarea>
          <div>
            <star-rating
              :show-rating="false"
              :increment="1"
              :rating="rating.rating"
              @rating-selected="(rating) => setRating(rating)"
              style="margin: 0 auto; justify-content: center"
            ></star-rating>
          </div>
          <button
            class="btn btn-primary btn-lg"
            style="margin-top: 15px"
            @click="postReview"
          >
            POST REVIEW
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>Page Not Found!</h1>
    </div>
    <Loader v-if="isLoading"></Loader>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import {
  getDatabase,
  ref,
  onValue,
  update,
  get,
  child,
} from "firebase/database";
import Loader from "../components/loader.vue";
import { passAuth } from "../db";
import { onAuthStateChanged } from "firebase/auth";

import { Carousel3d, Slide } from "vue-carousel-3d";
import StarRating from "vue-star-rating";

export default {
  name: "uni-update",
  components: { Loader, Carousel3d, Slide, StarRating },

  data() {
    return {
      uid: this.$route.params.uid,
      data: "",
      isLoading: false,
      selected: "About",
      SchoopPic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1280px-No_image_3x4.svg.png",
      school: {
        name: "De la salle Dasmarinas",
        schoolPic: require("../assets/pexels-photo-207692.jpeg"),
      },
      errorFlag: false,
      reviews: [1, 2, 3],
      rating: {
        rating: 0,
        comment: "",
        Uid: this.Uid,
      },
      loggedIn: false,
      accountData: {},
      score: 0,
      reviewCount: 0,
      count: 0,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.getUserData(this.uid);
    this.checkLoggedIn();
  },
  methods: {
    getPic(pic) {
      return require(pic);
    },
    getUserData(uid) {
      try {
        this.isLoading = true;
        const db = getDatabase();
        const query = ref(db, "university/" + uid);
        onValue(query, (snapshot) => {
          const data = snapshot.val();
          if (!data) {
            this.errorFlag = true;
            this.isLoading = false;
            return;
          }
          this.isLoading = false;
          this.data = data;
          this.getReviews();
        });
      } catch (e) {
        console.log("error", e);
        this.isLoading = false;
      }
    },
    stringSplit(e) {
      console.log(e);
      if (e !== undefined) {
        let arrayItem = e.split("\n");
        return arrayItem;
      }
      return [];
    },
    stringTruncate(e) {
      if (e !== undefined) {
        return e.split(" ").splice(0, 15).join(" ");
      }
      return [];
    },
    goToArticles(key) {
      this.$router.push(`/articles/${this.data.Uid}/${key}`);
    },
    setRating(rating) {
      console.log(rating);
      this.rating.rating = rating;
    },
    checkLoggedIn() {
      const auth = passAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user.uid);
          this.getAccountType(user.uid);
          // this.getUserData(uid);
        } else {
          // User is signed out
          // ...
          this.loggedIn = false;
        }
      });
    },
    getAccountType(uid) {
      const db = getDatabase();
      const query = ref(db, "Account/" + uid);
      onValue(query, (snapshot) => {
        const accountData = snapshot.val();
        this.accountData = accountData;
        console.log(accountData);
        if (accountData.type === "student") {
          this.loggedIn = true;
        }
      });
    },
    postReview() {
      const db = getDatabase();

      const updates = {};
      let review = {
        rating: this.rating.rating,
        comment: this.rating.comment,
        name: this.accountData.firstName,
        Uid: this.accountData.Uid,
      };
      updates[
        "university/" + this.data.Uid + "/reviews/" + this.accountData.Uid
      ] = review;

      update(ref(db), updates)
        .then(() => {
          this.getReviews();
          this.rating = {};
        })
        .catch(() => {});
    },
    getReviews() {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `university/${this.data.Uid}/reviews`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            let reviewsObj = snapshot.val();
            let count = 0;
            for (let reviews in reviewsObj) {
              reviewsObj[reviews].index = count;
              this.$set(this.reviews, count, reviewsObj[reviews]);

              count = count + 1;
              console.log(reviews);
            }
            // this.reviews = Object.assign({}, reviewsObj);
            // Vue.set(vm.items, indexOfItem, newValue)  //works fine

            console.log(count);
            console.log(this.reviews);
            this.count = count;
            this.getAverage(reviewsObj);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getAverage(arr) {
      let score = 0;
      let reviewCount = 0;
      for (let item in arr) {
        score = score + arr[item].rating;
        reviewCount = reviewCount + 1;
      }
      console.log(score);
      console.log(reviewCount);
      this.score = score / reviewCount;
      this.reviewCount = reviewCount;
    },
  },
};
</script>

<style>
#uni-view {
  background: #e4eef4;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 135px 50px 50px 50px;
}
.heading-container {
  text-align: left;
}
.uni-img {
  width: 100%;
  height: 100%;
}
.uni-flex-column {
  display: flex;
}
.uni-column-img img {
  max-width: 550px;
  max-height: 470px;
  min-height: 470px;
  width: 100%;
  height: 100%;
}
.uni-column {
  max-width: 60%;
  width: 100%;
  background: #f5f5f5;
  padding: 30px;
  position: relative;
}
.uni-column-img {
  max-width: 550px;
  width: 100%;
}
.btn-container {
  position: absolute;
  bottom: 30px;
}
.btn-container button {
  margin-right: 20px;
}
.inner-container.second-section {
  background: #f0eded;
  padding: 30px !important;
}
.btn-container-two button {
  margin: 0 15px;
}
.btn-container-two {
  margin-top: 20px;
}
div#About {
  padding: 20px;
  display: flex;
  margin-top: 20px;
}
.logo-container {
  max-width: 300px;
  width: 100%;
  margin-right: 15px;
}
.about-details-container {
  text-align: left;
}
div#Programs {
  padding: 30px;
}
.group-flex {
  display: flex;
  padding-top: 20px;
  flex-wrap: wrap;
}
.program-container {
  width: 50%;
  text-align: left;
  padding-top: 10px;
}
.program-heading {
  padding-top: 30px;
}
.program-container h5 {
  text-align: center;
  color: #ff974c;
}
.indented {
  margin-left: 30px;
}
div#Requirements,
div#Scholarship {
  padding: 30px;
}
.btn-active {
  background: #ff974c !important;
  border: #ff974c !important;
}
div#Performance {
  padding: 30px;
}
.group-centered h5 {
  color: #ff974c;
}

.primary-color {
  color: #ff974c;
}
#uni-view .container {
  box-shadow: 0 0 50px #ccc;
  padding: 0;
}
.group-flex.center {
  display: flex;
  justify-content: center;
}
.group-flex.center {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.group-flex.center h5 {
  color: #ff974c;
}
div#Requirements,
div#Scholarship {
  padding: 30px;
}
.articles-view-container,
.review-container {
  margin: 0 !important;
  background: #f0eded;
  padding: 50px;
}

.comment-section {
  background: #ccc;
  padding: 50px;
}

.card-img-top {
  max-height: 397px;
  height: 100%;
  object-fit: cover;
}

.carousel-3d-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
}
.review-text {
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
}
.star-rating,
.review-name {
  margin-bottom: 10px;
}
</style>