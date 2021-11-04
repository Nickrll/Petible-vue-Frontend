<template>
  <div>
    <div class="discover row justify-content-md-center align-items-center">
      <navigation />
      <pet-profile v-if="!end"
        :name="shownPet.name"
        :age="shownPet.age"
        :gender="shownPet.gender"
        :shelter="{name: shownShelter.name, id: shownShelter.id}"
        :quirks="shownPet.quirks"
        :about="shownPet.description"
        :cost="shownPet.fees"
        :type="shownPet.pettype"
        :showButtons="true"
        @match="onMatch"
      />
        <div v-if="end" class="row">
            <div class="end col-sm-10 col-md-10 offset-sm-1">
                <img alt="pet" src="../assets/undraw_friends_r511.svg"/>
                <h1>Woah, there!</h1>
                <h3>Looks like you've reached the end of the list.</h3>
                <p>You've swiped through all of our available pets for now. Please come back later to check if any new pets arrived. We want to make sure they will find their forever home!</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import PetProfile from "../components/PetProfileComponent";
import Navigation from "../components/Navigation";
import { client } from "../main";

export default {
  name: "Discover",
  components: {
    PetProfile,
    Navigation,
  },
  data() {
    return {
      pets: {},
      shownPet: {},
      index: -1,
      shownShelter: {},
      end: false,
    };
  },
  methods: {
    onMatch(value) {
        client({
            method: "put",
            url: "/match",
            headers: {
                Authorization: "Bearer " + localStorage.jwt
            },
            data: {
                pet_id: this.shownPet.id,
                user_id: localStorage.id,
                petName: this.shownPet.name,
                status: value,
                animalShelterEmail: this.shownShelter.email
            }
        })
      this.nextPet();
    },
    nextPet: function() {
      this.index++;
      if(this.pets[this.index] === undefined){
          this.end = true;
      }
      else{
          if(this.pets[this.index].pettype != null || this.pets[this.index].pettype !== 1){
              this.shownPet = this.pets[this.index]
              this.getShelter(this.shownPet.animalshelter_id)
              this.getQuirks(this.shownPet.id)
              this.getAge(this.shownPet.dateOfBirth)
          }
          else{
              this.nextPet()
          }
      }
    },
    getShelter: function(shelterId) {
      client({
        method: "get",
        url: "/AnimalShelter/" + shelterId,
        headers: {
          Authorization: "Bearer " + localStorage.jwt,
        },
      }).then((result) => {
        this.shownShelter = result.data;
      });
    },
    getAge(date) {
      var birthday = new Date(date);
      var today = new Date();

      var age = today.getFullYear() - birthday.getFullYear();
      var month = today.getMonth() - birthday.getMonth();

      if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
        age = age - 1;
      }

      this.shownPet.age = age;
    },
    getQuirks: function(petId){
        client({
            method: "get",
            url: "/Pet/quirk/" + petId,
            headers: {
                Authorization: "Bearer " + localStorage.jwt,
            },
        }).then((result) => {
            this.shownPet.quirks = result.data;
        });
    }
  },
  mounted() {
    client({
      method: "get",
      url: "/pet",
      headers: {
        Authorization: "Bearer " + localStorage.jwt,
      },
    }).then((result) => {
      this.pets = result.data;
      this.nextPet();
    });
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/colors";
$height-content: 90vh;

.discover {
  background: $primary-light;
  height: 100vh;

    .end{
        background-color: white;
        margin-top: 5vh;
        padding: 10vh;

        img{
            display: block;
            margin: auto;
            width: 30%;
        }
    }
}

@media screen and (max-width: 540px) {
  .discover {
    height: auto;

      .end{
          margin-top: 0;
          height: 100vh;

          img{
              width: 50%;
              margin-bottom: 10vh;
          }
      }
  }
}
</style>
