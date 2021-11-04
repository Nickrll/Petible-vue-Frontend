<template>
  <div>
    <div>
      <h3>{{ title }}</h3>
      <input
        :id=title
        type="text"
        class="form-control input-setup"
        :value="social_media"
        @input="$emit('change', $event.target.value)"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "QuestionSocialMedia",
  model: {
    prop: "social_media",
    event: "change"
  },
  props: {
    social_media: String,
    title: String
  },
  methods: {
    // update(key, value) {
    //   this.$emit('social_media', { ...this.value, [key]: value })
    // },
  }
};
</script>
