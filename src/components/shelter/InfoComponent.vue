<template>
  <div class="infocontent">
    <h2>Info</h2>
    <div class="block block-mail row">
      <div class="text-el col-xl-7 col-lg-5 col-md-6 col-sm-6">
        <h2>Email</h2>
        {{ email }}
      </div>
      <img
        class="image-el image-el-mail col-xl-4 col-lg-5 col-md-4 col-sm-3"
        src="@/assets/profile/mail.svg"
      />
    </div>
    <div class="block block-phone row">
      <div class="text-el col-xl-7 col-lg-5 col-md-6 col-sm-6">
        <h2>Phone</h2>
        {{ phone }}
      </div>
      <img
        class="image-el image-el-phone col-xl-4 col-lg-5 col-md-4 col-sm-3"
        src="@/assets/profile/phone.svg"
      />
    </div>
    <div class="block block-site row">
      <div class="text-el col-xl-7 col-lg-5 col-md-6 col-sm-6">
        <h2>Website</h2>
        <a :href="website">{{ website }} </a>
      </div>
      <img
        class="image-el image-el-site col-xl-4 col-lg-5 col-md-4 col-sm-3"
        src="@/assets/profile/website.svg"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Info",
  props: {
    email: String,
    phone: String,
    website: String,
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/colors";

.infocontent {
  margin-top: 50px;
  .block {
    height: 10vh;
    width: 90%;
    border-radius: 20px;
    margin: 15px 0px 15px 0px;
    overflow: hidden;

    img {
      margin-left: auto;
      margin-right: auto;
      width: auto;
      height: 7vh;
    }
  }
  .block-mail {
    background-color: $pastel-yellow;
  }
  .block-phone {
    background-color: $pastel-blue;
  }
  .block-site {
    background-color: $pastel-orange;
  }
}
.text-el {
  padding: 5px;
  width: auto;
  float: left;
  margin: 10px 0px 0px 10px;
  color: $text-grey;

  h2 {
    font-weight: bold !important;
    margin-bottom: 1px;
  }
}
.image-el {
  height: 8vh;
  width: 90px;
  float: right;
  margin: 10px 10px 10px 0px;
}

@media (max-width: 1000px) {
  .text-el {
    font-size: 0.85em !important;
  }
}

@media screen and (max-width: 767px) {
  .block {
    height: 15vh !important;
    width: 100% !important;
    padding: 2%;

    img {
      width: auto;
      height: 9vh !important;
    }
  }

  .text-el {
    font-size: 0.9em !important;
  }
}
</style>
