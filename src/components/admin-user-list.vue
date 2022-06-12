<template>
  <div id="Articles">
    <div class="article-header-container">
      <h2>User List</h2>
      <button
        class="btn btn-primary primary"
        style="margin-left: 20px"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add new
      </button>
      <div class="search-group-container">
        <div class="input-group mb-3 input-group-lg">
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            v-model="searchString"
          />
          <button class="btn btn-primary" type="button" id="button-addon2">
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="articles-list-container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Uid</th>
            <th scope="col">Date Created</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="index in data" :key="index.uid">
            <td class="text-left">{{ index.data.uid }}</td>
            <td class="text-left">
              {{ textSlice(index.data.data.dateCreated) }}
            </td>
            <td class="text-left">{{ index.data.email }}</td>
            <td class="text-left">
              <button
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                Edit
              </button>
              <button
                class="btn btn-danger"
                style="margin-left: 10px"
                @click="deleteAccount(index.data.uid)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add new Account</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="validateUser">
              <div class="mb-3">
                <label for="add-email" class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="add-email"
                  aria-describedby="emailHelp"
                  v-model="addForm.email"
                />
              </div>
              <div class="mb-3">
                <label for="add-password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="add-password"
                  v-model="addForm.password"
                />
              </div>
              <div class="mb-3">
                <label for="add-contact" class="form-label">Contact</label>
                <input
                  type="text"
                  class="form-control"
                  id="add-contact"
                  v-model="addForm.contact"
                />
              </div>
              <div class="mb-3">
                <label for="add-type" class="form-label">Account Type</label
                ><select
                  class="form-select"
                  aria-label="Default select example"
                  id="add-type"
                  v-model="addForm.type"
                >
                  <option value="university">University</option>
                  <option value="student">Student</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="add-fname" class="form-label">First name</label>
                <input
                  type="text"
                  class="form-control"
                  id="add-fname"
                  v-model="addForm.firstname"
                />
              </div>
              <div class="mb-3">
                <label for="add-lname" class="form-label">Last name</label>
                <input
                  type="text"
                  class="form-control"
                  id="add-lname"
                  v-model="addForm.lastname"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref="Close"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="exampleModal1"
      tabindex="-1"
      aria-labelledby="exampleModalLabel1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel1">Edit Account</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="editUser">
              <div class="mb-3">
                <label for="add-contact" class="form-label">Contact</label>
                <input
                  type="text"
                  class="form-control"
                  id="add-contact"
                  v-model="addForm.contact"
                />
              </div>
              <div class="mb-3">
                <label for="add-fname" class="form-label">First name</label>
                <input
                  type="text"
                  class="form-control"
                  id="add-fname"
                  v-model="addForm.firstname"
                />
              </div>
              <div class="mb-3">
                <label for="add-lname" class="form-label">Last name</label>
                <input
                  type="text"
                  class="form-control"
                  id="add-lname"
                  v-model="addForm.lastname"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref="CloseEdit"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { getDatabase, onValue, ref, set } from "@firebase/database";
const axios = require("axios");
export default {
  name: "Articles",
  props: ["dataProps"],
  data: function () {
    return {
      data: {},
      searchString: "",
      originalData: {},
      url: "https://ramenadmin.pythonanywhere.com",
      addForm: {
        email: null,
        password: null,
        contact: null,
        type: null,
        firstname: null,
        lastname: null,
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    textSlice(item) {
      let d = new Date(item);
      d = d.toString();
      return d.slice(0, 21);
    },
    deleteAccount(uid) {
      if (!confirm("Are you sure you want to delete account?")) {
        return;
      }
      console.log(uid);
      axios
        .delete(this.url + "?uid=" + uid)
        .then((response) => {
          console.log(response);
          if (response.data === "success") {
            this.showAlertSuccess("Deleted Account");
            delete this.data[uid]
            this.getData();

          } else {
            this.showAlertError(response.data);
          }
        })
        .catch((e) => {
          this.showAlertError(e);
        });
    },
    hasNull(target) {
      for (var member in target) {
        if (target[member] == null) return true;
      }
      return false;
    },
    validateUser() {
      let data = this.addForm;
      this.$refs.Close.click();
      if (this.hasNull(data)) {
        this.showAlertError("All fields are required!");
        return;
      }

      axios
        .post(this.url, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          if (response.data === "Success") {
            let addForm = {
              email: null,
              password: null,
              contact: null,
              type: null,
              firstname: null,
              lastname: null,
            };
            this.addForm = addForm;
            this.showAlertSuccess("Added account successfully");
            this.getData();
          } else {
            this.showAlertError(response.data);
          }
        })
        .catch((e) => alert(e));
    },
    getData() {
      this.$emit("setLoading", true);

      axios
        .get(this.url, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          let dataArr = response.data;
          console.log(dataArr);
          for (let item in dataArr) {
            // this.data.push(dataArr[item]);
            this.$set(this.data, dataArr[item].uid, {
              data: dataArr[item],
            });
            this.$set(this.originalData, dataArr[item].uid, {
              data: dataArr[item],
            });
          }
          // this.data = dataArr;
          // this.originalData = dataArr;
          this.$emit("setLoading", false);
        })
        .catch((e) => alert(e));
    },
    showAlertError(log) {
      this.$swal({
        icon: "error",
        title: "Error",
        text: log,
      });
    },
    showAlertSuccess(log) {
      this.$swal({
        icon: "success",
        title: "Success",
        text: log,
      });
    },
  },
};
</script>


<style scoped>
div#Articles {
  padding: 40px;
}
.article-header-container {
  display: flex;
  padding-bottom: 30px;
}
.text-left {
  text-align: left;
}
.articles-btn-container {
  display: flex;
  justify-content: left;
}
.input-group.mb-3 {
  margin-bottom: 0 !important;
}
.search-group-container {
  margin-left: auto;
}
#Articles {
  text-align: left;
}
</style>