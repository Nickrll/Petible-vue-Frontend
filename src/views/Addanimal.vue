<template>
  <div class="addanimal">
    <div class="menustyle"><navigation /></div>
    <addAnimalHeader />
    <div class="add-animal-form row offset-md-2">
      <div class="knowledge col-md-6">
        <knowledge v-model="animalKnowledge" />
        <quirks v-on:childToParent="onclick" />
      </div>
      <div class="specifics col-md-4">
        <specifics v-model="animalSpecifics" />
      </div>
      <div class="col-md-1 offset-md-9">
        <button v-on:click="addmeanimal()" class="btn btn-save">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import addAnimalHeader from "@/components/addanimal/addanimal-header.vue";
import specifics from "@/components/addanimal/animalspecifics.vue";
import knowledge from "@/components/addanimal/generalknowledge.vue";
import quirks from "@/components/addanimal/quirks.vue";
import navigation from "@/components/Navigation.vue";
import axios from "axios";
//import { client } from "../main";

export default {
  components: {
    navigation,
    addAnimalHeader,
    specifics,
    knowledge,
    quirks,
  },
  data() {
    return {
      animalid: "ff",
      active: [{ id: null }],
      animalquirks: [{ id: null }, {}],
      animalSpecifics: {
        cost: 0,
        species: null,
        dateOfBirth: null,
        inShelterSince: null,
        timeFree: null,
      },
      animalKnowledge: {
        name: null,
        gender: null,
        description: null,
      },
    };
  },
  methods: {
    onclick(value) {
      this.active = value;
    },
    addmeanimal() {
      axios
        .put(
          "https://petibleapi.lifelinks.nl/api/v1/pet",
          {
            animalshelter_id: localStorage.id,
            timefree: this.animalSpecifics.timeFree,
            name: this.animalKnowledge.name,
            dateOfBirth: this.animalSpecifics.dateOfBirth,
            gender: this.animalKnowledge.gender,
            description: this.animalKnowledge.description,
            inAnimalShelterSince: this.animalSpecifics.inShelterSince,
            fees: this.animalSpecifics.fees,
            pettype: this.animalSpecifics.species,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.jwt,
            },
          }
        )
        .then((data) => {
          this.animalid = data.data.id;
          this.addquirks();
        });
    },
    addquirks() {
      var postlink =
        "https://petibleapi.lifelinks.nl/api/v1/Pet/quirk?id=" + this.animalid;
      for (var i = 0; i < this.active.length; i++) {
        postlink = postlink + "&quirks=" + this.active[i].id;
      }
      axios.post(postlink);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/colors";
.addanimal {
  .add-animal-form {
    margin-top: 30px;
  }
  .menustyle {
    position: absolute;
  }

  .btn-save {
    float: right;
    color: white;
    width: 100px;
    background-color: $dark-blue;
  }
  .specifics {
  }
  .knowledge {
  }
  .quirks {
  }
}

@media screen and (max-width: 767px) {
  .addanimal {
    overflow-x: hidden;
    margin: -15px;
    padding: 15px;
    margin-bottom: 10vh;

    .knowledge {
      margin-bottom: 25px;
    }

    .animal-specifics,
    .animal-general {
      .col-lg-12 {
        margin-bottom: 15px;
      }
    }
    .header-info {
      padding-top: 2vh !important;
      height: 160px !important;
      .innerpos {
        img {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
      }

      .info {
        visibility: hidden;
      }
    }

    .add-animal-form {
      margin-top: 100px !important;
    }

    .scrolling-wrapper {
      .card {
        background-color: transparent;
        display: inline-block;
        margin: 0px 5px 0px 5px;

        button {
          height: 15vh;
          width: 15vh;
        }

        i {
          font-size: 2.5em !important;
          margin-bottom: 2vh;
        }
      }
    }
  }
}
</style>
