<template>
  <div class="footer col-md-12 align-self-end">
    <a
      href="https://www.freepik.com/free-photos-vectors/background"
    >Background vector created by freepik - www.freepik.com</a>
  </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style lang="scss" scoped>
@import "../assets/colors";

.footer {
  background-color: rgba(255, 255, 255, 0.5);
  height: 4vh;
  text-align: center;
  padding: 1vh;

  a {
    color: rgba(0, 0, 0, 0.5);
  }
}
</style>