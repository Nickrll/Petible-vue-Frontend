<template>
  <div>
    <div>
      <h2>Tell us something about yourself!</h2>
      <textarea
        id="bio"
        class="form-control input-setup"
        :value="bio"
        v-on:change="changevalue($event.target.value)"
      ></textarea>
    </div>
  </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: "QuestionBio",
  model: {
    prop: "bio",
    event: "change",
  },
   validate: {
    bio: {
      required
    }
  },
  props: {
    bio: String,
  },
  methods: {
    changevalue(value){
      this.$emit('change', value)
    }
  }
};
</script>
