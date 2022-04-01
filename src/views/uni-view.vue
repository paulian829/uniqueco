<!-- eslint-disable prettier/prettier -->
<template>
  <div id="uni-view">
    <div class="container">
      <div class="inner-container">
        <div class="heading-container">
          <h2><strong>Overview</strong></h2>
          <div>
            <h3>{{ school.name }}</h3>
          </div>
          <div class="details-containers">
            <div class="uni-flex-column">
              <div class="uni-column-img">
                <img :src="school.schoolPic" alt="" />
              </div>
              <div class="uni-column">
                <div class="uni-column-btn-container">
                  <button type="button" class="btn"   v-bind:class="{ 'btn-primary': selected =='Programs', 'btn-warning': selected !='Programs' }" v-on:click="selected='Programs'">Programs</button>
                  <button type="button" class="btn"  v-bind:class="{ 'btn-primary': selected =='Requirements', 'btn-warning': selected !='Requirements' }" v-on:click="selected='Requirements'">Requirements</button>
                  <button type="button" class="btn" v-bind:class="{ 'btn-primary': selected =='Performance', 'btn-warning': selected !='Performance' }" v-on:click="selected='Performance'">Performance</button>
                  <button type="button" class="btn" v-bind:class="{ 'btn-primary': selected =='Scholarship', 'btn-warning': selected !='Scholarship' }"  v-on:click="selected='Scholarship'">Scholarship</button>
                </div>
                <div class="btn-group-select " v-show="selected === 'Programs'">
                    <div v-for="(program, key) in data.ProgramsOffered" v-bind:key="key" id="item1">{{program.Field}}</div>
                </div>
                <div class="group-details-containers" v-show="selected === 'Requirements'">
                  <div>Deadline: {{data.AdmissionRequirements.Deadline}}</div>
                  <br>
                  <div>
                    <p><strong>Freshmen</strong></p>
                    <div v-for="req in data.AdmissionRequirements.Requirements.Freshmen" v-bind:key="req">{{req}}</div>
                    <br>
                    <p><strong>Cross Enrolless</strong></p>
                    <div v-for="req in data.AdmissionRequirements.Requirements['Cross Enrolless']" v-bind:key="req">{{req}}</div>
                    <br>
                    <p><strong>Second Course Enrollees</strong></p>
                    <div v-for="req in data.AdmissionRequirements.Requirements['Second Course Enrollees']" v-bind:key="req">{{req}}</div>
                  </div>
                </div>
                <div class="group-details-containers" v-show="selected === 'Performance'">
                  <h1>Performance</h1>
                </div>
                <div class="group-details-containers" v-show="selected === 'Scholarship'">
                  <h1>Scholarship</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>

import data from "../../data.json"
export default {
  name: "uni-update",

  data() {
    return {
      data:data,
      selected:'Programs',
        school: {
          name: "De la salle Dasmarinas",
          schoolPic: require("../assets/pexels-photo-207692.jpeg"),
        },
    };
  },

  methods: {
    getPic(pic){
      return require(pic)
    }
  },
};
</script>

<style>
#uni-view {
  background: #e4eef4;
  min-height: 91vh;
  display: flex;
  justify-content: center;
}
.inner-container {
  padding: 50px;
}
.heading-container {
  text-align: left;
}
.heading-container h3 {
  padding-top: 30px;
}
.details-containers {
  padding-top: 20px;
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
}
.uni-column-btn-container {
  display: flex;
  justify-content: center;
}
.uni-column-btn-container button {
  margin: 8px;
}
.btn-group-select {
  height: 100px;
  display: grid;
  grid-template-areas: "a a";
  gap: 10px;
  height: 100%;
  padding-top: 20px;
}
.group-details-containers{
  padding-top: 20px;
}

</style>