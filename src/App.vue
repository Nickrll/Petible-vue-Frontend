<template>
  <div id="app">
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

export default {

}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;700&family=Muli:wght@400;500;600;700&display=swap");
@import "assets/colors";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Hind", sans-serif;
  height: 100%;
  color: $text-light;
  background: white;
  font-size: 0.9em;

  h1,
  h2,
  h3 {
    font-family: "Muli", sans-serif;
    font-weight: 500;
    color: $text;
  }

  h1 {
    font-size: 1.5em;
  }

  h2 {
    font-size: 1.1em;
  }

  h3 {
    font-size: 1.1em;
    color: $text-light;
    font-weight: 300;
  }

  h4 {
    font-family: "Hind", sans-serif;
    color: $text;
    font-size: 1.4em;
    font-weight: 600;
    display: block;
  }

  p {
    color: $text-light;
    text-align: justify;
  }

  .non-selectable {
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
  }

  .error{
    color: red;
  }
}
</style>
