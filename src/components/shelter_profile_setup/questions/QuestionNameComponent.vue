<template>
    <div class="form-group" :class="{ 'hasError': v.$error}">
        <h2>What is the name of your shelter?</h2>
        <input
            id="name"
            type="text"
            placeholder="Name"
            class="form-control input-setup"
            v-model="name"
            @input="v.$touch()"
        />
    </div>
</template>
<script>
    export default {
        name: "QuestionName",
        props: {
            value: {
                type: String,
                default: ""
            },
            v: {
                type: Object,
                required: true
            }
        },
        computed: {
            name: {
                get() {
                    return this.value;
                },
                set(value) {
                    this.$emit("input", value);
                }
            }
        }
    };
</script>
