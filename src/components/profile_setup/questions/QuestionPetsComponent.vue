<template>
  <div>
    <h2>Have you got any pets already?</h2>
    <div class="radio-buttons">
      <label>
        <input
        id="pets-yes"
          type="radio"
          class="option-input radio"
          name="pets"
          @click="$emit('change', true)"
          checked
        />
        Yes
      </label>
      <br />
      <label>
        <input
        id="pets-no"
          type="radio"
          class="option-input radio"
          name="pets"
          @click="$emit('change', false)"
        />
        No
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "QuestionPets",
  model: {
    prop: "pets",
    event: "change",
  },
  props: {
    pet: Boolean,
  },
};
</script>
