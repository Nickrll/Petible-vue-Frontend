<template>
  <div>
    <h2>
      Have you got any small kids?
      <span style="font-weight: normal">( below 10 years old )</span>
    </h2>
    <div class="radio-buttons">
      <label>
        <input
        id="children-yes"
          type="radio"
          class="option-input radio"
          name="children"
          @click="$emit('change', true)"
          checked
        />
        Yes
      </label>
      <br />
      <label>
        <input
        id="children-no"
          type="radio"
          class="option-input radio"
          name="children"
          @click="$emit('change', false)"
        />
        No
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "QuestionChildren",
  model: {
    prop: "children",
    event: "change",
  },
  props: {
    children: Boolean,
  },
};
</script>
