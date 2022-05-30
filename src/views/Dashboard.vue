<!-- eslint-disable prettier/prettier -->
<template>
  <div class="dashboard">
    <div class="row">
      <div
        class="col-3 full-width dashboard-nav"
        v-if="accountType == 'university'"
      >
        <h2 style="margin-top: 20px"><strong>University Dashboard</strong></h2>
        <div class="nav-container">
          <h5 v-on:click="selectScreen('Profile')">
            <strong>My Profile</strong>
          </h5>
          <h5 v-on:click="selectScreen('Details')">
            <strong>University Details</strong>
          </h5>
          <h5 v-on:click="selectScreen('Articles')">
            <strong>Articles</strong>
          </h5>
          <h5 v-on:click="selectScreen('Settings')">
            <strong>Account Settings</strong>
          </h5>
        </div>
      </div>
      <div
        class="col-3 full-width dashboard-nav"
        v-else-if="accountType == 'student'"
      >
        <h2 style="margin-top: 20px"><strong>Student Dashboard</strong></h2>
        <div class="nav-container">
          <h5 v-on:click="selectScreen('Profile')">
            <strong>My Profile</strong>
          </h5>
          <h5 v-on:click="selectScreen('Favorites')">
            <strong>Favorites</strong>
          </h5>
          <h5 v-on:click="selectScreen('Settings')">
            <strong>Account Settings</strong>
          </h5>
        </div>
      </div>
      <div
        class="col-3 full-width dashboard-nav"
        v-else-if="accountType === 'admin'"
      >
        <h2 style="margin-top: 20px"><strong>Admin Dashboard</strong></h2>
        <div class="nav-container">
          <h5 v-on:click="selectScreen('AdminUserList')">
            <strong>User List</strong>
          </h5>
          <h5 v-on:click="selectScreen('AdminUniList')">
            <strong>University List</strong>
          </h5>
          <h5 v-on:click="selectScreen('AdminHelpList')">
            <strong>Help Items</strong>
          </h5>
        </div>
      </div>
      <div class="col-9 overflow-scroll" v-if="active == 'Profile'">
        <Profile
          :dataProps="accountData"
          @setLoading="setLoading"
          @resetLogo="resetLogo"
        ></Profile>
      </div>
      <div
        class="col-9 overflow-scroll"
        style="background: #f5f5f5; height: 100vh"
        v-if="active == 'Details'"
      >
        <UniDetails
          :dataProps="dataUni"
          @reloadPage="reloadPage"
          @setLoading="setLoading"
        ></UniDetails>
      </div>
      <div
        class="col-9 overflow-scroll"
        style="background: #f5f5f5; height: 100vh"
        v-if="active == 'Articles'"
      >
        <Articles
          :dataProps="dataUni"
          @setLoading="setLoading"
          @setPage="setPage"
          @setEditArticle="selectEditArticle"
        ></Articles>
      </div>
      <div
        class="col-9 overflow-scroll"
        style="background: #f5f5f5; height: 100vh"
        v-if="active == 'NewArticle'"
      >
        <NewArticle
          :dataProps="dataUni"
          @setLoading="setLoading"
          @setPage="setPage"
        ></NewArticle>
      </div>
      <div
        class="col-9 overflow-scroll"
        style="background: #f5f5f5; height: 100vh"
        v-if="active == 'Favorites'"
      >
        <Favorites
          :dataProps="accountData"
          @setLoading="setLoading"
          @setPage="setPage"
        ></Favorites>
      </div>
      <div
        class="col-9 overflow-scroll"
        style="background: #f5f5f5; height: 100vh"
        v-if="active == 'EditArticle'"
      >
        <EditArticle
          :dataProps="dataUni"
          @setLoading="setLoading"
          @setPage="setPage"
          :selectedArticle="selectArticle"
        ></EditArticle>
      </div>
      <div
        class="col-9 overflow-scroll"
        style="background: #f5f5f5; height: 100vh"
        v-if="active == 'AdminUserList'"
      >
        <AdminUserList></AdminUserList>
      </div>
      <div
        class="col-9 overflow-scroll"
        style="background: #f5f5f5; height: 100vh"
        v-if="active == 'AdminUniList'"
      >
        <AdminUniList></AdminUniList>
      </div>
      <div
        class="col-9 overflow-scroll"
        style="background: #f5f5f5; height: 100vh"
        v-if="active == 'AdminHelpList'"
      >
        <AdminHelpList></AdminHelpList>
      </div>
      <div
        class="col-9 overflow-scroll"
        style="background: #f5f5f5; height: 100vh"
        v-if="active == 'Settings'"
      >
        <Settings
          :dataProps="dataUni"
          :dataAccount="accountData"
          @setLoading="setLoading"
        ></Settings>
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
import Articles from "../components/articles.vue";
import AdminUserList from "../components/admin-user-list.vue";
import AdminUniList from "../components/admin-uni-list.vue";
import AdminHelpList from "../components/admin-help-items.vue";

import { getDatabase, ref, onValue } from "firebase/database";
import {
  getDownloadURL,
  getStorage,
  ref as storageRef,
} from "firebase/storage";
import Loader from "../components/loader.vue";
import NewArticle from "../components/new-article.vue";
import EditArticle from "../components/edit-article.vue";
import Settings from "../components/settings.vue";
import Favorites from "../components/favorites.vue";

// @ is an alias to /src

export default {
  name: "dashboard",
  components: {
    Profile,
    UniDetails,
    Loader,
    Articles,
    NewArticle,
    EditArticle,
    AdminUserList,
    AdminUniList,
    AdminHelpList,
    Settings,
    Favorites,
},
  data() {
    return {
      selectArticle: "test",
      isLoading: false,
      active: "Profile",
      data: "",
      logoUrl: "",
      showLogo: false,
      uid: "",
      random: "",
      accountData: "",
      accountType: "",
      dataUni: {},
    };
  },
  mounted() {
    this.checkLoggedIn();
  },
  methods: {
    selectEditArticle(articleID) {
      this.selectArticle = articleID;
      this.active = "EditArticle";
    },
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
          this.uid = uid;
          // this.getUserData(uid);
          this.getAccountData(uid);
        } else {
          // User is signed out
          // ...
          this.loggedIn = false;
          this.$router.push("/");
        }
      });
    },
    getAccountData(uid) {
      const db = getDatabase();
      const query = ref(db, "Account/" + uid);
      onValue(query, (snapshot) => {
        const accountData = snapshot.val();
        this.accountData = accountData;
        this.accountType = accountData.type;
        console.log(accountData);
        if (accountData.type === "university") {
          this.getUserData(accountData.Uid);
        }
      });
    },

    getUserData(uid) {
      try {
        this.isLoading = true;
        const db = getDatabase();
        const query = ref(db, "university/" + uid);
        onValue(query, (snapshot) => {
          const data = snapshot.val();
          console.log(data);
          this.dataUni = data;
          this.isLoading = false;
        });
      } catch (e) {
        console.log("error", e);
        this.isLoading = false;
      }
    },
    setLoading(status) {
      this.isLoading = status;
    },
    setPage(component) {
      this.active = component;
    },
    checkIfAdmin(data) {
      if (data.Admin === true) {
        this.active = "AdminUserList";
      }
    },
    resetLogo() {
      const storage = getStorage();

      const logoRef = storageRef(storage, "logo/" + this.uid + ".png");
      getDownloadURL(logoRef)
        .then((url) => {
          this.showLogo = true;
          this.logoUrl = url;
          this.isLoading = false;
        })
        .catch((e) => {
          console.log(e);
          this.isLoading = false;
        });
    },
    reloadPage() {
      console.log("test");
      this.checkLoggedIn();
    },
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
