<template>
  <div id="app">
    <div>
      <div id="nav">
        <div class="nav-container">
          <router-link to="/" style="padding: 0">
            <img alt="Vue logo" src="./assets/logo.svg" />
          </router-link>
          <router-link to="/">Home</router-link>
          <router-link to="/dashboard">Dashboard</router-link>

          <router-link to="/schools">Schools</router-link>
          <router-link to="/about">About</router-link>
          <div class="login-button-container">
            <router-link class="secondary" to="/login">Login</router-link>
            <router-link class="primary" to="/signup">Sign Up</router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap");

body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Montserrat", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

div#nav {
  background: #fcfcfc;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav .nav-container {
  /* max-width: 1480px; */
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 50px;
}

.container {
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 50px;
}
#nav .nav-container a {
  padding: 0 20px;
}
#nav .nav-container a {
  padding: 0 20px;
  font-weight: bold;
  color: black;
  text-decoration: none;
}

#nav .nav-container a:hover,
.router-link-active {
  color: #ff974c;
  transition-delay: 0.1s;
}

#nav .nav-container .login-button-container {
  margin-left: auto;
}

.primary,
.secondary {
  border: 1px solid #ff974c;
  margin: 0 15px;
  padding: 10px 30px !important;
  border-radius: 8px;
}
a.secondary {
  color: #ff974c !important;
}
a.secondary:hover {
  color: #ffffff;
  transition-delay: 0.1s;
}
.login-button-container .seconday:hover {
  color: white;
}
a.primary {
  color: white !important;
  background: #ff974c;
}

a.secondary:hover {
  color: white !important;
  background: #ff974c;
  transition-delay: 0.1s;
}
a.primary:hover {
  background: none;
  border: 1px solid #ff974c;
  color: #ff974c !important;
  transition-delay: 0.1s;
}
</style>
