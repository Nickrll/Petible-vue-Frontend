<template>
    <div class="quirk" :class="colour">
        {{ title }}
    </div>
</template>

<script>
    export default {
        name: "Quirk",
        props: {
            title: String
        },
        data() {
            return {
                colour: ""
            };
        },
        mounted() {
            let colours = [
                "quirk-blue",
                "quirk-green",
                "quirk-creme",
                "quirk-primary-light"
            ];
            this.colour = colours[Math.floor(Math.random() * colours.length)];
        }
    };
</script>

<style lang="scss">
    @import "../assets/colors";
    .quirk-blue {
        background: $blue;
        color: white;
    }

    .quirk-green {
        background: $green;
        color: white;
    }

    .quirk-creme {
        background: $creme;
        color: $text;
    }

    .quirk-primary-light {
        background: $primary-light;
        color: $text;
    }

    .quirk {
        display: inline-block;
        padding: 5px 15px 5px 15px;
        border-radius: 30px;
        margin-right: 8px;
        margin-top: 8px;
    }
</style>
