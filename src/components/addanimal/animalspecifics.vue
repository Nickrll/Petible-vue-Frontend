<template>
    <div class="animal-specifics">
        <div class="row">
            <div class="col-lg-12 col-xl-6">
                <h2>Birthday</h2>
                <b-form-datepicker id="dp-birthdate" v-model="animalSpecifics.dateOfBirth" class="mb-2" :max="maxDate"
                                   v-on:blur="updateData"></b-form-datepicker>
            </div>
            <div class="col-lg-12 col-xl-6">
                <h2>In shelter since</h2>
                <b-form-datepicker id="dp-in-shelter" v-model="animalSpecifics.inShelterSince" class="mb-2" :max="maxDate"
                                   v-on:blur="updateData"></b-form-datepicker>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <h2>Animal species</h2>
                <div class="scrolling-wrapper">
                    <div class="card">
                        <button class="btn dog" v-bind:class="{ selected: animalSpecifics.species === 'dog'}" v-on:click="clickBtn('dog')">
                            <i class="fas fa-dog"></i> <br/>
                            Dog
                        </button>
                    </div>
                    <div class="card">
                        <button class="btn cat" v-bind:class="{ selected: animalSpecifics.species === 'cat'}" v-on:click="clickBtn('cat')">
                            <i class="fas fa-cat"></i><br/>
                            Cat
                        </button>
                    </div>
                    <div class="card">
                        <button class="btn bird" v-bind:class="{ selected: animalSpecifics.species === 'bird'}" v-on:click="clickBtn('bird')">
                            <i class="fas fa-crow"></i><br/>
                            Bird
                        </button>
                    </div>
                    <div class="card">
                        <button class="btn other" v-bind:class="{ selected: animalSpecifics.species === 'other'}" v-on:click="clickBtn('other')">
                            <i class="fas fa-carrot"></i><br/>
                            Other
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <h2>Fees</h2>
                <vue-slider v-model="animalSpecifics.cost"
                            v-on:change="updateData" :max="1000" tooltip-formatter="€{value}"/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h2>Able to stay home alone</h2>
                <toggle-switch class="toggle=switch"
                        :options="myOptions"
                        :disabled="false"
                        v-model="animalSpecifics.timeFree"
                        name="timeFree"
                               v-on:change="updatetime"
                />
            </div>
        </div>
    </div>
</template>
<script>

    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/antd.css'
    import ToggleSwitch from 'vuejs-toggle-switch'
    export default {
        name: 'AnimalSpecifics',
        model: {
            prop: "specifics",
            event: "change"
        },
        props: {
            specifics: Object
        },
        components: {
            ToggleSwitch,
            VueSlider
        },
        data() {
            const now = new Date()
            const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
            return{
                maxDate: today,
                animalSpecifics:{
                    cost: 0,
                    species: null,
                    dateOfBirth: null,
                    inShelterSince: null,
                    timeFree: 0
                },
                timeval: "",
                myOptions: {
                    layout: {
                        color: '#777777',
                        backgroundColor: 'transparent',
                        selectedColor: 'white',
                        selectedBackgroundColor: 'transparent',
                        selectedBorderColor:"red",
                        borderColor: '#FFB75B',
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
                            {name: 'Long', color: 'white', backgroundColor: '#FFB75B'},
                            {name: 'Neutral', color: 'white', backgroundColor: '#FFB75B'},
                            {name: 'Short', color: 'white', backgroundColor: '#FFB75B'}
                        ]
                    }
                }
            }
        },
        methods:{
            updateData: function(){
                this.$emit("change", this.animalSpecifics)
            },
            clickBtn: function(species){
                this.animalSpecifics.species = species
                this.updateData()
            },
            updatetime: function(){
                if(this.genderval == "Long"){
                    this.animalSpecifics.timeFree = 10;
                } else if(this.genderval == "Neutral"){
                    this.animalSpecifics.timeFree = 9;
                } else {
                    this.animalSpecifics.timeFree = 4;
                }
                this.updateData();
            }
        }
    };
</script>
<style lang="scss">
    @import url("https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;700&family=Muli:wght@400;500;600;700&display=swap");
    @import "@/assets/colors";

    .animal-specifics{
        .row{
            margin-bottom: 2vh;
        }
        .toggle-switch{
            label{
                padding: 4px!important;
            }
        }
        .scrolling-wrapper {
            width: 100%;
            -webkit-overflow-scrolling: touch;
            overflow-x: scroll;
            overflow-y: hidden;
            white-space: nowrap;

            &::-webkit-scrollbar {
                display: none;
            }

            .card {
                background-color: transparent;
                display: inline-block;
                margin: 0px 5px 0px 5px;

                button{
                    height: 10vh;
                    width: 10vh;
                    padding: 5px;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    font-size: 1.2em;
                    text-align: center;
                }

                i{
                    font-size: 2.5em !important;
                    margin-bottom: 1vh;
                }

                .dog{
                    background-color: $pastel-pink;
                    color: $pink;
                }

                .cat{
                    background-color: $blue;
                    color: $dark-blue;
                }

                .bird{
                    background-color: $dark-yellow;
                    color: $pastel-creme;
                }

                .other{
                    background-color: $pastel-green;
                    color: $orange;
                }

                .selected{
                    background-color: white;
                    color: $primary;
                }
            }
        }

    }
</style>
