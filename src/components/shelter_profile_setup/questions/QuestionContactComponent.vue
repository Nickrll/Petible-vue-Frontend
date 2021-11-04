<template>
  <div class="form-group" :class="{ 'hasError': v.$error}">
    <h2>{{title}}</h2>
    <input 
      id="website"
      type="text"
      class="form-control input-setup"
      v-model="model"
      @input="v.$touch()"
    />
  </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: "QuestionContact",
  validate: {
    value: {
      required
    }
  },
  props: {
    value: {
      String,
      default: ""
    },
    v:{
      type: Object,
      required: true
    },
    title: String
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>
