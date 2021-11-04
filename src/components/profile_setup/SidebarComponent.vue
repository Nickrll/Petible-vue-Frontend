<template>
  <div class="profile-setup-sidebar col-xl-4 col-lg-4 col-md-3 col-sm-3"></div>
</template>
<script>
export default {
  name: "SetupSidebar",
};
</script>
<style lang="scss" scoped>
@import "../../assets/colors";

.profile-setup-sidebar {
  position: fixed;
  overflow: hidden;
  background-image: url("../../assets/setup-sidebar.jpg");
  background-position: right -250px top 0;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>
