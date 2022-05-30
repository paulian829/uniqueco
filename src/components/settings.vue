<template>
  <div id="article-new">
    <div class="article-heading">
      <div class="container overflow-hidden">
        <div class="header-container">
          <h1 style="margin-bottom: 30px">Account Settings</h1>
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
                <label for="exampleFormControlInput1" class="form-label">
                  Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="emailPassword"
                />
                <div v-show="newPasswordError" class="invalid-feedback error">
                  New password are not the same.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >New Email</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="newEmail"
                />
                <div v-show="newPasswordError" class="invalid-feedback error">
                  New password are not the same.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Repeat New Email</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="newEmailRepeat"
                />
                <div v-show="newPasswordError" class="invalid-feedback error">
                  New password are not the same.
                </div>
              </div>
              <button class="btn btn-primary" @click="changeEmail">
                Change Email
              </button>
            </div>
          </div>
        </div>
        <br />
        <div class="row gx-5">
          <div class="col col-form-container" v-show="type==='university'">
            <div class="p-3 border bg-light">
              <h4 class="margin-bottom:10px">Disable University</h4>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  v-model="visibility"
                  @change="changeVisibility"
                />
                <label class="form-check-label" for="flexSwitchCheckChecked"
                  >Toggle University visibility</label
                >
              </div>
            </div>
          </div>
          <div class="col col-form-container">
            <div class="p-3 border bg-light">
              <h4 class="margin-bottom:10px">Delete Account</h4>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  v-model="newEmailRepeat"
                />
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Are you sure you want to delete Account? this will permanently
                  delete all your records
                </label>
              </div>
              <br />
              <button class="btn btn-primary" @click="changeEmail">
                Delete Account
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
  updateEmail,
} from "firebase/auth";
import { passAuth } from "../db";

export default {
  name: "addArticle",
  props: ["dataProps",'dataAccount'],
  data: function () {
    return {
      data: "test",
      Password: "",
      currentPasswordError: false,
      newPassword: "",
      newPasswordRepeat: "",
      newPasswordError: false,
      emailPassword: "",
      newEmail: "",
      newEmailRepeat: "",
      visibility: false,
      type:'',
    };
  },
  mounted() {
    this.visibility = this.dataProps.publish;
    console.log(this.dataAccount)
    this.type = this.dataAccount.type
  },
  methods: {
    changeVisibility() {
      this.$emit("setLoading", true);
      console.log(this.dataProps);
      const db = getDatabase();
      let key = this.dataProps.Uid;
      const updates = {};
      updates["university/" + key + "/publish"] = this.visibility;
      update(ref(db), updates)
        .then(() => {
          this.showSuccess("Success in Change University Visibility");
          this.$emit("setLoading", false);
        })
        .catch((e) => {
          this.$emit("setLoading", false);

          this.showError("Failed Update", e);
        });
    },
    changePassword() {
      this.$emit("setLoading", true);

      if (this.newPassword.length === 0) {
        this.Password = "";
        this.newPassword = "";
        this.newPasswordRepeat = "";
        this.showError("Password not provided");
        this.$emit("setLoading", false);

        return;
      }

      if (this.newPassword !== this.newPasswordRepeat) {
        this.showError("Password not the same");
        this.Password = "";
        this.newPassword = "";
        this.newPasswordRepeat = "";
        this.$emit("setLoading", false);
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
              this.Password = "";
              this.newPassword = "";
              this.newPasswordRepeat = "";
              this.showSuccess("Success in Changing the Password");
              this.$emit("setLoading", false);
            })
            .catch((error) => {
              // An error ocurred
              this.Password = "";
              this.newPassword = "";
              this.newPasswordRepeat = "";
              // ...
              this.showError("Something went wrong!", error);
              this.$emit("setLoading", false);
            });
        })
        .catch((e) => {
          this.Password = "";
          this.newPassword = "";
          this.newPasswordRepeat = "";
          this.showError("Something went wrong!", e);
          this.$emit("setLoading", false);
        });
    },
    changeEmail() {
      this.$emit("setLoading", true);
      let newEmail = this.newEmail;
      let newEmailRepeat = this.newEmailRepeat;

      if (newEmail !== newEmailRepeat) {
        this.emailPassword = "";
        this.newEmail = "";
        this.newEmailRepeat = "";
        this.showError("Email are not the same");
        this.$emit("setLoading", false);
        return;
      }
      if (!this.validateEmail(newEmail)) {
        this.emailPassword = "";
        this.newEmail = "";
        this.newEmailRepeat = "";
        this.showError("Not Valid Email");
        this.$emit("setLoading", false);

        return;
      }

      const user = passAuth().currentUser;
      const credential = EmailAuthProvider.credential(
        user.email,
        this.emailPassword
      );
      reauthenticateWithCredential(user, credential)
        .then(() => {
          updateEmail(user, newEmail)
            .then(() => {
              this.emailPassword = "";
              this.newEmail = "";
              this.newEmailRepeat = "";
              this.showSuccess("Success in Changing the Email");
              this.$emit("setLoading", false);
            })
            .catch((error) => {
              this.emailPassword = "";
              this.newEmail = "";
              this.newEmailRepeat = "";
              this.showError("Something Went Wrong!", error);
              this.$emit("setLoading", false);
            });
        })
        .catch(() => {
          this.emailPassword = "";
          this.newEmail = "";
          this.newEmailRepeat = "";
          this.showError("Something Went Wrong!");
          this.$emit("setLoading", false);
        });
    },
    validateEmail(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    },
    showSuccess(log) {
      this.$swal({
        icon: "success",
        title: "Success",
        text: log,
      });
    },
    showError(log) {
      this.$swal({
        icon: "error",
        title: "Error",
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