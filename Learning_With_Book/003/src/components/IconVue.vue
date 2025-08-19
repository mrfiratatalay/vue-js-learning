<template>
    <img :src="iconPath" :class="sizeClass" />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    size: String,
    name: String
})

const iconPath = computed(() => `/public/${props.name}.svg`)
const sizeClass = computed(()=>`${props.size}-icon`)
</script>


<style scoped>
.small-icon {
  width: 16px;
  height: 16px;
}
.medium-icon {
  width: 32px;
  height: 32px;
}
.large-icon {
  width: 48px;
  height: 48px;
}
</style>
