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
                <div class="detail-container" v-show="selected === 'Programs'">
                  <h1>Programs</h1>
                </div>
                <div class="detail-container" v-show="selected === 'Requirements'">
                  <h1>Requirements</h1>
                </div>
                <div class="detail-container" v-show="selected === 'Performance'">
                  <h1>Performance</h1>
                </div>
                <div class="detail-container" v-show="selected === 'Scholarship'">
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
export default {
  name: "uni-update",

  data() {
    return {
    selected:'Programs',
      school: {
        name: "De la salle Dasmarinas",
        schoolPic: require("../assets/pexels-photo-207692.jpeg"),
      },
    };
  },

  methods: {},
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
  margin: 0 1em;
}

.details-containers{
      transition: visibility 0s, opacity 0.5s linear;
}
</style>