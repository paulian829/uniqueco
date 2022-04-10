<!-- eslint-disable prettier/prettier -->

<template>
  <div id="uni-details">
    <div class="details-btn-container">
      <router-link to="/university/view"
        ><button type="button" class="btn btn-primary">
          VIEW
        </button></router-link
      >
      <button class="btn btn-primary" @click="saveData">SAVE</button>
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
              <strong>Address</strong>
            </h4>
          </div>
          <div class="form-input-container">
            <div class="mb-3">
              <label for="Address-Barangay" class="form-label">Lot</label>
              <input
                type="text"
                class="form-control"
                id="Address-Barangay"
                v-model="dataProps.Address.Lot"
              />
            </div>
            <div class="mb-3">
              <label for="Address-Lot" class="form-label">Barangay</label>
              <input
                type="text"
                class="form-control"
                id="Address-Lot"
                v-model="dataProps.Address.Barangay"
              />
            </div>
            <div class="mb-3">
              <label for="Address-City" class="form-label"
                >City/Municipality</label
              >
              <input
                type="text"
                class="form-control"
                id="Address-City"
                v-model="dataProps.Address.City"
              />
            </div>
            <div class="mb-3">
              <label for="Address-Country" class="form-label">Country</label>
              <input
                type="text"
                class="form-control"
                id="Address-Country"
                v-model="dataProps.Address.Country"
              />
            </div>
            <div class="mb-3">
              <label for="Address-Zip" class="form-label">Zipcode</label>
              <input
                type="text"
                class="form-control"
                id="Address-Zip"
                v-model="dataProps.Address.Zipcode"
              />
            </div>
          </div>
        </div>
        <div class="form-group-container">
          <div class="form-input-heaeding-container">
            <h4>
              <strong>School Details</strong>
            </h4>
          </div>
          <div class="form-input-container">
            <div class="mb-3">
              <label for="Details-About" class="form-label">About School</label>
              <textarea
                class="form-control"
                id="Details-About"
                rows="2"
                v-model="dataProps.SchoolDetails.AboutSchool"
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
                v-model="dataProps.SchoolDetails.Mission"
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
                v-model="dataProps.SchoolDetails.Vission"
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
                v-model="dataProps.SchoolDetails.Goal"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="form-group-container">
          <div class="form-input-heaeding-container">
            <h4><strong>Programs Offered</strong></h4>
          </div>
          <div
            class="form-input-container"
            v-for="(program, key, index) in dataProps.ProgramsOffered"
            :key="key"
          >
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Field Name</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                v-model="dataProps.ProgramsOffered[key].Field"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Programs</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Tuition Fee</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <hr
              v-if="index != Object.keys(dataProps.ProgramsOffered).length - 1"
              style="margin-top: 50px"
            />
          </div>
          <div class="add-btn-container">
            <button
              type="button"
              class="btn btn-primary"
              @click="appendPrograms"
            >
              Add Program
            </button>
          </div>
        </div>
        <div class="form-group-container">
          <div class="form-input-heaeding-container">
            <h4><strong>School Performance</strong></h4>
          </div>
          <div class="form-input-container">
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Rankings</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Board Examp Performance</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Tuition Fee</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>
        </div>
        <div class="form-group-container">
          <div class="form-input-heaeding-container">
            <h4><strong>School Performance</strong></h4>
          </div>
          <div class="form-input-container">
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Deadline</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <h5>Requirements</h5>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Freshmen</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Cross-Enrolles</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                srows="2"
              >
              </textarea>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Second Course Enrolles</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                srows="2"
              >
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
import { getDatabase, ref, update } from "firebase/database";

export default {
  name: "uni-details",
  props: ["dataProps"],
  components: {},
  data: function () {
    return {
      data:this.dataProps
    };
  },
  methods: {
    saveData() {
      console.log(this.dataProps);
      this.$emit("setLoading", true);
      let data = this.dataProps;

      const db = getDatabase();
      const updates = {};
      updates["universities/" + data.Uid] = data;
      update(ref(db), updates)
        .then(() => {
          this.$emit("setLoading", false);
        })
        .catch((e) => {
          console.log(e);
          this.$emit("setLoading", false);
        });
    },
    appendPrograms() {
      const random =
        Math.random().toString(36).substring(2) +
        new Date().getTime().toString(36);
      console.log(random);
      let data = this.dataProps;
      // Object.assign(data.ProgramsOffered, {
      //   [random]: {
      //     Field:'New Field'
      //   }
      // })
      // data.ProgramsOffered.append({ [random]: { Field: "New Field" } });
      const newRow = '{"'+random+'":{"Field":"NewField"}}'
      
      let jsonNewRow = JSON.parse(newRow)
      console.log(jsonNewRow)

      Object.entries(jsonNewRow).forEach(([key,value]) => { data.ProgramsOffered[key] = value })


      console.log(data);
      this.data = data;
    },
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
  box-shadow: 0 0 30px #ccc;
}
</style>
