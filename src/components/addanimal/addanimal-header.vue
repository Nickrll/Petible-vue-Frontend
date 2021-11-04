<template>
<div class="row header-info justify-content-sm-center">
    <div class="innerpos col-xl-1 col-lg-2 col-md-3 col-sm-12 offset-sm-0" style="top: 60px;"> <!-- IK WEET HET, DIT IS LELIJK -->
        <img src="@/assets/addanimal/pawlogo.png" />
    </div>
    <div class="info col-xl-9 col-lg-8 col-md-7 col-sm-12">
      <h1>Pawtestic!</h1>
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
.header-info {
  height: auto;
    padding-top: 8vh;
    background-color: $yellow;
    padding-bottom: -50px !important;
    .info {
      margin-left: 45px;
      margin-top: 10vh;
    }
  }

  img {
    width: 150px;
    height: 150px;
  }

  h1 {
    font-size: 3em !important;
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
</style>
