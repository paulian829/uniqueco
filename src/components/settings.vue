<template>
  <div id="article-new">
    <div class="article-heading">
      <div class="container overflow-hidden">
        <div class="header-container">
          <h1>Account Settings</h1>
        </div>
        <div class="row gx-5">
          <div class="col col-form-container">
            <div class="p-3 border bg-light">
              <h4 class="margin-bottom:10px">Change Password</h4>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Current Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="Password"
                />
                <div
                  v-show="currentPasswordError"
                  class="invalid-feedback error"
                >
                  Password not Correct.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >New Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="newPassword"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Repeat New Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="newPasswordRepeat"
                />
                <div v-show="newPasswordError" class="invalid-feedback error">
                  New password are not the same.
                </div>
              </div>
              <button class="btn btn-primary" @click="changePassword">
                Change Password
              </button>
            </div>
          </div>
          <div class="col col-form-container">
            <div class="p-3 border bg-light">
              <h4 class="margin-bottom:10px">Change Account Email</h4>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  > Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="Password"
                />
                <div v-show="newPasswordError" class="invalid-feedback error">
                  New password are not the same.
                </div>
              </div>
                            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Repeat New Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="newPasswordRepeat"
                />
                <div v-show="newPasswordError" class="invalid-feedback error">
                  New password are not the same.
                </div>
              </div>
                            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Repeat New Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="newPasswordRepeat"
                />
                <div v-show="newPasswordError" class="invalid-feedback error">
                  New password are not the same.
                </div>
              </div>
              <button class="btn btn-primary" @click="changePassword">
                Change Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { getDatabase, ref, set } from "firebase/database";
// import {
//   uploadBytes,
//   getStorage,
//   ref as StorageRef,
//   getDownloadURL,
//   // getDownloadURL,
// } from "@firebase/storage";
import {
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
} from "firebase/auth";
import { passAuth } from "../db";

export default {
  name: "addArticle",
  props: ["dataProps"],
  data: function () {
    return {
      data: "test",
      Password: "",
      currentPasswordError: false,
      newPassword: "",
      newPasswordRepeat: "",
      newPasswordError: false,
    };
  },
  methods: {
    changePassword() {
      if (this.newPassword.length === 0) {
        return;
      }

      if (this.newPassword !== this.newPasswordRepeat) {
        this.newPasswordError = true;
        return;
      }

      const user = passAuth().currentUser;
      const credential = EmailAuthProvider.credential(
        user.email,
        this.Password
      );
      reauthenticateWithCredential(user, credential)
        .then(() => {
          updatePassword(user, this.newPassword)
            .then(() => {
              this.newPasswordError = false;
              this.currentPasswordError = false;
              console.log("Update Successfull");
              this.showSuccess("Success in Changing the Password");
            })
            .catch((error) => {
              // An error ocurred
              // ...
              console.log(error);
            });
        })
        .catch(() => {
          this.currentPasswordError = true;
        });
    },
    showSuccess(log) {
      this.$swal({
        icon: "success",
        title: "Succes",
        text: log,
      });
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