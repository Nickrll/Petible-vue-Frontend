<template>
  <div class="content col-md-9">
    <div class="row">
      <div class="profile-info col-sm-12 col-md-7">
        <div class="profile-info-text">
          <div class="row">
            <div class="offset-md-2 col-md-8 col-10">
              <h1>{{ name }}, {{ age }}</h1>
              <h3><i class="fas fa-paw"></i> {{ type }}</h3>
            </div>
            <div class="col-md-1 col-2">
              <i v-if="!gender" class="fas fa-mars"></i>
              <i v-if="gender" class="fas fa-venus"></i>
            </div>
          </div>
          <div class="row">
            <div class="offset-md-2 col-md-9 col-12">
              <h2>Quirks</h2>
              <div class="quirks">
                <quirk
                  v-for="(quirk, index) in quirks"
                  :key="'quirk_' + index"
                  :title="quirk.name"
                />
                <p v-if="quirks.length <= 0">No quirks have been given.</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="offset-md-2 col-md-9 col-12">
              <h2>About me</h2>
              <p>{{ about }}</p>
            </div>
          </div>

          <div class="row">
            <div class="offset-md-2 col-md-9 col-12">
              <h2>Shelter</h2>
              <p style="margin-bottom: 0px;">
                <i class="fas fa-home"></i> {{ shelter.name }}
              </p>
              <p>
                To view more information about this shelter,
                <router-link
                  :to="'/shelter-profile/' + shelter.id"
                  target="_blank"
                >
                  click here</router-link
                >.
              </p>
            </div>
          </div>

          <div class="row">
            <div class="offset-md-2 col-md-5 col-12">
              <h2>Cost</h2>
              <p>€{{ cost }},-</p>
            </div>
          </div>

          <div
            v-if="showButtons"
            class="row row-buttons justify-content-md-center align-items-end"
          >
            <div class="col-md-1 offset-2 col-3">
              <button
                type="button"
                class="btn btn-next btn-circle"
                v-on:click="showInterest(4)"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
            <div class="offset-md-1 col-md-1 col-3 offset-1">
              <button
                type="button"
                class="btn btn-match btn-circle"
                v-on:click="showInterest(1)"
              >
                <i class="far fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="dog-picture col-12 col-md-5">
        <div class="wave nonselectable">
          <img src="../assets/wave.svg" alt="wave" />
        </div>
        <div class="picture">
          <VueSlickCarousel v-bind="settings">
            <div>
              <img
                :src="require(`@/assets/pets/${type + '_1.jpg'}`)"
                alt="picture-pet"
              />
            </div>
            <div>
              <img
                :src="require(`@/assets/pets/${type + '_2.jpg'}`)"
                alt="picture-pet"
              />
            </div>
            <div>
              <img
                :src="require(`@/assets/pets/${type + '_3.jpg'}`)"
                alt="picture-pet"
              />
            </div>
            <div>
              <img
                :src="require(`@/assets/pets/${type + '_4.jpg'}`)"
                alt="picture-pet"
              />
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import VueSlickCarousel from "vue-slick-carousel";
import Quirk from "./Quirk";
export default {
  name: "PetProfile",
  props: {
    name: String,
    age: Number,
    breed: String,
    shelter: Object,
    gender: Boolean,
    quirks: Array,
    about: String,
    medicalInfo: Array,
    cost: Number,
    showButtons: Boolean,
    type: String,
  },
  components: {
    VueSlickCarousel,
    Quirk,
  },
  data() {
    return {
      settings: {
        dots: true,
        fade: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
  methods: {
    showInterest(value) {
      this.$emit("match", value);
    },
  },
};
</script>
<style lang="scss">
@import "../assets/colors";
$height-content: 90vh;

.content {
  overflow-y: hidden;
  text-align: justify;
  background: white;
  height: $height-content;

  .btn-circle {
    width: 70px;
    height: 70px;
    padding: 10px 16px;
    border-radius: 35px;
    font-size: 12px;
    text-align: center;
  }

  .profile-info {
    margin-top: 13vh;
    text-align: left;

    .profile-info-text {
      height: $height-content;
      overflow-x: hidden;
      overflow-y: auto;
    }

    h1 {
      font-size: 3em !important;
    }

    h3 {
      margin-bottom: 4vh;
      text-transform: capitalize;
    }

    .quirks,
    p {
      margin-bottom: 25px;
    }

    .fas,
    .far {
      font-size: 30px;
    }

    .fa-venus {
      color: $primary;
    }

    .fa-mars {
      color: $blue;
    }

    .fa-paw,
    .fa-home {
      font-size: 16px;
    }

    .row-buttons {
      margin-top: 5vh;
      text-align: center;

      .btn-match {
        color: white;
        background: $primary;
        border-color: $primary;
      }

      .btn-next {
        color: white;
        background: $primary-light;
        border-color: $primary-light;
      }
    }
  }

  .dog-picture {
    position: relative;
    overflow: hidden;
    padding: 0;

    .picture {
      overflow: hidden;
      height: $height-content;

      .slick-slider {
        z-index: 1;
        height: $height-content;
        div {
          height: $height-content;
        }
        img {
          margin-top: -5vh;
          height: 130%;
          float: right;
        }
      }
    }

    .wave {
      z-index: 2;
      height: 110vh;
      position: absolute;
      top: -1px;
      left: -10px;

      img {
        height: $height-content + 1;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .content {
    overflow-y: visible;
    height: auto;
    background: white;

    .profile-info-text {
      height: $height-content !important;
      overflow-y: hidden !important;
    }

    .picture {
      position: relative;
      top: 0;
      overflow-x: hidden;
      img {
        width: 100%;
        height: auto;
        margin-top: -8vh;
        object-fit: cover;
      }
    }

    .wave {
      z-index: 2;
      transform: rotate(90deg) scaleX(-1);
      position: absolute;
      top: 60vh;
      overflow: hidden;
      img {
        width: 250px;
        margin-left: 1vw;
      }
    }

    .profile-info {
      z-index: 3;
      background: white;
      position: absolute;
      top: 68vh;
      min-height: 10vh;
      padding: 20px;
      margin: 0 0 10vh !important;

      .row-buttons {
        height: 20vh;
        margin-bottom: 10vh !important;
      }
    }
  }
}
</style>
