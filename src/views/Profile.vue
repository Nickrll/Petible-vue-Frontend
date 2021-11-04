<template>
  <div>
    <navigation />
    <div class="capsule">
      <div class="container-fluid content col-md-8 col-sm-12">
        <div class="row">
          <ProfileHeader :name="name" :place="place" />
        </div>
        <div class="row content-info">
          <div class="col-xl-8 col-lg-7 col-md-6 ">
            <div>
              <ProfileAboutMe :about="about" />
            </div>
          </div>
          <div class="col-xl-4 col-lg-5 col-md-6">
            <ProfileInfo :time="time" :children="children" :pets="pets" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileHeader from "@/components/profile/profile-header.vue";
import ProfileAboutMe from "@/components/profile/AboutMeComponent.vue";
import ProfileInfo from "@/components/profile/InfoComponent.vue";
import Navigation from "../components/Navigation";
import { client } from "../main";

export default {
  name: "Profile",
  components: {
    ProfileHeader,
    ProfileAboutMe,
    ProfileInfo,
    Navigation,
  },
  data() {
    return {
      name: "",
      place: "",
      about: "",
      time: 1,
      children: false,
      pets: false,
    };
  },
  mounted() {
    client({
      method: "get",
      url: "/UserInfo/" + this.$route.params.id,
      headers: {
        Authorization: "Bearer " + localStorage.jwt,
      },
    }).then((result) => {
      this.name = result.data.username;
      this.place = result.data.city;
      this.about = result.data.description;
      this.time = result.data.timeFree;
      this.children = result.data.children;
      this.pets = result.data.otherPets;
    });
  },
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
