<template>
  <div class="matches row">
    <navigation />
    <sidebar />
    <list />
  </div>
</template>

<script>
import sidebar from "@/components/list/SidebarComponent";
import list from "@/components/list/matches/MatchListComponent";
import Navigation from "@/components/Navigation.vue";

export default {
  name: "MatchList",
  components: {
    Navigation,
    sidebar,
    list,
  },
};
</script>

<style lang="scss" scoped>
body {
  overflow-y: hidden;
}

body::-webkit-scrollbar {
  display: none;
}

@media screen and (max-width: 767px) {
  .matches {
    .list-sidebar {
      visibility: hidden;
    }

    .list {
      position: absolute;
      bottom: 0;
      margin-top: 0;
      padding: 0 25px 0 25px;
      height: 65vh;
      border-radius: 0;

      .header {
        margin-top: 5vh;
        margin-bottom: 2vh;

        h1 {
          font-size: 1.8em !important;
        }
      }
      .match-list {
        width: 100%;

        .match {
          .photo {
            img {
              min-width: 20%;
              max-height: 20%;
            }
          }
        }
      }
    }
  }
}
</style>
