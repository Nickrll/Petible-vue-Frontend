<template>
  <div class="row home">
      <div class="col-12 col-sm-12 col-md-12 col-lg-8 wave"></div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-4 home-content">
        <div class="title">Petible</div>
        <div class="subtitle">Find out with which animal you are com<span style="font-weight: bold;">pet</span>ible!</div>
        <div class="content">
            By recreating popular dating apps, we aspire to find and match you with one of our lovely pals waiting to find their forever home.
            <br/><br/>
            We strife to make sure that your lifestyle fits the animals needs by comparing the two together!
            <br/><br/>

            Are you looking for an animal to adopt that fits your lifestyle, waiting to find your new best friend or are you an inspired shelter wanting to create profiles for your animals?
            <br/><br/>
        </div>
          <div class="router-buttons">
              <hr/>
              <router-link id="register-btn" to="/register" tag="button" class="btn btn-orange">Sign up here, it's free!</router-link>
              <br/>
              <br/>
              <router-link id="login-btn" to="/login" tag="button" class="btn btn-orange">Got an account? Sign in here</router-link>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/colors";
.home{
  background-image: url("../assets/homepage.png");
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  .home-content{
    background-color: white;
    padding: 0px;
    z-index: 1;
  }
  .title {
    font-size: 87px;
    font-family: Segoe Script;
    color: $blue;
    margin-top: 15%;
    margin-left: -100px;
  }
  .subtitle {
    font-size: 40px;
    color: $blue;
    margin-left: -100px;
  }
  .content {
    font-size: 20px;
    width: 35vw;
    margin-left: -100px;
      text-align: justify;
  }



    .btn-orange{
        background-color: $primary;
        transition: background-color ease-in-out 500ms;
        color: white;
        font-size: 0.9em;
        padding: 10px 15px;
        border-radius: 15px;
        border: none;

        &:hover{
            background-color: $primary-dark;
        }
    }

    .router-buttons{
        font-size: 14px;
        width: 35vw;
        margin-left: -100px;
        text-align: center;
    }

  @media screen and (max-width: 992px) {
    .wave{
      height: 85%;
    }
    .home-content{
      height: auto;
      bottom: 0px;
      width: 100vh;
    }
    .title {
    font-size: 60px;
    font-family: Segoe Script;
    color: $blue;
    margin-top: 4%;
    margin-left: 10%;
    margin-right: 10%;
  }
  .subtitle {
    font-size: 25px;
    color: $blue;
    margin-top: 5%;
    margin-left: 10%;
    margin-right: 10%;
  }
  .content,  .router-buttons {
      width: 80vw;
    font-size: 18px;
    margin-left: 10%;
    margin-right: 10%;
      margin-bottom: 10%;
  }
  }
  @media screen and (min-width: 992px) {
    .wave{
      background-image: url("../assets/wave.svg");
      transform: scaleX(-1);
      background-position: right;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: 0;
    }
  }
}
</style>
