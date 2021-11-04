<template>
  <div class="profile-setup row">
    <sidebar />
    <questions />
  </div>
</template>
<script>
import sidebar from "@/components/profile_setup/SidebarComponent";
import questions from "@/components/profile_setup/QuestionsComponent";

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
    .profile-setup-sidebar {
      background-position: left -240px top -10px;
      background-size: cover;
      height: 60vh;
    }

    .profile-setup-questions {
      position: absolute;
      bottom: 0;
      margin-top: 0;
      padding: 0 25px 0 25px;
      height: 65vh;
      border-radius: 0;

      .question-page {
        scroll-margin-top: 5vh;
      }

      .header {
        margin-top: 5vh;
        margin-bottom: 2vh;

        h1 {
          font-size: 1.8em !important;
        }
      }

      input {
        width: 100%;
      }
    }
  }
}
</style>
