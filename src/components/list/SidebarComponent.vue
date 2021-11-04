<template>
  <div class="list-sidebar col-xl-4 col-lg-4 col-md-3 col-sm-3">
    <navigation />
  </div>
</template>

<script>
import navigation from "@/components/Navigation";

export default {
  name: "sidebar-list",
  compontents: {
    navigation
  }
};
</script>
<style lang="scss" scoped>
.list-sidebar {
  position: fixed;
  overflow: hidden;
  background-image: url("../../assets/list-sidebar.jpg");
  background-position: right -130px top 0;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>
