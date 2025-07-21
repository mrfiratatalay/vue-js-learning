<template>
  <div>
    <h1>This is my first component with props</h1>
    <SocialPost
      username="FIRAT ATALAY  👨‍💻"
      userId="firatatalay"
      avatarSrc="https://i.pravatar.cc/40?u=1"
      post="This is my first post with props in Vue.js"
    />
  </div>
</template>

<script setup>
import SocialPost from './components/molecules/SocialPost.vue';
</script>

