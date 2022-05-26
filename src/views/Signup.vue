<!-- eslint-disable prettier/prettier -->
<template>
  <div class="login">
    <div class="form-container">
      <h2 class="form-header">Signup</h2>
      <div class="type-select-container">
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
      </div>
      <div
        class="form-type-container-uni"
        v-if="registrationType === 'student'"
      >
        <h5>Student Registration</h5>
        <p class="align-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam
          amet dignissimos.
        </p>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="email"
            placeholder="Email"
            v-model="form.email"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder="Firstname"
            v-model="form.firstName"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder="Lastname"
            v-model="form.lastName"
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
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Repeat Password"
            v-model="form.repeatPassword"
          />
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            v-model="terms"
          />
          <label
            class="form-check-label"
            for="flexCheckDefault"
            style="float: left"
          >
            <router-link class="terms" to="/terms-and-conditions"
              >I accept the Terms of Service and Privacy Policy</router-link
            >
          </label>
        </div>
        <br />
        <button
          type="button"
          @click="createAccount()"
          class="btn btn-primary-final space"
        >
          Sign up
        </button>
      </div>
      <div
        class="form-type-container-uni"
        v-if="registrationType === 'university'"
      >
        <h5>University Registration</h5>
        <p class="align-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam
          amet dignissimos.
        </p>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="universityName"
            placeholder="University name"
            v-model="form.universityName"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="email"
            placeholder="Email"
            v-model="form.email"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder="Firstname"
            v-model="form.firstName"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder="Lastname"
            v-model="form.lastName"
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
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Repeat Password"
            v-model="form.repeatPassword"
          />
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            v-model="terms"
          />
          <label
            class="form-check-label"
            for="flexCheckDefault"
            style="float: left"
          >
            <router-link class="terms" to="/terms-and-conditions"
              >I accept the Terms of Service and Privacy Policy</router-link
            >
          </label>
        </div>
        <br />
        <button
          type="button"
          @click="createAccount()"
          class="btn btn-primary-final space"
        >
          Sign up
        </button>
      </div>
    </div>
    <Loader v-if="isLoading"></Loader>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
// @ is an alias to /src

import { passAuth } from "../db";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
// import { signOut } from "firebase/auth";

import { getDatabase, ref, set } from "firebase/database";
import Loader from "../components//loader.vue";

export default {
  name: "Signup",
  components: { Loader },
  data() {
    return {
      test: "test",
      isLoading: false,
      registrationType: "university",

      form: {
        email: "",
        password: "",
        repeatPassword: "",
        universityName: "",
        firstName: "",
        lastName: "",
      },
      terms: false,
    };
  },
  methods: {
    createAccount() {
      this.isLoading = true;
      let form = this.form;
      if (this.checkIfEmpty(form)) {
        this.showAlertError("All fields are required!");
        this.isLoading = false;
        return;
      }

      if (form.password !== form.repeatPassword) {
        this.showAlertError("Password are not the same!");
        this.isLoading = false;

        return;
      }
      if (this.terms === false) {
        this.showAlertError("Accept the terms and conditions");
        this.isLoading = false;

        return;
      }

      createUserWithEmailAndPassword(passAuth(), form.email, form.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          this.saveData(user, form);
          this.showAlertSuccess();
          this.logout();
          this.isLoading = false;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          this.showAlertError(errorMessage);
          this.isLoading = false;
        });
    },
    showAlertError(log) {
      this.$swal({
        icon: "error",
        title: "Failed to Register Account",
        text: log,
      });
    },
    saveData(user, form) {
      if (this.registrationType === "university") {
        const db = getDatabase();
        set(ref(db, "universities/" + user.uid), {
          publish: true,
          Uid: user.uid,
          Name: form.universityName,
          Email: form.email,
          CreatedBY: {
            FirstName: form.firstName,
            LastName: form.lastName,
          },
          DateCreated: Date.now(),
          Address: {
            Lot: " ",
          },
          SchoolDetails: {
            AboutSchool: " ",
          },
          ProgramsOffered: {
            randomID1: {
              Field: " ",
            },
          },
          SchoolPerformance: {
            Ranking: " ",
          },
          Requirements: {
            Date: " ",
          },
        });
      } else {
        const db = getDatabase();
        set(ref(db, "students/" + user.uid), {
          Uid: user.uid,
          Email: form.email,
          CreatedBY: {
            FirstName: form.firstName,
            LastName: form.lastName,
          },
          DateCreated: Date.now(),
          
        });
      }
    },
    showAlertSuccess() {
      this.$swal({
        icon: "success",
        title: "Success",
        text: "Success Creating your account!",
      });
    },
    checkIfEmpty(form) {
      if (this.registrationType === "university") {
        console.log(form.universityName.length);
        if (form.universityName.length === 0) {
          return true;
        }
      }
      if (
        form.email.length === 0 ||
        form.firstName.length === 0 ||
        form.lastName.length === 0 ||
        form.password.length === 0 ||
        form.repeatPassword.length === 0
      ) {
        return true;
      }
      console.log("return false");
      return false;
    },
    logout() {
      signOut(passAuth())
        .then(() => {
          this.$router.push("/login");
          console.log("LOGGED OUT");
        })
        .catch((error) => {
          console.log("ERROR", error);
        });
    },
  },
};
</script>

<style>
.terms {
  color: blue;
  font-size: 14px;
}
.login {
  background: #e4eef4;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
  padding-top: 150px;
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

.btn-primary-final {
  color: #fff;
  background-color: #ff974c;
  width: 100%;
}

.btn-primary-final:hover {
  background-color: #f7ab76;
  color: white;
}
.space {
  margin-bottom: 20px;
}
.register-btn {
  width: 50%;
  border-radius: 0;
}
.type-select-container {
  margin-bottom: 20px;
}
</style>
