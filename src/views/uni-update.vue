<!-- eslint-disable prettier/prettier -->
<template>
  <div id="uni-update">
    <div class="container">
      <div class="form-container">
        <div class="form">
          <div class="heading-container">
            <h3>
              <strong
                >PLEASE FILL UP THE SCHOOL DETAILS/INFORMATION BELOW</strong
              >
            </h3>
          </div>
          <div class="form-group-container">
            <div class="form-input-heaeding-container">
              <h4><strong>School Details</strong></h4>
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
                  >Vission</label>
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
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: "uni-update",

  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
#uni-update {
  background: #e4eef4;
  min-height: 91vh;
  display: flex;
  justify-content: center;
}
.form {
  text-align: left;
}
.form-container {
  padding-top: 50px;
}
.form-group-container {
  margin-top: 30px;
  padding: 50px;
  background: #f5f5f5;
}
.form-input-container {
  margin-top: 20px;
}
.add-btn-container button{
  float: right;
  clear: both;
}
</style>
