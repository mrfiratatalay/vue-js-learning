<template>
    <div>
        <h1>I learned props configurations</h1>
        <button :class="theme">{{value}}</button>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    value: {
        type: [String, Number],
        required:true
    },
    width: {
        type: String,
        default: "100px"
    },
    theme: {
        type: String,
        default: "light",
        validator: (value) => ["light", "dark"].includes(value)
    }
})
</script>

<style scoped>
button {
  width: v-bind(width);
}
.light {
  background-color: #1DA1F2;
  color: white;
}
.dark {
  background-color: black;
  color: #1DA1F2;
}
</style>
