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
                v-model="data.Address.Lot"
              />
            </div>
            <div class="mb-3">
              <label for="Address-Lot" class="form-label">Barangay</label>
              <input
                type="text"
                class="form-control"
                id="Address-Lot"
                v-model="data.Address.Barangay"
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
                v-model="data.Address.City"
              />
            </div>
            <div class="mb-3">
              <label for="Address-Country" class="form-label">Country</label>
              <input
                type="text"
                class="form-control"
                id="Address-Country"
                v-model="data.Address.Country"
              />
            </div>
            <div class="mb-3">
              <label for="Address-Zip" class="form-label">Zipcode</label>
              <input
                type="text"
                class="form-control"
                id="Address-Zip"
                v-model="data.Address.Zipcode"
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
                v-model="data.SchoolDetails.AboutSchool"
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
                v-model="data.SchoolDetails.Mission"
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
                v-model="data.SchoolDetails.Vission"
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
                v-model="data.SchoolDetails.Goal"
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
            v-for="(program, key, index) in data.ProgramsOffered"
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
                v-model="data.ProgramsOffered[key].Field"
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
                :value="arrayToString(data.ProgramsOffered[key].programs)"
                @change="stringToArrayPrograms(key, $event)"
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
                v-model="data.ProgramsOffered[key].tuition"
              />
              <button
                class="btn btn-warning delete-program-btn"
                @click="removePrograms(key)"
              >
                Delete Program
              </button>
            </div>
            <hr
              v-if="index != Object.keys(data.ProgramsOffered).length - 1"
              style="margin-top: 70px"
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
      data: "",
    };
  },
  computed: {},

  mounted() {
    this.data = this.dataProps;
  },
  methods: {
    saveData() {
      this.$emit("setLoading", true);
      let data = this.data;

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

      this.$set(this.data.ProgramsOffered, random, {
        Field: "New Field",
      });
    },
    removePrograms(key) {
      const arrLength = Object.keys(this.data.ProgramsOffered).length;
      if (arrLength === 1) {
        console.log("cant delete program!");
        return;
      }
      this.$delete(this.data.ProgramsOffered, key);
    },
    arrayToString(val) {
      console.log(typeof val);
      return val.replaceAll(",", "\n");
    },
    stringToArrayPrograms( key, event){
      console.log(event.target.value, key)
    }
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
.delete-program-btn {
  margin-top: 20px;
}
</style>
