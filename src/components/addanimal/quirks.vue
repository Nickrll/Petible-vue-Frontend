<template>
  <div class="animal-quirks">
    <h1>Quirks</h1>
    <div>
      <div class="selectable row">
        <div class="selected" v-on:click="change(q)" v-for="q in quirklist" :key="q.id">
          <quirk v-bind:id="q.name" class="quirk" :title="q.name"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import quirk from '@/components/Quirk.vue'
  import axios from "axios";

  export default {
    name: 'Quirks',
    components: {
      quirk
    },
    data() {
      return{
        test: null,
        quirklist: [
          {
            id: "",
            name: "",
          }
        ],
        activequirks: [
        
        ]
      }
    },
    mounted(){
      axios
        .get("https://petibleapi.lifelinks.nl/api/v1/Quirk", 
          {
            headers: {
              Authorization: "Bearer " + localStorage.jwt,
            },
          })
        .then(response => 
          (
            this.quirklist = response.data
          )
        )
    },
    methods: {
      change(value){
        if(this.activequirks.find(o => o.id === value.id) == undefined){
          document.getElementById(value.name).style.backgroundColor = "#FFB75B"      
          this.activequirks.push({id: value.id})
        } else{
          document.getElementById(value.name).style.backgroundColor = "#FFDFB7"

          this.activequirks.splice(this.activequirks.findIndex(o => o.id === value.id), 1)
        }
        this.$emit('childToParent', this.activequirks)
      },
    }
  };
</script>
<style lang="scss">
  @import "../../assets/colors";

  .animal-quirks{
    background-color: #fafafa;
  }
  .selectable{
    margin-left: 15px;
  }
  .quirk:hover{
    cursor: pointer;
    background-color: $dark-yellow;
   }
   .quirk{
     background-color: $yellow;
     color: black;
   }
</style>
