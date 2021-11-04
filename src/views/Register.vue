<template>
  <div class="register row align-items-center">
    <div class="register-header header-xs col-sm-12 d-block d-sm-none">
      <h1>Petible</h1>
      <div class="subtitle-xs">Let's find your new pawl together!</div>
    </div>
    <RegisterForm />
    <Footer />
  </div>
</template>
<script>
import RegisterForm from "../components/RegisterForm";
import Footer from "../components/Footer";

export default {
  name: "Register",
  components: {
    RegisterForm,
    Footer
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/colors";

.register {
  background-image: url("../assets/login-bg.jpg");
  background-position: right 0 top -200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

@media screen and (max-width: 575px) {
  .register {
    background-position: right -150px top -300px;
    background-size: cover;

    .register-header{
      top: -8vh !important;
    }

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

    .register-block {
      position: absolute;
      bottom: 0;
      margin-top: 0;
      padding-top: 2vh;
      height: 70vh;
      border-radius: 0;
      border-top-left-radius: 40px;
      border-top-right-radius: 40px;
    }
  }
}
</style>
