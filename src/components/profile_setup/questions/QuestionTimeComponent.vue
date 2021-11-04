<template>
  <div>
    <h2>What's the max time your household is away from home?</h2>
    <div class="radio-buttons">
      <label>
        <input
          id="max-time-4"
          type="radio"
          class="option-input radio"
          name="time"
          :value=4
          @click="$emit('change', 4)"
          checked
        />
        0-4 hours
      </label>
      <br />
      <label>
        <input
          id="max-time-9"
          type="radio"
          class="option-input radio"
          name="time"
          :value=9
          @click="$emit('change', 9)"
        />
        5-9 hours
      </label>
      <br />
      <label>
        <input
          id="max-time-10"
          type="radio"
          class="option-input radio"
          name="time"
          :value=10
          @click="$emit('change', 10)"
        />
        10+ hours
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "QuestionTime",
  model: {
    prop: "time",
    event: "change"
  },
  props: {
    time: Number
  }
};
</script>
