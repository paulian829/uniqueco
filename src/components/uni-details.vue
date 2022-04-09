<!-- eslint-disable prettier/prettier -->

<template>
  <div id="uni-details">
    <div class="details-btn-container">
      <router-link to="/university/view"
        ><button type="button" class="btn btn-primary">
          VIEW
        </button></router-link
      >
      <button class="btn btn-primary">SAVE</button>
    </div>
    <div class="details-container">
      <div class="heading-container">
        <h3>
          <strong>PLEASE FILL UP THE SCHOOL DETAILS/INFORMATION BELOW</strong>
        </h3>
      </div>
      <div class="outer-form-group-container">
        <div class="form-group-container">
          <div class="form-input-heaeding-container">
            <h4>
              <strong>School Details {{ data.test }}</strong>
            </h4>
          </div>
          <div class="form-input-container">
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >About School</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Mission</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Vission</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Goals</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
              ></textarea>
            </div>
          </div>
          
        </div>
                  <div class="form-group-container">
            <div class="form-input-heaeding-container">
              <h4><strong>Programs Offered</strong></h4>
            </div>
            <div class="form-input-container">
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Field</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Programs</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Tuition Fee</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
              </div>
            </div>
            <div class="add-btn-container">
              <button type="button" class="btn btn-primary">Add Program</button>
            </div>
          </div>
          <div class="form-group-container">
            <div class="form-input-heaeding-container">
              <h4><strong>School Performance</strong></h4>
            </div>
            <div class="form-input-container">
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Rankings</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
              </div>
                            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Board Examp Performance</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Tuition Fee</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
              </div>
            </div>
          </div>
          <div class="form-group-container">
            <div class="form-input-heaeding-container">
              <h4><strong>School Performance</strong></h4>
            </div>
            <div class="form-input-container">
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Deadline</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
              </div>
              <h5>Requirements</h5>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Freshmen</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Cross-Enrolles</label>
                  <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  srows="2">
                  </textarea>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Second Course Enrolles</label>
                  <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  srows="2">
                  </textarea>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
// @ is an alias to /src
import data from "../../data.json";

export default {
  name: "uni-details",
  components: {},
  data() {
    return {
      data: data,
    };
  },
};
</script>

<style scoped>
#uni-details {
  padding: 50px;
  background: #f5f5f5;
}

#uni-details .details-btn-container {
  display: flex;
  justify-content: flex-end;
}

#uni-details .details-btn-container button {
  margin-left: 10px;
}

.details-container {
  margin-top: 30px;
  text-align: left;
}
.no-space {
  margin: 0;
}
.hr-style {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.details-section {
  margin-top: 30px;
}

dd.col-sm-11 {
  padding-left: 60px;
}
.details-section h5 {
  color: #ff9829;
}

.details-btn-container a {
  color: white;
  text-decoration: none;
}
.form-group-container {
  margin-top: 30px;
  padding: 50px;
  background: #fff;
  box-shadow:0 0 30px #ccc
}
</style>
