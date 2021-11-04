<template>
  <div>
    <h2>Could we get your location?</h2>
    <div class="radio-buttons">
      <label>
        <input
          id="location-yes"
          type="radio"
          class="option-input radio"
          name="location"
          value="4"
          checked
          @click="askLocation"
        />
        Yes please
      </label>
      <br />
      <label>
        <input
          id="location-no"
          type="radio"
          class="option-input radio"
          name="location"
          value="9"
          @click="noPermission"
        />
        No thanks
      </label>
    </div>
    <div
      v-if="location != '' && location != 'Not given.'"
      class="location-feedback"
    >You're from {{ location }}, what a nice place!</div>
    <div class="error-msg" v-if="error != ''">{{ error }}</div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "QuestionLocation",
  model: {
    prop: "location",
    event: "change"
  },
  props: {
    location: String
  },
  data() {
    return {
      error: ""
    };
  },
  methods: {
    noPermission() {
      this.permission = "false";
      this.$emit("change", "Not given.");
    },
    askLocation: function() {
      this.permission = "true";

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        this.location = "Geolocation is not supported by this browser.";
      }
    },
    showPosition: function(position) {
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;

      this.getPlaceAPI();
    },
    getPlaceAPI: function() {
      var apiLink =
        "https://api.tomtom.com/search/2/reverseGeocode/" +
        this.lat +
        "%2C" +
        this.long +
        ".json?key=XMERc9IswocMbvhuN59nEMVRr27VyAB6";
      axios
        .get(apiLink)
        .then(response => {
          this.$emit("change", response.data.addresses[0].address.municipality);
        })
        .catch(function(error) {
          this.error = error;
        });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/colors";
</style>
