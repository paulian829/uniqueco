<!-- eslint-disable prettier/prettier -->
<template>
  <div class="login">
      <div class="form-container">
        <h2 class="form-header">Login</h2>
        <div class="mb-3">
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Email">
        </div>
        <div class="mb-3">
            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password">

        </div>
        <button type="button" class="btn btn-primary-final space">Login</button>
        <router-link to="/about" >Forgot Password?</router-link>


      </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
// @ is an alias to /src

export default {
  name: "Login",
  components: {},
};
</script>

<style>
.login {
    background: #E4EEF4;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-container {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
    border-radius: 7px;
    background: #F5F5F5;
    height: auto;
    box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important
}

.btn-primary-final:hover{
    background-color: #f7ab76;
    color: white;
}


.btn-primary-final{
    color: #fff;
    background-color: #ff974c;
    border-color: #ff974c;
    width: 100%;
}
.space{
    margin-bottom: 20px;
}

</style>
