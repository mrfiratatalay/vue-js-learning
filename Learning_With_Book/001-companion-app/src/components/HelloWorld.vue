<template>
  <div>
    <SocialPost
    v-for="(post, index) in posts"
    :key="index"
    :username="post.username"
    :userId="post.userId"
    :avatarSrc="post.avatarSrc"
    :post="post.post"
    :tags="post.tags"
    />
  </div>
</template>


<script setup>
import { reactive } from 'vue';
import SocialPost from './molecules/SocialPost.vue';

const posts = reactive([
  {
    username: 'Alice',
    userId: '@alice',
    avatarSrc: 'https://i.pravatar.cc/42',
    post: 'Hello, this is Alice!',
    tags: ['vue', 'javascript']
  },
  {
    username: 'Bob',
    userId: '@bob',
    avatarSrc: 'https://i.pravatar.cc/43',
    post: 'Hi, I am Bob!',
    tags: []
  },
  {
    username: 'Charlie',
    userId: '@charlie',
    avatarSrc: 'https://i.pravatar.cc/44',
    post: 'Greetings from Charlie!',
    tags: ['vue', 'css']
  }
])

</script>


<style scoped>
/* Şu an özel stil yok, gerekirse buraya ekleriz */
</style>
