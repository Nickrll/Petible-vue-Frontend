<template>
  <div>
    <h2>Pick a logo, or choose one of the following</h2>
    <div class="row corona">
      <div 
        class="image-click col-md-3 col-sm-3" 
        :value="logo"
        v-on:click="$emit('change', $event.target.id)">
      </div>
      <div 
        class="image-click col-md-3 col-sm-3" 
        :value="logo"
        v-on:click="$emit('change', $event.target.id)">
      </div>
      <div 
        class="image-click col-md-3 col-sm-3" 
        :value="logo"
        v-on:click="$emit('change', $event.target.id)">
      </div>
      <div 
        class="image-click col-md-3 col-sm-3" 
        :value="logo"
        v-on:click="$emit('change', $event.target.id)">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "QuestionLogo",
  model: {
    prop: "logo",
    event: "change"
  },
  props: {
    logo: String
  },
};
</script>
<style lang="scss" scoped>
  .image-click{
    height: 65px;
    width: 65px;
  }
  .corona{
    margin-bottom: 30px;
  }
</style>