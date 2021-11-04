<template>
  <div class="header col-md-12 col-sm-12">
    <div class="row header-info justify-content-sm-center">
      <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4">
        <img src="@/assets/profile-pic.png" />
      </div>
      <div class="info col-xl-10 col-lg-9 col-md-8 col-sm-12">
        <h1>{{ name }}</h1>
        <h2><i class="fas fa-map-marker-alt"></i> {{ place }}</h2>
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
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/colors";

.header {
  background-color: $peach;
  height: 22vh;
  border-radius: 20px;
  margin-bottom: 10vh;

  .header-info {
    margin-left: 2vw;
    margin-top: 13vh;

    .info {
      margin-top: 10vh;
    }
  }

  img {
    width: 150px;
    height: 100%;
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
    height: 45vh !important;
    margin: auto !important;

    .header-info {
      margin: auto;
      text-align: center;
      margin-top: 8vh;

      .info {
        margin-top: 5vh;
      }
    }
  }
}
</style>
