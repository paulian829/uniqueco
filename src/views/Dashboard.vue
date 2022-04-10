<!-- eslint-disable prettier/prettier -->
<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-3 full-width dashboard-nav">
        <img class="school-logo" :src="logoUrl" v-if="showLogo" alt="" />
        <h2 style="margin-top: 20px"><strong>Dashboard</strong></h2>
        <div class="nav-container">
          <h5 v-on:click="selectScreen('Profile')">
            <strong>My Profile</strong>
          </h5>
          <h5 v-on:click="selectScreen('Details')">
            <strong>University Details</strong>
          </h5>
          <h5 v-on:click="selectScreen('test')"><strong>Articles</strong></h5>
          <h5 v-on:click="selectScreen('test')">
            <strong>Account Settings</strong>
          </h5>
        </div>
      </div>
      <div class="col-9" v-if="active == 'Profile'">
        <Profile :dataProp="data" @setLoading="setLoading" @resetLogo="resetLogo"></Profile>
      </div>
      <div class="col-9" style="background: #f5f5f5" v-if="active == 'Details'">
        <UniDetails :dataProps="data" @reloadPage='reloadPage'></UniDetails>
      </div>
    </div>
    <Loader v-if="isLoading"></Loader>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import { onAuthStateChanged } from "firebase/auth";
import { passAuth } from "../db";

import Profile from "../components/profile.vue";
import UniDetails from "../components/uni-details.vue";

import { getDatabase, ref, onValue } from "firebase/database";
import {
  getDownloadURL,
  getStorage,
  ref as storageRef,
} from "firebase/storage";
import Loader from "../components/loader.vue";

// @ is an alias to /src

export default {
  name: "dashboard",
  components: { Profile, UniDetails, Loader },
  data() {
    return {
      isLoading: false,
      active: "Profile",
      data: "",
      logoUrl: "",
      showLogo: false,
      uid:'',
      random:''
    };
  },
  mounted() {
    this.checkLoggedIn();
  },
  methods: {
    selectScreen(screen) {
      if (screen === "Messages") {
        this.$router.push("/messages");
      }
      this.active = screen;
    },
    checkLoggedIn() {
      const auth = passAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log(uid);
          this.uid = uid
          this.getUserData(uid);
          // ...
        } else {
          // User is signed out
          // ...
          this.loggedIn = false;
          this.$router.push("/");
        }
      });
    },
    getUserData(uid) {
      try {
        this.isLoading = true;
        const db = getDatabase();
        const query = ref(db, "universities/" + uid);
        const storage = getStorage();
        onValue(query, (snapshot) => {
          const data = snapshot.val();
          console.log(data);
          this.data = data;

          try {
            const logoRef = storageRef(storage, "logo/" + uid + ".png");
            getDownloadURL(logoRef)
              .then((url) => {
                this.showLogo = true;
                this.logoUrl = url;
                this.isLoading = false;
              })
              .catch((e) => {
                console.log(e);
                this.showLogo = false;
                this.logoUrl = "";
                this.isLoading = false;
              });
          } catch(e){
            console.log("error",e);
            this.isLoading = false;
          }
        })
      } catch(e) {
        console.log("error", e);
        this.isLoading = false;
      }
    },
    setLoading(status) {
      this.isLoading = status;
    },
    resetLogo() {
        const storage = getStorage();

      const logoRef = storageRef(storage, "logo/" + this.uid + ".png");
      getDownloadURL(logoRef).then((url)=>{
        this.showLogo = true;
        this.logoUrl = url;
        this.isLoading = false
      }).catch((e) => {
        console.log(e)
        this.isLoading = false
      } )
    },
    reloadPage(){
      console.log('test')
      this.checkLoggedIn()
    }
  },
};
</script>

<style>
#app > div.dashboard > div > div.col-9 {
  background: #f5f5f5;
}
.dasboard {
  min-height: 100vh;
  background: #f5f5f5;
}
.dashboard-nav {
  background: #a8c7dc;
  min-height: 100vh;
  padding: 50px;
}

.school-logo {
  max-width: 100px;
  max-height: 100px;
  width: 100%;
  height: 100%;
  border-radius: 999px;
  object-fit: cover;
}
.nav-container {
  margin-top: 30px;
}
.nav-container h5 {
  padding: 15px 0;
  cursor: pointer;
}
.nav-container h5:hover {
  color: #ff974c;
}
</style>
