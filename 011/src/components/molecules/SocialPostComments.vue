<template>
    <div class="SocialPostComments">
        <p>Comments:</p>
        <div v-for="(comment, index) in comments" :key="index">
            <p>{{ comment }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  comments: Array
})
</script>
