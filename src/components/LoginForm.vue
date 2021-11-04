<template>
  <div
    class="login-block col-xl-4 offset-xl-7 col-lg-6 offset-lg-5 col-md-7 offset-md-3 col-sm-10 offset-sm-1"
  >
    <h1 class="d-none d-sm-block">Petible</h1>
    <div class="subtitle d-none d-sm-block">
      Your new friend is waiting for you!
    </div>
    <div class="col-10 offset-1 col-lg-10 offset-lg-1 col-sm-10 offset-sm-1">
      <h2>Login</h2>

      <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
        <label class="form__label">Email address</label>
        <input
          id="email"
          type="text"
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

      <div class="error" v-if="!$v.password.required">Password is required</div>
      <div class="error" v-if="!$v.email.required">Email is required</div>
      <div class="error" v-if="!$v.email.minLength">
        Email needs to be between {{ $v.email.$params.minLength.min }}.
      </div>

      <div class="row align-items-center">
        <router-link id="redirectRegister" to="/register" class="col-md-8">
          <a>New here? Let's get poochhunting!</a>
        </router-link>
        <div class="col-md-3 no-gutter">
          <button id="btnLogin" @click="login">Sign in</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { authclient } from '../main'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    }
  },
  validations: {
    email: {
      required,
      minLength: minLength(4),
    },
    password: {
      required,
    },
  },
  methods: {
    setEmail(value) {
      this.email = value
      this.$v.email.$touch()
    },
    setPassword(value) {
      this.password = value
      this.$v.password.$touch()
    },
    login() {
      if (!this.$v.$invalid) {
        authclient({
          method: 'post',
          url: '/auth',
          data: {
            email: this.email,
            password: this.password,
            returnSecureToken: 'true',
          },
        })
          .then((result) => {
            localStorage.jwt = result.data.idToken
            localStorage.id = result.data.localId
            localStorage.role = result.data.role

            if(result.data.role === 1){
              this.$router.push({ path: 'animals' })
            }
            else{
              this.$router.push({ path: 'discover' })
            }
          })
          .catch((error) => {
            this.errorMessage = error.message
          })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../assets/colors';

.login-block {
  background-color: white;
  border-radius: 10px;
  height: 65vh;
  margin-top: 10vh;

  h1 {
    font-weight: 700 !important;
    font-size: 3em !important;
    text-align: center;
    margin-top: 3vh;
  }

  h2 {
    font-weight: 700 !important;
    font-size: 1.7em !important;
    margin-top: 3vh;
    margin-bottom: 2vh;
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
    margin-bottom: 3vh;
    width: 100%;
    border: none;
    box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.15);

    &:focus {
      border: 0px;
      outline: 0px;
    }
  }
  label {
    width: 100%;
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
