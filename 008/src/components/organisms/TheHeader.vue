<template>
    <header>
        <div v-html="logo"></div>
        <h1>Companion App</h1>
        <a href="#">
            <span v-text="fullName"></span>
        </a>
    </header>
</template>

<script setup>
import { computed, ref } from 'vue';

const name = ref("Firat");
const surname = ref("Atalay");
const fullName = computed(() => {
  return `${name.value} ${surname.value}`;
});


const logo = `<svg
  height="50"
  width="50"
  viewBox="0 0 210 210"
>
  <polygon
  	points="100,10 40,198 190,78 10,78 160,198"
    style="fill:grey;"/>
</svg>`;
</script>


<style lang="scss">
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-column-start: 1;
    grid-column-end: 3;
    margin-bottom:24px;

    a span {
        font-weight: bold;
    }
}

</style>
