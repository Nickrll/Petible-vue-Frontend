<template>
  <div
    class="list offset-sm-3 offset-md-3 offset-xl-4 offset-lg-4 col-xl-8 col-lg-8 col-md-9 col-sm-9"
  >
    <div class="row">
      <div id="header" class="header">
        <h1>Your listed animals</h1>
      </div>
    </div>

    <div class="animal-list">
      <animal
        v-for="animal in animals"
        :key="animal.id"
        :id="animal.id"
        :name="animal.name"
        :shelterDate="animal.inAnimalShelterSince"
        :requests="animal.requests"
      />
    </div>
  </div>
</template>

<script>
import animal from "@/components/list/animals/AnimalComponent";
import { client } from "@/main";

export default {
  name: "animals",
  components: {
    animal,
  },
  data() {
    return {
      animals: [],
    };
  },
  mounted() {
    client({
      method: "get",
      url: `/Pet/shelter/${localStorage.id}`,
      headers: {
        Authorization: "Bearer " + localStorage.jwt,
      },
    }).then((result) => {
      result.data.forEach((animal) => {
        animal.requests = [];

        client({
          method: "get",
          url: `/Match/pet/${animal.id}`,
          headers: {
            Authorization: "Bearer " + localStorage.jwt,
          },
        }).then((requests) => {
          requests.data.forEach((request) => {
            if (request.status != 4) {
              animal.requests.push(request);
            }
          });

          this.animals.push(animal);
        });
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

  .animal-list {
    margin-left: 2vw;
    width: 90%;
    margin-bottom: 10vh;
  }
}
</style>
