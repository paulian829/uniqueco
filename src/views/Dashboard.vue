<!-- eslint-disable prettier/prettier -->
<template>
  <div class="dashboard">
        <div class="row">
            <div class="col-3 full-width dashboard-nav">
                <img class="school-logo"  src="../assets/school-pic.png" alt="">
                <h2 style="margin-top:20px"><strong>Dashboard</strong></h2>
                <div class="nav-container">
                    <h5 v-on:click="selectScreen('Profile')"><strong>My Profile</strong></h5>
                    <h5 v-on:click="selectScreen('Details')"><strong>University Details</strong></h5>
                    <h5 v-on:click="selectScreen('test')"><strong>Articles</strong></h5>
                    <h5 v-on:click="selectScreen('test')"><strong>Account Settings</strong></h5>    
                </div>
            </div>
            <div class="col-9" v-if="active == 'Profile'"><Profile></Profile></div>
            <div class="col-9" style="background:#F5F5F5" v-if="active == 'Details'"><UniDetails></UniDetails></div>
        </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import Profile from '../components/profile.vue';
import UniDetails from '../components/uni-details.vue';

// @ is an alias to /src

export default {
  name: "Signup",
  components: {Profile, UniDetails},
  data() {
      return{
          active:'Profile'
      }
  },
  methods: {
      selectScreen(screen){
          if (screen === 'Messages'){
              this.$router.push('/messages')
          }
          this.active = screen
      }
  }
};
</script>

<style>

#app > div.dashboard > div > div.col-9{
    background: #f5f5f5;
}
.dasboard{
    min-height: 100vh;
    background: #F5F5F5;
}
.dashboard-nav {
    background: #A8C7DC;
    min-height: 100vh;
    padding: 50px;
}

.school-logo{
    max-width: 100px;
    max-height: 100px;
    width:100% ;
    height: 100%;
    border-radius: 999px;
    object-fit:cover;
}
.nav-container{
    margin-top: 30px;
}
.nav-container h5{
    padding: 15px 0;
    cursor: pointer;
}
.nav-container h5:hover{
    color: #ff974c;
}

</style>
