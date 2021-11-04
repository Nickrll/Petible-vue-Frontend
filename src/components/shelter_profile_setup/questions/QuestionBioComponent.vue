<template>
  <div>
    <h2>Tell us something about your shelter!</h2>
    <textarea
    id="bio"
      class="form-control input-setup"
      :value="bio"
      v-on:change="$emit('change', $event.target.value)"
    ></textarea>
  </div>
</template>
<script>
export default {
  name: "QuestionBio",
  model: {
    prop: "bio",
    event: "change",
  },
  props: {
    bio: String,
  },
};
</script>
