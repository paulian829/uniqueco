<!-- eslint-disable prettier/prettier -->
<template>
  <div id="uni-view">
    <div class="container">
      <div class="inner-container">
        <div class="heading-container">
          <div class="details-containers">
            <div class="uni-flex-column">
              <div class="uni-column-img">
                <img :src="school.schoolPic" alt="" />
              </div>
              <div class="uni-column">
                <h3>
                  <strong>{{ data.Name }}</strong>
                </h3>
                <h5 style="margin-top: 10px">"{{ data.Tagline }}"</h5>
                <h4 style="margin-top: 20px"><strong>Address</strong></h4>
                <p>
                  {{ data.Address.Lot }} {{ data.Address.Barangay }}
                  {{ data.Address.City }} {{ data.Address.Country }}
                  {{ data.Address.ZipCode }}
                </p>
                <h4><strong>Contacts</strong></h4>
                <span v-for="number in data.Contacts" v-bind:key="number" style="margin-right:20px">
                  {{ number }}
                </span>
                <div class="btn-container">
                  <button class="btn btn-primary">Message</button>
                  <button class="btn btn-primary">Go to Website</button>
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
          <button class="btn btn-primary" @click="selected = 'Programs'" :class="{ 'btn-active': selected == 'Programs' }">
            Programs
          </button>
          <button class="btn btn-primary" @click="selected = 'Requirements'" :class="{ 'btn-active': selected == 'Requirements' }">
            Requirements
          </button>
          <button class="btn btn-primary" @click="selected = 'Performance' " :class="{ 'btn-active':selected == 'Performance'}">School Performance</button>
          <button class="btn btn-primary" @click="selected = 'Scholarship' " :class="{'btn-active':selected == 'Scholarship'}">Scholarship</button>
        </div> 
        <div id="About" class="selected-group" v-if="selected == 'About'">
          <div class="logo-container">
            <img src="../assets/school-pic.png" alt="" />
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
                v-for="course in program.Programs"
                v-bind:key="course"
                class="indented"
              >
                <p>{{ course }}</p>
              </div>
              <h6>
                <strong>Tuition:</strong> {{ program.MinTuition }} -
                {{ program.MaxTuition }}
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
          <div class="group-flex">
            <div
              class="program-container"
              v-for="(requirement, key) in data.AdmissionRequirements
                .Requirements"
              v-bind:key="key"
            >
              <h5>
                <strong>{{ key }}</strong>
              </h5>
              <div>
                <p v-for="item in requirement" v-bind:key="item">{{ item }}</p>
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
          <br>
          <h5><strong>Ranking</strong></h5>
          <h1>{{data.SchoolPerformance.Ranking}}TH</h1>
          <br>
          <h5><strong>Board Exam Performance</strong></h5>
          <h1>{{data.SchoolPerformance.BoardRankingPerformance}}</h1>
          <br>
          <div class="performance-others">
            <h5><strong>Others</strong></h5>
            <p v-for="others in data.SchoolPerformance.Others" v-bind:key='others'>{{others}}</p>
          </div>
        </div>
        </div>
        <div class="selected-group" id="Scholarship" v-if="selected === 'Scholarship' ">
          <div class="program-heading">
            <h3><strong>Scholarship</strong></h3>
          </div>
          <br>
          <div class="group-centered">
            <h5 v-for="item in data.Scholarship" v-bind:key="item">{{item}}</h5>
          </div>
        </div>
      </div>
      <div class="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d295.61664909642514!2d121.92252934719077!3d13.999647954095922!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1649086065331!5m2!1sen!2sph" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import data from "../../data.json";
export default {
  name: "uni-update",

  data() {
    return {
      data: data,
      selected: "About",
      school: {
        name: "De la salle Dasmarinas",
        schoolPic: require("../assets/pexels-photo-207692.jpeg"),
      },
    };
  },

  methods: {
    getPic(pic) {
      return require(pic);
    },
  },
};
</script>

<style>
#uni-view {
  background: #e4eef4;
  min-height: 91vh;
  display: flex;
  justify-content: center;
  padding: 135px 50px 50px 50px ;
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
.uni-column-img {
  max-width: 40%;
  width: 100%;
}
.uni-column {
  max-width: 60%;
  width: 100%;
  background: #f5f5f5;
  padding: 30px;
  position: relative;
}
.uni-column-img img {
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
div#Requirements,div#Scholarship {
  padding: 30px;
}
.btn-active {
  background: #ff974c !important;
  border: #ff974c !important;
}
div#Performance {
    padding: 30px;
}
.group-centered h5{
  color: #ff974c;
}

.primary-color{
  color: #ff974c;
}
#uni-view .container {
    box-shadow: 0 0 50px #ccc;
    padding: 0;
}
</style>