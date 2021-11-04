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
          <question-name-component v-model="form.name" :v="$v.form.name"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <question-bio-component v-model="form.bio"/>
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
      <div class="row">
        <div class="col-md-6">
          <question-time-component v-model="form.time" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <question-location-component v-model="form.location"/>
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
        <h1>Tell us something about your household</h1>
      </div>
      <div class="row">
        <div class="col-md-6">
          <question-children-component v-model="form.children"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <question-pets-component v-model="form.pets"/>
        </div>
      </div>
      <div class="row">
        <button id="btn-save" @click="save()">Save</button>
      </div>
    </div>
  </div>
</template>
<script>
var QuestionNameComponent = () =>
  import("@/components/profile_setup/questions/QuestionNameComponent");
var QuestionBioComponent = () =>
  import("@/components/profile_setup/questions/QuestionBioComponent");
var QuestionTimeComponent = () =>
  import("@/components/profile_setup/questions/QuestionTimeComponent");
var QuestionLocationComponent = () =>
  import("@/components/profile_setup/questions/QuestionLocationComponent");
var QuestionChildrenComponent = () =>
  import("@/components/profile_setup/questions/QuestionChildrenComponent");
var QuestionPetsComponent = () =>
  import("@/components/profile_setup/questions/QuestionPetsComponent");

import { required } from 'vuelidate/lib/validators'
import { client } from "../../main";

export default {
  name: 'setupQuestions',
  components: {
    QuestionNameComponent,
    QuestionBioComponent,
    QuestionTimeComponent,
    QuestionLocationComponent,
    QuestionChildrenComponent,
    QuestionPetsComponent,
  },
  data() {
    return {
      form:{
        name: "",
        bio: "",
        time: 0,
        location: "",
        children: null,
        pets: null
      }
    };
  },
  validations: {
    form:{
      name: { required },
    }
  },
  methods: {
    save() {
      this.$v.form.$touch();
      if (this.$v.form.$pending || this.$v.form.$error) return;
      client({
        method: "put",
        url: "/userinfo",
        headers: {
          Authorization: "Bearer " +  localStorage.jwt
        },
        data: {
          id: localStorage.id,
          city: this.location,
          children: this.children,
          username: this.name,
          description: this.bio,
          timeFree: this.time,
          otherPets: this.pets,
        }
      }).then(() => {
          this.$router.push("discover")
      });
    },
    SmoothScrollToById(id) {
      let element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>
<style lang="scss">
@import '../../assets/colors';

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
      content: '✔';
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
      content: '';
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
