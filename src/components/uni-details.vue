<!-- eslint-disable prettier/prettier -->

<template>
  <div id="uni-details">
    <div class="details-btn-container">
      <button class="btn btn-primary" @click="goToView">VIEW</button>
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
          <div class="form-input-heading-container">
            <h4>School Details</h4>
          </div>
          <div class="form-input-container">
            <div class="mb-3">
              <label for="name" class="form-label">University Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="data.Name"
              />
            </div>
            <div class="mb-3">
              <label for="website" class="form-label">Website</label>
              <input
                type="text"
                class="form-control"
                id="School-name"
                v-model="data.Website"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="text"
                class="form-control"
                id="email"
                v-model="data.Email"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Contact Number</label>
              <input
                type="text"
                class="form-control"
                id="email"
                v-model="data.contact"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">University Type</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="Public"
                  v-model="data.schoolType"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Public
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value="Private"
                  v-model="data.schoolType"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Private
                </label>
              </div>
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">Logo</label>
              <input
                class="form-control"
                type="file"
                id="formFile"
                @change="onLogoChange"
              />
            </div>
            <img
              v-if="updatedLogo"
              :src="logoUri"
              alt=""
              style="max-width: 300px"
            />
            <img v-else :src="data.logo" alt="" style="max-width: 300px" />
          </div>
        </div>
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
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <label for="Address-Lot" class="form-label">Barangay</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Address-Lot"
                    v-model="data.Address.Barangay"
                  />
                </div>
              </div>
              <div class="col">
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
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <label for="Address-Province" class="form-label"
                    >Province</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="Address-Province"
                    v-model="data.Address.Province"
                  />
                </div>
              </div>
              <div class="col">
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
          </div>
          <div class="form-input-heaeding-container">
            <h4>
              <strong>Google Map</strong>
            </h4>
            <h6>Instructions</h6>
            <ol style="list-style-type: decimal">
              <li>
                Go to
                <a :href="googleLink" target="_blank" rel="noopener noreferrer"
                  >Google Map</a
                >
              </li>
              <li>
                Search for the University Location
                <a
                  :href="'https://i.imgur.com/WH34S0T.jpg'"
                  target="_blank"
                  rel="noopener noreferrer"
                  >See Example</a
                >
              </li>
              <li>
                Click on the <strong>Share</strong> Link Button
                <a
                  :href="'https://i.imgur.com/eolfTNQ.jpg'"
                  target="_blank"
                  rel="noopener noreferrer"
                  >See Example</a
                >
              </li>
              <li>
                Select Embed a Map and Then <strong>Copy</strong> HTML code
                <a
                  :href="'https://i.imgur.com/V2z0Ee5.jpg'"
                  target="_blank"
                  rel="noopener noreferrer"
                  >See Example</a
                >
              </li>
              <li>
                <strong>Paste</strong> the HTML code to the form below
                <a
                  :href="'https://i.imgur.com/ndCXDRo.png'"
                  target="_blank"
                  rel="noopeneer noreferrer"
                  >See Example</a
                >
              </li>
              <li>
                <strong>Edit</strong> the width to <strong>100%</strong>
                <a
                  :href="'https://i.imgur.com/ls96VS9.png'"
                  target="_blank"
                  rel="noopeneer noreferrer"
                  >See Example</a
                >
              </li>
            </ol>
            <div class="mb-3">
              <label for="Details-About" class="form-label"
                >Map Embedded HTML code</label
              >
              <textarea
                class="form-control"
                id="Details-About"
                rows="3"
                v-model="data.Address.gmap"
                @blur="(e) => checkGmap(data.Address.gmap)"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="form-group-container">
          <div class="form-input-heaeding-container">
            <h4>
              <strong>School Mission and Vission</strong>
            </h4>
          </div>
          <div class="form-input-container">
            <div class="mb-3">
              <label for="School-qoute" class="form-label">School Qoute</label>
              <input
                type="text"
                class="form-control"
                id="School-qoute"
                v-model="data.SchoolDetails.Qoute"
              />
            </div>
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
              <label for="Details-Mission" class="form-label">Mission</label>
              <textarea
                class="form-control"
                id="Details-Mission"
                rows="2"
                v-model="data.SchoolDetails.Mission"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="Details-Vission" class="form-label">Vission</label>
              <textarea
                class="form-control"
                id="Details-Mission"
                rows="2"
                v-model="data.SchoolDetails.Vission"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="Details-Goals" class="form-label">Goals</label>
              <textarea
                class="form-control"
                id="Details-Goals"
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
              <label :for="key + '-Field-Name'" class="form-label"
                >Field Name</label
              >
              <input
                type="text"
                class="form-control"
                :id="key + '-Field-Name'"
                placeholder="Field Name"
                v-model="data.ProgramsOffered[key].Field"
              />
            </div>
            <div class="mb-3">
              <label :for="key + '-Programs'" class="form-label"
                >Programs</label
              >
              <textarea
                class="form-control"
                :id="key + '-Programs'"
                rows="2"
                v-model="data.ProgramsOffered[key].programs"
              ></textarea>
            </div>

            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <label :for="key + '-Tuition-Min'" class="form-label"
                    >Tuition Fee Min</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    :id="key + '-Tuition-Min'"
                    v-model="data.ProgramsOffered[key].TuitionMin"
                  />
                </div>
              </div>
              <div class="col order-5">
                <div class="mb-3">
                  <label :for="key + '-Tuition-Max'" class="form-label"
                    >Tuition Fee Max</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    :id="key + '-Tuition-Max'"
                    v-model="data.ProgramsOffered[key].TuitionMax"
                  />
                </div>
              </div>
            </div>
            <button
              class="btn btn-warning delete-program-btn"
              @click="removePrograms(key)"
            >
              Delete Program
            </button>
            <hr
              v-if="index != Object.keys(data.ProgramsOffered).length - 1"
              style="margin-top: 70px"
            />
          </div>
          <div class="add-btn-container">
            <button
              style="margin-top: 20px"
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
              <label for="Performance-Ranking" class="form-label"
                >Rankings</label
              >
              <input
                type="email"
                class="form-control"
                id="Performance-Ranking"
                v-model="data.SchoolPerformance.Ranking"
              />
            </div>
            <div class="mb-3">
              <label for="school-performance-board-exam" class="form-label"
                >Board Examp Performance</label
              >
              <textarea
                class="form-control"
                id="school-performance-others"
                cols="30"
                rows="3"
                v-model="data.SchoolPerformance.BoardPerformance"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="school-performance-others" class="form-label"
                >Others</label
              >
              <textarea
                class="form-control"
                id="school-performance-others"
                cols="30"
                rows="3"
                v-model="data.SchoolPerformance.Others"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="form-group-container">
          <div class="form-input-heaeding-container">
            <h4><strong>Admission Requirements</strong></h4>
          </div>
          <div class="form-input-container">
            <div class="mb-3">
              <label for="Requirements-deadline" class="form-label"
                >Deadline</label
              >
              <input
                type="date"
                class="form-control"
                id="Requirements-deadline"
                v-model="data.Requirements.Date"
              />
            </div>
            <h5 style="margin-top: 20px">Requirements</h5>
            <div class="mb-3">
              <label for="requirements-freshmen" class="form-label"
                >Freshmen</label
              >
              <textarea
                class="form-control"
                id="requirements-freshmen"
                rows="2"
                v-model="data.Requirements.Freshmen"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="requirements-cross-enrolles" class="form-label"
                >Cross-Enrolles</label
              >
              <textarea
                class="form-control"
                id="requirements-cross-enrolles"
                srows="2"
                v-model="data.Requirements.CrossEnrolles"
              >
              </textarea>
            </div>
            <div class="mb-3">
              <label for="requirements-second-course" class="form-label"
                >Second Course Enrolles</label
              >
              <textarea
                class="form-control"
                id="requirements-second-course"
                srows="2"
                v-model="data.Requirements.SecondCourse"
              >
              </textarea>
            </div>
          </div>
        </div>
        <div class="form-group-container">
          <h5 style="margin-top: 20px"><strong>Scholarship</strong></h5>
          <div class="mb-3">
            <label for="scholarships" class="form-label"
              >List of Scholarship offered</label
            >
          </div>
          <textarea
            class="form-control"
            id="requirements-second-course"
            srows="2"
            v-model="data.Scholarship"
          >
          </textarea>
        </div>
        <div class="form-group-container">
          <h5 style="margin-top: 20px"><strong>Images</strong></h5>
          <div class="mb-3">
            <label for="formFile" class="form-label">Select Images</label>
            <input
              class="form-control"
              type="file"
              id="formFile"
              @change="onFileChange"
            />
          </div>
          <div>
            <img v-if="previewChanged" :src="preview" alt="" />
            <img v-else :src="data.preview" alt="" />
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
import {
  uploadBytes,
  getStorage,
  ref as StorageRef,
  getDownloadURL,
} from "@firebase/storage";

export default {
  name: "uni-details",
  props: ["dataProps"],
  data: function () {
    return {
      data: "",
      preview: "",
      currentImage: "",
      previewChanged: false,
      imageFile: "",
      updatedLogo: false,
      logoUri: "",
      imageLogoFile: "",
      googleLink: "https://www.google.com.ph/maps/",
    };
  },
  computed: {},

  mounted() {
    this.data = this.dataProps;
    this.getCurrentImage(this.data.Uid);
  },
  methods: {
    getCurrentImage(uid) {
      console.log(uid, "TEST");
      if (this.data.ImageFileName) {
        const storage = getStorage();
        getDownloadURL(StorageRef(storage, this.data.ImageFileName))
          .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'
            // This can be downloaded directly:
            // const xhr = new XMLHttpRequest();
            // xhr.responseType = "blob";
            // xhr.onload = () => {
            //   const blob = xhr.response;
            //   console.log(blob)
            // };
            // xhr.open("GET", url);
            // xhr.send();

            // Or inserted into an <img> element
            // const img = document.getElementById("myimg");
            // img.setAttribute("src", url);
            this.previewChanged = false;
            this.currentImage = url;
          })
          .catch((error) => {
            // Handle any errors
            console.log(error);
          });
      }
    },
    saveData() {
      this.$emit("setLoading", true);
      if (this.updatedLogo) {
        let file = this.imageLogoFile;
        const storage = getStorage();
        let uid = this.data.Uid;
        const schoolPicRef = StorageRef(storage, `logo/${uid}-${file.name}`);
        uploadBytes(schoolPicRef, file)
          .then(() => {
            getDownloadURL(schoolPicRef).then((url) => {
              this.logoUri = url;
              this.data.logo = url;
              console.log(this.data);
              if (this.previewChanged) {
                this.uploadPreview();
              }
              this.updateDetails();
            });
          })
          .catch((e) => {
            this.$swal({
              icon: "error",
              title: "Error",
              text: e,
            });
          });
      } else if (this.previewChanged) {
        this.uploadPreview();
      } else {
        this.updateDetails();
      }
    },
    uploadPreview() {
      let file = this.imageFile;
      const storage = getStorage();
      let uid = this.data.Uid;
      const schoolPicRef = StorageRef(
        storage,
        `schoolPictures/${uid}-${file.name}`
      );
      uploadBytes(schoolPicRef, file)
        .then(() => {
          getDownloadURL(schoolPicRef).then((url) => {
            this.preview = url;
            this.data.preview = url;
            this.updateDetails();
          });
        })
        .catch((e) => {
          this.$swal({
            icon: "error",
            title: "Error",
            text: e,
          });
        });
    },

    updateDetails() {
      let data = this.data;

      const db = getDatabase();
      const updates = {};
      updates["university/" + data.Uid] = data;
      update(ref(db), updates)
        .then(() => {
          this.$emit("setLoading", false);
          this.$swal({
            icon: "success",
            title: "Success",
            text: "Details Updated",
          });
        })
        .catch((e) => {
          this.$swal({
            icon: "error",
            title: "Error",
            text: e,
          });
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
    goToView() {
      let userID = this.data.Uid;
      console.log(userID);
      this.$router.push(`/university/view/${userID}`);
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.previewChanged = true;
      this.imageFile = file;
      console.log(file);
      this.preview = URL.createObjectURL(file);
    },
    onLogoChange(e) {
      const file = e.target.files[0];
      console.log(file);
      this.updatedLogo = true;
      this.logoUri = URL.createObjectURL(file);
      this.imageLogoFile = file;
    },
    checkGmap(e) {
      if (!e.includes("https://www.google.com/maps/embed")) {
        this.$swal({
          icon: "error",
          title: "Error",
          text: "Error in Adding Google Map Embedded link",
        });
        this.data.Address.gmap = "";
        return;
      }

      if (!e.includes('width="100%"')) {
        this.$swal({
          icon: "error",
          title: "Error",
          text: "Error in Adding Google Map Embedded link",
        });
        this.data.Address.gmap = "";
        return;
      }
      this.$swal({
        icon: "success",
        title: "Success",
        text: "Google map embedded link added",
      });
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
.delete-program-btn {
  margin-top: 20px;
}
</style>
