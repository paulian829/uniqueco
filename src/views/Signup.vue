<!-- eslint-disable prettier/prettier -->
<template>
  <div class="login">
      <div class="form-container">
        <h2 class="form-header">Signup</h2>
        <p class="align-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam amet dignissimos.</p>
        <div class="mb-3">
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="University name">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Email">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Firstname">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Lastname">
        </div>
        <div class="mb-3">
            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password">
        </div>
        <div class="mb-3">
            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Repeat Password">
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault" style="float:left">
                <router-link class="terms" to="/terms-and-conditions">I accept the Terms of Service and Privacy Policy</router-link>
            </label>
        </div>
        <br>
        <button type="button" class="btn btn-primary-final space">Sign up</button>

      </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
// @ is an alias to /src

export default {
  name: "Signup",
  components: {},
};
</script>

<style>
.terms {
    color: blue;
    font-size: 14px;
}
.login {
    background: #E4EEF4;
    height: 91vh;
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

.btn-primary-final{
    color: #fff;
    background-color: #ff974c;
    width: 100%;
}

.btn-primary-final:hover{
    background-color: #f7ab76;
    color: white;
}
.space{
    margin-bottom: 20px;
}

</style>
