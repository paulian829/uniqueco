<template>
  <div id="article-new">
    <div class="article-heading">
      <div class="container overflow-hidden">
        <div class="header-container">
          <h1 style="margin-bottom: 30px">User Profile</h1>
        </div>
        <div class="row gx-5">
          <div class="col col-form-container">
            <div class="p-3 border bg-light">
              <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  v-model="dataProps.email"
                  disabled
                />
              </div>
              <div class="mb-3">
                <label for="first-name" class="form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="first-name"
                  v-model="dataProps.firstName"
                />
              </div>
              <div class="mb-3">
                <label for="last-name" class="form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="last-name"
                  v-model="dataProps.lastName"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Contact Number</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="dataProps.contactNumber"
                />
              </div>
              <p>
                <strong style="padding-right: 10px">Date Created:</strong
                >{{ convertDate(dataProps.dateCreated) }}
              </p>
              <p>
                <strong style="padding-right: 10px">Account Type:</strong
                >{{ dataProps.type }}
              </p>

              <button class="btn btn-primary" @click="updateProfile()">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, update } from "firebase/database";

// import {
//   reauthenticateWithCredential,
//   EmailAuthProvider,
//   updatePassword,
//   updateEmail,
// } from "firebase/auth";
// import { passAuth } from "../db";

export default {
  name: "addArticle",
  props: ["dataProps"],
  data: function () {
    return {};
  },
  mounted() {
    console.log(this.dataProps);
  },
  methods: {
    convertDate(item) {
      var d = new Date(item);
      return d.toDateString();
    },
    updateProfile() {
      let data = this.dataProps;
      this.$emit("setLoading", true);

      const db = getDatabase();
      const updates = {};
      updates["Account/" + data.Uid] = data;
      update(ref(db), updates).then(() => {
        this.$emit("setLoading", false);
        this.$swal({
          icon: "success",
          title: "Success",
          text:'Profile Updated'
        });
      }).catch((e) => {
                this.$swal({
          icon: "Error",
          title: "Error",
          text: e,
        });
      })
    },
  },
};
</script>
<style scoped>
#article-new {
  padding: 50px;
}
.col-form-container {
  text-align: left;
}
.error {
  display: block;
}
</style>