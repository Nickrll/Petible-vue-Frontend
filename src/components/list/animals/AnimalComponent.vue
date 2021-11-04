<template>
  <div id="animal" class="animal col-sm-12 col-md-12 col-lg-12 col-xl-12">
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

        <div id="shelter-date" class="shelter-date row">
          <p>In shelter since {{ showDate(shelterDate) }}</p>
        </div>
      </div>
    </div>
    <div id="requests" class="requests row">
      <h3>Requests:</h3>
      <div
        class="request col-sm-12"
        v-for="request in requests"
        :key="request.id"
      >
        <div class="adoptee-name">
          <router-link :to="'/profile/' + request.id" target="_blank">{{
            request.name
          }}</router-link>
        </div>
        <div class="description">
          <p v-if="request.status == 1">
            Is interested in giving this animal a forever home.
          </p>
          <p v-if="request.status == 2">You've declined their request.</p>
          <p v-if="request.status == 3">
            You've accepter their request, they have been notified.
          </p>
        </div>
        <div class="options row" v-if="request.status == 1">
          <div class="col-4 col-xl-2">
            <button
              v-on:click="
                updateMatchStatus(request.match_id, 3, id, name, request.id)
              "
            >
              Accept
            </button>
          </div>
          <div class="col-4 col-xl-2">
            <button
              v-on:click="
                updateMatchStatus(request.match_id, 2, id, name, request.id)
              "
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { client } from "@/main";
import moment from "moment";

export default {
  name: "animal",
  props: {
    id: String,
    name: String,
    status: String,
    shelter: String,
    shelterDate: String,
    requests: {},
  },
  methods: {
    showDate(date) {
      return moment(date, "YYYYMMDD").fromNow();
    },

    updateMatchStatus(id, status, pet_id, pet_name, user_id) {
      var statusMsg = "accepted";
      if (status == 2) {
        statusMsg = "declined";
      }

      client({
        method: "put",
        url: "/Match",
        headers: {
          Authorization: "Bearer " + localStorage.jwt,
        },
        data: {
          id: id,
          status: status,
          pet_id: pet_id,
          petName: pet_name,
          user_id: user_id,
        },
      })
        .then(() => {
          this.$bvToast.toast(
            "You have succesfully " + statusMsg + " the request.",
            {
              title: "Success",
              variant: "success",
              solid: true,
            }
          );
        })
        .catch(() => {
          this.$bvToast.toast(
            "Something went wrong with updating the match, sorry!",
            {
              title: "Oh no",
              variant: "danger",
              solid: true,
            }
          );
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors";

.animal {
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
      min-width: 100%;
      max-height: 100%;
    }
    margin-bottom: 2vh;
  }

  .requests {
    margin-left: 10px;

    h3 {
      color: $text !important;
      font-weight: 900 !important;
    }

    .request {
      border-left: 5px solid #3f3d56;
      padding-left: 1vw;
      margin-bottom: 10px;
    }

    .adoptee-name {
      color: $text;
    }

    .options {
      margin-top: 1vh;
      text-align: center;

      button {
        background-color: $primary-light;
        padding: 5px 30px;
        color: $text;
        border: none;
        border-radius: 2px;
        width: 100px;
        margin: auto;
      }
    }
  }
}
</style>
