<template>
  <div class="navbar-petible">
    <div class="d-none d-sm-block">
      <Slide width="400" noOverlay>
        <h1>Petible</h1>
        <p>
          Let's fine out if you are com
          <span style="font-weight: bold">pet</span>ible
        </p>
        <router-link v-if="role === '2'" :to="{ name: 'Discover' }">
          <span>Discover</span>
        </router-link>

        <router-link v-if="role === '1'" :to="{ name: 'Add Animal' }">
          <span>Add animal</span>
        </router-link>

        <router-link
          v-if="role === '1'"
          :to="{ name: 'ShelterProfile', params: { id: id }}"
        >
          <span>Profile</span>
        </router-link>

        <router-link
                v-if="role === '2'"
                :to="{ name: 'Profile', params: { id: id }}"
        >
          <span>Profile</span>
        </router-link>

        <router-link
                v-if="role === '2'"
                :to="{ name: 'Match list'}"
        >
          <span>Matches</span>
        </router-link>

        <router-link
                v-if="role === '1'"
                :to="{ name: 'Animal list'}"
        >
          <span>Animals</span>
        </router-link>

        <router-link :to="{ name: 'Home' }">
          <span>Settings</span>
        </router-link>

        <hr />

        <router-link v-on:click="signOut" :to="{ name: 'Home' }">
          <span>Sign Out</span>
        </router-link>
      </Slide>
    </div>
    <nav class="navbar-mobile fixed-bottom navbar-light d-sm-none">
      <div class="row justify-content-md-center align-items-center">
        <router-link v-if='role === "2"' class="navbar-item col-xs-2" :to="{ name: 'Discover' }">
          <i class="fas fa-paw"></i>
          <span class="nav-text">Discover</span>
        </router-link>
        <router-link v-if='role === "1"' class="navbar-item col-xs-2" :to="{ name: 'Add Animal' }">
          <i class="fas fa-paw"></i>
          <span class="nav-text">Add</span>
        </router-link>
        <router-link
          v-if='role === "1"'
          class="navbar-item col-xs-2"
          :to="{ name: 'ShelterProfile', params: { id: id }}"
        >
          <i class="far fa-user-circle"></i>
          <span class="nav-text">Profile</span>
        </router-link>
        <router-link
          v-if='role === "2"'
          class="navbar-item col-xs-2"
          :to="{ name: 'Profile', params: { id: id }}"
        >
          <i class="far fa-user-circle"></i>
          <span class="nav-text">Profile</span>
        </router-link>
        <router-link v-if='role === "2"' class="navbar-item col-xs-2" :to="{ name: 'Match list' }">
          <i class="fab fa-gratipay"></i>
          <span class="nav-text">Matches</span>
        </router-link>
        <router-link v-if='role === "1"' class="navbar-item col-xs-2" :to="{ name: 'Animal list' }">
          <i class="fab fa-gratipay"></i>
          <span class="nav-text">Animals</span>
        </router-link>
        <router-link
          class="navbar-item col-xs-2 non-active"
          v-on:click="signOut"
          :to="{ name: 'Home' }"
        >
          <i class="fas fa-sign-out-alt"></i>
          <span class="nav-text">Sign Out</span>
        </router-link>
      </div>
    </nav>
  </div>
</template>
<script>
import firebase from "firebase";
import { Slide } from "vue-burger-menu";
export default {
  name: "Navigation",
  components: {
    Slide,
  },
  data () {
   return{
     role: localStorage.role,
     id: localStorage.id
   }
  },
  methods: {
    signOut: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          localStorage.removeItem('jwt');
          localStorage.removeItem('id');
          localStorage.removeItem('role');
          this.user = null;
        });
    }
  }
};
</script>
<style lang="scss">
@import "../assets/colors";
.navbar-petible {
  z-index: 99;

  //https://github.com/mbj36/vue-burger-menu
  .bm-menu {
    background-color: $blue;

    h1,
    p {
      color: white !important;
      padding: 15px 15px 0px 0px;
    }

    a {
      padding-left: 0px;
    }

    .bm-item-list > * > span {
      margin-left: 0px;
    }

    hr {
      margin-left: 0px;
      border-color: white;
      width: 80%;
    }
  }

  .bm-burger-bars {
    background-color: white;
  }
}

@media screen and (max-width: 767px) {
  .navbar-petible {
    .navbar-mobile {
      height: 60px;
      background: white;
      box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1),
        0px -5px 5px rgba(0, 0, 0, 0.1);

      .navbar-item {
        padding: 10px;
        margin-left: 10px;
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        min-width: 50px;
        overflow: hidden;
        white-space: nowrap;
        font-family: sans-serif;
        font-size: 13px;
        color: #444444;
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
        transition: background-color 0.1s ease-in-out;

        i {
          color: #444444;
          font-size: 20px;
        }

        p {
          color: $primary-dark !important;
        }

        &:hover {
          background-color: #eeeeee;
        }
      }

      .router-link-active {
        color: $primary-dark;

        i {
          color: $primary-dark;
        }
      }

      .non-active {
        color: #444444;

        i {
          color: #444444;
        }
      }
    }
  }
}
</style>
