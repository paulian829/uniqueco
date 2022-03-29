<!-- eslint-disable prettier/prettier -->

<template>
  <div id="my-profile">
    <img class="school-pic" src="../assets/school-pic.png" alt="" />
    <h1>My Profile</h1>
    <div class="profile-form-container">
        <div class="mb-3" style="margin-top:50px">
            <input class="form-control" type="file" id="formFile">
            <label for="formFile" class="form-label">School Logo</label>

        </div>
        <div class="mb-3" >
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="schoolName">
            <label for="exampleFormControlInput1" class="form-label">School Name</label>
        </div>
        <div class="mb-3">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="emailAddress">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
        </div>
        <div class="mb-3">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="location">
            <label for="exampleFormControlInput1" class="form-label">Location</label>
        </div>
        <button type="button" class="btn btn-primary">Save</button>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
// @ is an alias to /src

export default {
  name: "Profile",
  components: {},
  data() {
      return {
          schoolName:'Manuel S. Enverga University Foundation Lucena City',
          emailAddress:'mseuf.edu.ph',
          location:'Ibabang Dupay Lucena City',
          profilePic:""
      }
  }
};
</script>

<style scoped>
#my-profile {
  padding: 50px;
}
#my-profile h1{
    margin-top: 30px;
}

#my-profile .profile-form-container {
    max-width: 500px;
    margin: 0 auto;
}
#my-profile input{
    text-align: center;
    margin-bottom: 10px;
}
</style>
