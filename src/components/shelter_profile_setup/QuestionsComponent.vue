<template>
  <div
    class="profile-setup-questions offset-sm-3 offset-md-3 offset-xl-4 offset-lg-4 col-xl-8 col-lg-8 col-md-9 col-sm-9"
  >
    <div id="question-page-1" class="question-page">
      <div class="header row">
        <h1>Let's get to know you !</h1>
      </div>
      <div class="row">
        <div class="col-md-6">
          <PickLogo v-model="form.logo" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <Name v-model="form.name" :v="$v.form.name"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <Bio v-model="form.bio" />
        </div>
      </div>
      <button
        id="btn-question-page-1"
        @click="SmoothScrollToById('question-page-2')"
      >
        Continue
      </button>
    </div>

    <div id="question-page-2" class="question-page">
      <div class="header row">
        <h1>{{ form.name }}, huh? That has a nice ring to it.</h1>
      </div>
      <h2>Share your social media!</h2>
      <div class="row">
        <div class="col-md-6">
          <SocialMedia v-model="form.facebook" title="facebook" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <SocialMedia v-model="form.twitter" title="twitter" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <SocialMedia v-model="form.instagram" title="instagram" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <SocialMedia v-model="form.linkedin" title="linkedin" />
        </div>
      </div>
      <button
        id="btn-question-page-2"
        @click="SmoothScrollToById('question-page-3')"
      >
        Continue
      </button>
    </div>

    <div id="question-page-3" class="question-page">
      <div class="header row">
        <h1>Sharing is caring. How can we contact you?</h1>
      </div>
      <div class="row">
        <div class="col-md-6">
          <Contact v-model="form.website" title="Do you have a website?" :v="$v.form.website"/>
        </div>
      </div>
      <h2>How can we contact you?</h2>
      <div class="row">
        <div class="col-md-6">
          <Contact v-model="form.email" title="Can we have your email?" :v="$v.form.email"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <Contact v-model="form.phone_number" title="Can we have your phone number?" :v="$v.form.phone_number"/>
        </div>
      </div>
      <button id="btn-question-page-3" @click="SmoothScrollToById('question-page-4')">Continue</button>
    </div>

    <div id="question-page-4" class="question-page">
      <div class="header row">
        <h1>Tell us some more about your shelter!</h1>
      </div>
      <div class="row">
        <div class="col-md-6">
          <Location v-model="form.postalcode" title="Postcode" :v="$v.form.postalcode"/>
        </div>
      </div>
       <div class="row">
        <div class="col-md-6">
          <Location v-model="form.address" title="Street and number" :v="$v.form.address"/>
        </div>
      </div>
      <button v-on:click="save()" id="btn-save">Save</button>
    </div>
  </div>
</template>
<script>
import Bio from "@/components/shelter_profile_setup/questions/QuestionBioComponent.vue";
import Name from "@/components/shelter_profile_setup/questions/QuestionNameComponent.vue";
import PickLogo from "@/components/shelter_profile_setup/questions/QuestionPickLogoComponent.vue";
import SocialMedia from "@/components/shelter_profile_setup/questions/QuestionSocialMediaComponent.vue";
import Contact from "@/components/shelter_profile_setup/questions/QuestionContactComponent.vue";
import Location from "@/components/shelter_profile_setup/questions/QuestionLocationComponent.vue";
import axios from "axios";

import { required } from 'vuelidate/lib/validators'

export default {
  name: "AsielSetupQuestions",
  components: {
    Bio,
    Name,
    PickLogo,
    SocialMedia,
    Contact,
    Location
  },
  data() {
    return {
      form: {
        logo: "",
        name: "",
        bio: "",
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "",
        website: "",
        email: "",
        phone_number: "",
        postalcode: "",
        address: "",
      }
    };
  },
  validations: {
    form:{
      name: { required },
      website: { required },
      email: { required },
      phone_number: { required },
      postalcode: { required },
      address: { required }
    }
  },
  methods: {
    save() {
      this.$v.form.$touch();
      if (this.$v.form.$pending || this.$v.form.$error) return;
      axios
        .put(
          "https://petibleapi.lifelinks.nl/api/v1/animalshelter",
          {
            id: localStorage.id,
            name: this.form.name,
            website: this.form.website,
            postalcode: this.form.postalcode,
            city: "test",
            address: this.form.address,
            longitude: 0,
            latitude: 0,
            phoneNumber: this.form.phone_number,
            email: this.form.email,
            bio: this.form.bio,
            facebook: this.form.facebook,
            twitter: this.form.twitter,
            instagram: this.form.instagram,
            linkedin: this.form.linkedin
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.jwt
            }
          }
        ).then(() => {
          this.$router.push({ path: 'animals' })
        });
    },
    SmoothScrollToById(id) {
      let element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
<style lang="scss">
@import "../../assets/colors";

.profile-setup-questions::-webkit-scrollbar {
  display: none;
}

.profile-setup-questions {
  overflow-y: auto;
  background-color: white;
  padding: 0 5vh;
  display: inline-block;
  min-height: 100%;

  scroll-snap-type: y mandatory;

  .header {
    margin-top: 10vh;
    margin-bottom: 5vh;
  }

  h1 {
    font-weight: 800 !important;
    font-size: 2.6em !important;
  }

  .question-page {
    min-height: 100%;
    scroll-snap-stop: always;
    scroll-snap-align: start;
    scroll-margin-top: 10vh;
    scroll-snap-align: center;

    h2 {
      font-weight: 800 !important;
    }

    .input-setup {
      background-color: $peach;
      width: 100%;
      border: none;
      margin-bottom: 3vh;
    }

    textarea {
      height: 150px;
      resize: none;
    }
  }

  button {
    background-color: $primary;
    padding: 5px 30px;
    color: white;
    border: none;
    border-radius: 5px;
  }

  .radio-buttons {
    margin-bottom: 25px;
    color: #6d6d6d;

    @keyframes click-wave {
      0% {
        height: 25px;
        width: 25px;
        opacity: 0.35;
        position: relative;
      }
      100% {
        height: 100px;
        width: 100px;
        margin-left: -37px;
        margin-top: -37px;
        opacity: 0;
      }
    }

    .option-input {
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      -o-appearance: none;
      appearance: none;

      position: relative;
      top: 9px;
      right: 0;
      bottom: 0;
      left: 0;
      height: 25px;
      width: 25px;

      transition: all 0.15s ease-out 0s;
      background: $peach;
      border: none;
      color: $primary;
      cursor: pointer;
      display: inline-block;
      margin-right: 0.5rem;
      outline: none;
      z-index: 1000;
    }
    .option-input:hover {
      background: $primary-light;
    }
    .option-input:checked {
      background: $peach;
    }
    .option-input:checked::before {
      height: 25px;
      width: 25px;
      position: absolute;
      content: "✔";
      display: inline-block;
      font-size: 18px;
      text-align: center;
      line-height: 30px;
    }
    .option-input:checked::after {
      -webkit-animation: click-wave 0.65s;
      -moz-animation: click-wave 0.65s;
      animation: click-wave 0.65s;
      background: $primary;
      content: "";
      display: block;
      position: relative;
      z-index: 100;
    }
    .option-input.radio {
      border-radius: 50%;
    }
    .option-input.radio::after {
      border-radius: 50%;
    }
  }
}
</style>
