<template>
    <div class="animal-general">
        <div class="row">
            <div class="col-lg-12 col-xl-6">
                <h2>Name of Pet</h2>
                <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        class="form-control"
                        v-model="animalKnowledge.name"
                        v-on:blur="updateData"
                />
            </div>
            <div class="col-lg-12 col-xl-6">
                <h2>Gender</h2>
                <toggle-switch class="toggle=switch"
                               :options="myOptions"
                               :disabled="false"
                               v-model="genderval"
                               name="gender"
                               v-on:change="updategender"
                />
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <h2>Description</h2>
                <textarea
                        id="bio"
                        class="form-control"
                        v-model="animalKnowledge.description"
                        v-on:blur="updateData"
                ></textarea>
            </div>
        </div>
    </div>
</template>
<script>

    import ToggleSwitch from 'vuejs-toggle-switch'
    export default {
        name: 'GeneralKnowledge',
        components: {
            ToggleSwitch
        },
        model: {
            prop: 'knowledge',
            event: 'change'
        },
        props: {
          knowledge: Object
        },
        data() {
            return{
                animalKnowledge:{
                    name: null,
                    gender: null,
                    description: null,
                },
                genderval: null,
                myOptions: {
                    layout: {
                        color: '#777777',
                        backgroundColor: 'transparent',
                        selectedColor: 'white',
                        selectedBackgroundColor: 'transparent',
                        selectedBorderColor:"red",
                        borderColor: '#c3c3c3',
                        fontFamily: '"Hind", sans-serif',
                        fontWeight: 'normal',
                        fontWeightSelected: 'none',
                        squareCorners: false,
                        noBorder: false
                    },
                    size: {
                        fontSize: 1,
                        height: 2,
                        width: 15
                    },
                    items: {
                        delay: .4,
                        preSelected: 'unknown',
                        disabled: false,
                        labels: [
                            {name: 'Male', color: 'white', backgroundColor: '#538697'},
                            {name: 'Female', color: 'white', backgroundColor: '#f59689'}
                        ]
                    }
                }
            }
        },
        methods: {
            updateData: function () {
                this.$emit("change", this.animalKnowledge)
            },
            updategender: function (){
                if(this.genderval == "Female"){
                    this.animalKnowledge.gender = false;
                } else {
                    this.animalKnowledge.gender = true;
                }
                this.updateData();
            }
        }
    };
</script>
<style lang="scss">
    @import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;700&family=Muli:wght@400;500;600;700&display=swap");
    @import "@/assets/colors";

    .animal-general{
        .row{
            margin-bottom: 2vh;
        }
        .toggle-switch{
            label{
                padding: 4px!important;
            }
        }
        input {
            background-color: $pastel-orange;
            width: 100%;
            border: none;
            &:focus{
                background-color: $pastel-orange;
            }
        }
        textarea {
            background-color: $pastel-orange;
            width: 100%;
            border: none;
            height: 150px;
            resize: none;
            &:focus{
                background-color: $pastel-orange;
            }
        }
    }
</style>
