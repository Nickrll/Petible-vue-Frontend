<template>
  <div>
    <navigation />
    <div class="capsule">
      <div class="container-fluid content col-md-8 col-sm-12">
        <div class="row">
          <ProfileHeader
            :name="name"
            :place="place"
            :facebook="facebook"
            :twitter="twitter"
            :instagram="instagram"
          />
        </div>
        <div class="row content-info">
          <div class="col-xl-8 col-lg-7 col-md-6">
            <div>
              <ProfileAboutMe :about="about" />
            </div>
            <div></div>
          </div>
          <div class="col-xl-4 col-lg-5 col-md-6">
            <ProfileInfo :email="email" :phone="phone" :website="website" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileHeader from "@/components/shelter/ShelterHeaderComponent.vue";
import ProfileAboutMe from "@/components/shelter/AboutMeComponent.vue";
import ProfileInfo from "@/components/shelter/InfoComponent.vue";
import Navigation from "../components/Navigation";
import { client } from "../main";

export default {
  name: "Profile",
  components: {
    ProfileHeader,
    ProfileAboutMe,
    ProfileInfo,
    Navigation
  },
  data() {
    return {
      name: "",
      place: "",
      about: "",
      email: "",
      phone: "",
      website: "",
      facebook: "",
      twitter: "",
      instagram: ""
    };
  },
  mounted() {
    client({
      method: "get",
      url: "/AnimalShelter/" + this.$route.params.id,
      headers: {
        Authorization: "Bearer " + localStorage.jwt
      }
    }).then(result => {
      this.name = result.data.name;
      this.place = result.data.city;
      this.about = result.data.bio;
      this.email = result.data.email;
      this.phone = result.data.phoneNumber;
      this.website = result.data.website;
      this.facebook = result.data.facebook;
      this.twitter = result.data.twitter;
      this.instagram = result.data.instagram;
      });
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/colors";

.capsule {
  position: static;
  background-color: #fde8dd;
  margin: 0px -15px 0px -15px !important;
  height: 100vh;
  padding-top: 8vh;

  .content {
    background-color: white;
    border-radius: 50px 50px 0px 0px;
    height: 100%;
    padding: 40px;
  }
}

@media screen and (max-width: 767px) {
  .capsule {
    margin: 0px;
    padding-top: 0px;

    .content {
      border-radius: 0px;
      padding: 0px;
      overflow-x: hidden;
      margin-bottom: 5vh;

      .content-info {
        padding: 7%;
      }
    }
  }
}
</style>
