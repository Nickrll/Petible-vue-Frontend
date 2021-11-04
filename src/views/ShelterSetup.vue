<template>
  <div class="profile-setup row">
    <sidebar />
    <questions />
  </div>
</template>
<script>
import sidebar from "@/components/shelter_profile_setup/SidebarComponent";
import questions from "@/components/shelter_profile_setup/QuestionsComponent";

export default {
  name: "ProfileSetup",
  components: {
    sidebar,
    questions,
  },
};
</script>
<style lang="scss">
@import "../assets/colors";
body {
  overflow-y: hidden;
}

body::-webkit-scrollbar {
  display: none;
}

@media screen and (max-width: 575px) {
  .profile-setup {
    .question-page {
      scroll-margin-top: 5vh;
    }

    .header {
      margin-top: 5vh;
      margin-bottom: 2vh;

      h1 {
        font-size: 1.8em !important;
      }
      
      input {
        width: 100%;
      }
    }
  }
}
</style>
