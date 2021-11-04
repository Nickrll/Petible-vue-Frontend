<template>
  <div
    class="list offset-sm-3 offset-md-3 offset-xl-4 offset-lg-4 col-xl-8 col-lg-8 col-md-9 col-sm-9"
  >
    <div class="row">
      <div id="header" class="header">
        <h1>Your matches</h1>
      </div>
    </div>

    <div class="match-list">
      <match
        v-for="match in matches"
        :key="match.id"
        :id="match.pet_id"
        :name="match.petName"
        :status="match.status"
        :shelter="match.animalShelterEmail"
      />
    </div>
  </div>
</template>

<script>
import match from "@/components/list/matches/MatchComponent";
import { client } from "@/main";

export default {
  name: "matches",
  components: {
    match,
  },
  data() {
    return {
      matches: [],
    };
  },
  mounted() {
    client({
      method: "get",
      url: `/Match/user/${localStorage.id}`,
      headers: {
        Authorization: "Bearer " + localStorage.jwt,
      },
    }).then((result) => {
      result.data.forEach((match) => {
        if (match.status != 4) {
          this.matches.push(match);
        }
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.list {
  padding: 0 5vh;
  display: inline-block;
  min-height: 100%;

  .header {
    margin-top: 10vh;
    margin-bottom: 5vh;
    margin-left: 5vw;

    h1 {
      font-weight: 800 !important;
      font-size: 2.6em !important;
    }
  }

  .match-list {
    margin-left: 2vw;
    width: 90%;
    margin-bottom: 10vh;
  }
}
</style>
