<template>
  <div id="match" class="match col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <div class="row">
      <div class="photo col-4 col-sm-4 col-md-3 col-lg-3 col-xl-2">
        <img src="@/assets/dog-pic.png" />
      </div>
      <div id="info" class="info col-6 col-sm-7 col-md-7 col-lg-8 col-xl-8">
        <div id="name" class="header row">
          <h2>
            <router-link :to="'/pet/' + id" target="_blank">{{
              name
            }}</router-link>
          </h2>
        </div>

        <div id="status" class="status row">
          <p v-if="status == 1">Waiting on response of the shelter.</p>
          <p v-if="status == 2">Your adoption request has been denied.</p>
          <p v-if="status == 3">
            Request accepted! Contact them
            <a id="email" :href="`mailto:${shelter}`">here</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "match",
  props: {
    id: String,
    name: String,
    status: Number,
    shelter: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors";

.match {
  margin-bottom: 30px;
  padding: 10px;

  border-radius: 5px;
  -webkit-box-shadow: 2px 3px 7px 1px rgba(0, 0, 0, 0.2); /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 2px 3px 7px 1px rgba(0, 0, 0, 0.2); /* Firefox 3.5 - 3.6 */
  box-shadow: 2px 3px 7px 1px rgba(0, 0, 0, 0.2); /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */

  a {
    color: $primary-dark;
  }

  .photo {
    img {
      min-width: 90%;
      max-height: 90%;
    }
  }
}
</style>
