<template>
  <div class="login row align-items-center">
    <div class="header-xs col-sm-12 d-block d-sm-none">
      <h1>Petible</h1>
      <div class="subtitle-xs">Your new friend is waiting for you!</div>
    </div>
    <LoginForm />
    <Footer />
  </div>
</template>
<script>
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";

export default {
  name: "Login",
  components: {
    LoginForm,
    Footer
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/colors";

.login {
  background-image: url("../assets/login-bg.jpg");
  background-position: right 0 top -200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

@media screen and (max-width: 575px) {
  .login {
    background-position: right -150px top -300px;
    background-size: cover;

    h1 {
      color: white !important;
      font-size: 3em !important;
      font-weight: 700 !important;
      text-align: center;
    }

    .subtitle-xs {
      color: #e9e9e9;
      text-align: center;
      font-size: 1.3em;
      width: 60%;
      margin: auto;
    }

    .login-block {
      position: absolute;
      bottom: 0;
      margin-top: 0;
      padding-top: 2vh;
      height: 50vh;
      border-radius: 0;
      border-top-left-radius: 40px;
      border-top-right-radius: 40px;

      input {
        width: 100%;
      }
    }
  }
}
</style>