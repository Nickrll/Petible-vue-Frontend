<template>
  <div class="header col-md-12">
    <div class="row header-info">
      <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4">
        <img src="@/assets/profile-pic.png" />
      </div>
      <div class="info col-xl-8 col-lg-9 col-md-8 col-sm-12">
        <h1>{{ name }}</h1>
        <h2><i class="fas fa-map-marker-alt"></i> {{ place }}</h2>
      </div>
      <div class="social-media col-xl-2 col-sm-4">
        <i class="fab fa-facebook-f" v-if="facebook != ''"></i>
        <i class="fab fa-twitter" v-if="twitter != ''"></i>
        <i class="fab fa-instagram" v-if="instagram != ''"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    name: String,
    place: String,
    facebook: String,
    instagram: String,
    twitter: String,
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/colors";

.header {
  background-color: $peach;
  height: 22vh;
  border-radius: 20px;
  margin-bottom: 50px;

  .header-info {
    margin-left: 2vw;
    margin-top: 13vh;

    .info {
      margin-top: 10vh;
    }

    .social-media {
      .fab {
        margin-top: 11vh;
        font-size: 2em;
        margin-right: 20px;
        color: $blue;
      }
    }
  }

  img {
    width: 150px;
    height: 100%;
    border-radius: 26px;
    -webkit-box-shadow: 2px 3px 7px 1px rgba(0, 0, 0, 0.2); /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 2px 3px 7px 1px rgba(0, 0, 0, 0.2); /* Firefox 3.5 - 3.6 */
    box-shadow: 2px 3px 7px 1px rgba(0, 0, 0, 0.2); /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
  }

  h1 {
    font-size: 1.6em !important;
    font-weight: bold !important;
    color: $text !important;
  }

  h2 {
    font-size: 1.4em !important;
    font-weight: normal !important;
    color: $text-light !important;

    .fas {
      color: $primary;
    }
  }
}

@media screen and (max-width: 767px) {
  .header {
    border-radius: 0px 0px 50px 50px !important;
    height: 50vh !important;
    margin: auto !important;

    .header-info {
      margin: auto;
      text-align: center;
      margin-top: 8vh;

      .info {
        margin-top: 5vh;
      }

      .social-media {
        .fab {
          margin-top: 2vh;
          font-size: 1.2em;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
