<template>
  <div>
    <div class="pet row justify-content-md-center align-items-center">
      <navigation />
      <pet-profile
        :name="pet.name"
        :age="pet.age"
        :gender="pet.gender"
        :type="pet.pettype"
        :shelter="{ name: shelter.name, id: shelter.id }"
        :quirks="pet.quirks"
        :about="pet.description"
        :cost="pet.fees"
        :show-buttons="false"
      />
    </div>
  </div>
</template>

<script>
import PetProfile from "../components/PetProfileComponent";
import Navigation from "../components/Navigation";
import { client } from "../main";

export default {
  name: "pet",
  components: {
    PetProfile,
    Navigation,
  },
  data() {
    return {
      pet: {},
      shelter: {},
    };
  },
  methods: {
    getShelter: function(shelterId) {
      client({
        method: "get",
        url: "/AnimalShelter/" + shelterId,
        headers: {
          Authorization: "Bearer " + localStorage.jwt,
        },
      }).then((result) => {
        this.shelter = result.data;
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

      this.pet.age = age;
    },
    getQuirks: function(petId) {
      client({
        method: "get",
        url: "/Pet/quirk/" + petId,
        headers: {
          Authorization: "Bearer " + localStorage.jwt,
        },
      }).then((result) => {
        this.pet.quirks = result.data;
      });
    },
  },
  mounted() {
    client({
      method: "get",
      url: "/pet/" + this.$route.params.id,
      headers: {
        Authorization: "Bearer " + localStorage.jwt,
      },
    }).then((result) => {
      this.pet = result.data;
      this.getShelter(this.pet.animalshelter_id);
      this.getAge(this.pet.dateOfBirth);
      this.getQuirks(this.pet.id);
    });
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/colors";
$height-content: 90vh;

.pet {
  background: $primary-light;
  height: 100vh;
}

@media screen and (max-width: 540px) {
  .pet {
    height: auto;
  }
}
</style>
