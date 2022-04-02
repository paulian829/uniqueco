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
                <h3>{{ data.Name }}</h3>
                <h5 style="margin-top: 10px">"{{ data.Tagline }}"</h5>
                <h4 style="margin-top: 20px"><strong>Address</strong></h4>
                <p>
                  {{ data.Address.Lot }} {{ data.Address.Barangay }}
                  {{ data.Address.City }} {{ data.Address.Country }}
                  {{ data.Address.ZipCode }}
                </p>
                <h4><strong>Contacts</strong></h4>
                <p v-for="number in data.Contacts" v-bind:key="number">
                  {{ number }}
                </p>
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
          <button class="btn btn-primary">About School</button>
          <button class="btn btn-primary">Programs</button>
          <button class="btn btn-primary">Requirements</button>
          <button class="btn btn-primary">School Performance</button>
          <button class="btn btn-primary">Scholarship</button>
        </div>
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
      selected: "Programs",
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
}
.inner-container {
  padding-top: 20px;
}
.heading-container {
  text-align: left;
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
</style>