<template>
  <div class="aboutcontent">
    <h2>
      About me
    </h2>
    <p>
      {{about}}
    </p>
  </div>
</template>
<script>
export default {
  name: "About",
  props: {
    about: String,
  },
};
</script>
<style lang="scss" scoped>
.aboutcontent {
  margin-top: 50px;
  margin-left: 2vw;
}
</style>
