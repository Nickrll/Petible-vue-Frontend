<template>
  <div class="animals row">
    <navigation />
    <sidebar />
    <list />
  </div>
</template>

<script>
import sidebar from "@/components/list/SidebarComponent";
import list from "@/components/list/animals/AnimalListComponent";
import Navigation from "@/components/Navigation";

export default {
  name: "AnimalList",
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
  .animals {
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
      .animal-list {
        width: 100%;

        .animal {
          .photo {
            img {
              min-width: 50%;
              max-height: 50%;
            }
          }
        }
      }
    }
  }
}
</style>
