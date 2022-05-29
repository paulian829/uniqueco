<!-- eslint-disable prettier/prettier -->
<template>
  <div class="login">
    <div class="form-container">
      <h2 class="form-header">Login</h2>
      <!-- <div class="type-select-container">
        <button
          class="btn register-btn"
          :class="
            registrationType === 'student' ? 'btn-primary' : 'btn-secondary'
          "
          @click="registrationType = 'student'"
        >
          STUDENT
        </button>
        <button
          class="btn register-btn"
          :class="
            registrationType === 'university' ? 'btn-primary' : 'btn-secondary'
          "
          @click="registrationType = 'university'"
        >
          UNIVERSITY
        </button>
      </div> -->
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="Email"
          placeholder="Email"
          v-model="form.email"
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          v-model="form.password"
        />
      </div>
      <button
        type="button"
        class="btn btn-primary-final space"
        @click="login()"
      >
        Login
      </button>
      <button
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Forgot Password?
      </button>
    </div>
    <Loader v-if="loader"> </Loader>
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
            <h5 class="modal-title" id="exampleModalLabel">Forgot Password</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label
                for="exampleFormControlInput1"
                class="form-label"
                style="text-align: left; width: 100%"
                >Email address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                v-model="resetEmail"
              />
              <div id="emailHelp" class="form-text">
                We will send a reset password link on your email address
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              ref="closeModal"
            >
              Close
            </button>
            <button
              type="button"
              @click="resetPassword"
              class="btn btn-primary"
            >
              Send Reset Email
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
// import { passAuth } from "../db"
// import { signInWithEmailAndPassword } from firebase/auth;
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { passAuth } from "../db";
import Loader from "../components/loader.vue";

export default {
  name: "Login",
  components: { Loader },
  data() {
    return {
      loader: false,
      registrationType: "student",
      form: {
        email: "",
        password: "",
        resetEmail: "",
      },
    };
  },
  methods: {
    login() {
      this.loader = true;
      try {
        let email = this.form.email;
        let password = this.form.password;
        console.log(email, password);
        signInWithEmailAndPassword(passAuth(), email, password)
          .then((r) => {
            const user = r.user;
            console.log(user);
            this.$router.push("/dashboard");
            this.loader = false;
          })
          .catch(() => {
            this.showAlertError("Email or Password is wrong!");
            this.loader = false;
          });
      } catch (error) {
        this.showAlertError("Something went wrong!");
        this.loader = false;
      }
    },

    resetPassword() {
      let email = this.resetEmail;
      sendPasswordResetEmail(passAuth(), email)
        .then(() => {
          // Password reset email sent!
          // ..
          this.showSuccess(
            "Please check your email inbox for the reset password email"
          );
          this.$refs.closeModal.click();
        })
        .catch((error) => {
          this.showAlertError(error);
          // ..
        });
    },
    showSuccess(log) {
      this.$swal({
        icon: "success",
        title: "Succes",
        text: log,
      });
    },
    showAlertError(log) {
      this.$swal({
        icon: "error",
        title: "Failed to Login",
        text: log,
      });
    },
  },
};
</script>

<style>
.login {
  background: #e4eef4;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
}

.form-container {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  padding: 30px;
  border-radius: 7px;
  background: #f5f5f5;
  height: auto;
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important;
}

.btn-primary-final:hover {
  background-color: #f7ab76;
  color: white;
}

.btn-primary-final {
  color: #fff;
  background-color: #ff974c;
  border-color: #ff974c;
  width: 100%;
}
.space {
  margin-bottom: 20px;
}
.form-text {
  text-align: left;
}
.register-btn {
  width: 50%;
  border-radius: 0;
}
.type-select-container {
  margin-bottom: 20px;
}
</style>
