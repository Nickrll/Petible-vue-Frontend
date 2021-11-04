<template>
  <div
    class="register-block col-xl-4 offset-xl-7 col-lg-6 offset-lg-5 col-md-7 offset-md-3 col-sm-10 offset-sm-1"
  >
    <h1 class="d-none d-sm-block">Petible</h1>
    <div class="subtitle d-none d-sm-block">
      Let's find your new pawl together!
    </div>
    <div class="col-10 offset-1 col-lg-10 offset-lg-1 col-sm-10 offset-sm-1">
      <h2>Register</h2>
      <div class="row justify-content-center">
        <label>Are you an adopter or a shelter?</label>
        <select class="form-control" name="role" v-model="role">
          <option :value="2">Adopter</option>
          <option :value="1">Shelter</option>
        </select>

        <div
          class="form-group"
          :class="{ 'form-group--error': $v.email.$error }"
        >
          <label>Email address</label>
          <input
            id="email"
            type="email"
            v-model="email"
            class="form__input"
            v-model.trim="$v.email.$model"
          />
        </div>

        <div
          class="form-group"
          :class="{ 'form-group--error': $v.password.$error }"
        >
          <label>Password</label>
          <input
            id="password"
            type="password"
            v-model="password"
            class="form__input"
            v-model.trim="$v.password.$model"
          />
        </div>

        <div
          class="form-group"
          :class="{ 'form-group--error': $v.repeatPassword.$error }"
        >
          <label>Repeat your password</label>
          <input
            id="passwordRepeat"
            type="password"
            v-model="repeatPassword"
            class="form__input"
            v-model.trim="$v.repeatPassword.$model"
          />
        </div>
        <p v-if="errorMessage != ''" class="error">{{ errorMessage }}</p>
      </div>
      <div class="error" v-if="!$v.email.required">Email is required</div>
      <div class="error" v-if="!$v.email.minLength">
        Email needs to be at least {{ $v.email.$params.minLength.min }} long.
      </div>
      <div class="error" v-if="!$v.password.required">Password is required</div>
      <div class="error" v-if="!$v.repeatPassword.sameAsPassword">
        Both password fields need to be the same.
      </div>
      <div class="row align-items-center">
        <router-link id="redirectLogin" to="/login" class="col-md-8">
          <a>Already have an account? Let's go back</a>
        </router-link>
        <div class="col-md-3 no-gutter">
          <!-- <button id="register-btn" @click="register">Submit</button> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { authclient } from '../main'
import { required, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'RegisterForm',
  data() {
    return {
      email: '',
      password: '',
      repeatPassword: '',
      errorMessage: '',
      role: 2,
    }
  },
  validations: {
    email: {
      required,
      minLength: minLength(5),
    },
    password: {
      required,
    },
    repeatPassword: {
      sameAsPassword: sameAs('password'),
    },
  },
  methods: {
    getEmail(value) {
      this.email = value
      this.$v.email.$touch()
    },
    setPassword(value) {
      this.password = value
      this.$v.password.$touch()
    },
    setRepeatPassword(value) {
      this.repeatPassword = value
      this.$v.repeatPassword.$touch()
    },
    // register() {
    //   if (!this.$v.$invalid) {
    //     authclient({
    //       method: 'put',
    //       url: '/auth',
    //       data: {
    //         email: this.email,
    //         password: this.password,
    //         role: this.role,
    //         returnSecureToken: 'true',
    //       },
    //     })
    //       .then((result) => {
    //         localStorage.jwt = result.data.idToken
    //         localStorage.id = result.data.localId
    //         localStorage.role = result.data.role

    //         if (localStorage.role === "1") {
    //           this.$router.push('/setup-shelter')
    //         } else if (localStorage.role === "2") {
    //           this.$router.push({ path: '/setup' })
    //         }
    //       })
    //       .catch((error) => {
    //         this.errorMessage = error.message
    //       })
    //   }
    // },
  },
}
</script>
<style lang="scss" scoped>
@import '../assets/colors';

.register-block {
  overflow-y: auto;
  background-color: white;
  border-radius: 10px;
  height: 71vh;
  margin-top: 10vh;

  .error {
    color: $primary !important;
  }

  h1 {
    font-weight: 700 !important;
    font-size: 3em !important;
    text-align: center;
    margin-top: 3vh;
  }

  h2 {
    font-weight: 700 !important;
    font-size: 1.7em !important;
    margin-top: 2.5vh;
    margin-bottom: 2vh;
    text-align: left;
  }

  .subtitle {
    color: $blue;
    text-align: center;
    font-size: 1.5em;
    width: 60%;
    margin: auto;
  }

  input {
    padding: 10px 15px;
    color: $primary-light;
    border-radius: 15px;
    background-color: $creme;
    margin: auto;
    margin-bottom: 2.5vh;
    width: 100%;
    border: none;
    box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.15);

    &:focus {
      border: 0px;
      outline: 0px;
    }
  }
  label,
  .form-group {
    width: 100%;
    text-align: left;
  }
  .form-group {
    margin-bottom: -1px;
  }

  button {
    background-color: $primary;
    color: white;
    font-size: 0.9em;
    float: right;
    padding: 10px 15px;
    border-radius: 15px;
    border: none;
    transition: background-color ease-in-out 500ms;

    &:hover {
      background-color: $primary-dark;
    }
  }

  a {
    font-size: 0.8 !important;
  }
}
</style>
