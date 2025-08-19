<template>
  <div>
    <SocialPost
    :username="posts[0].username"
    :userId="posts[0].userId"
    :avatarSrc="posts[0].avatarSrc"
    :post="posts[0].post"
    />
    <SocialPost
    :username="posts[1].username"
    :userId="posts[1].userId"
    :avatarSrc="posts[1].avatarSrc"
    :post="posts[1].post"
    />
    <SocialPost
    :username="posts[2].username"
    :userId="posts[2].userId"
    :avatarSrc="posts[2].avatarSrc"
    :post="posts[2].post"
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
    post: 'Hello, this is Alice!'
  },
  {
    username: 'Bob',
    userId: '@bob',
    avatarSrc: 'https://i.pravatar.cc/43',
    post: 'Hi, I am Bob!'
  },
  {
    username: 'Charlie',
    userId: '@charlie',
    avatarSrc: 'https://i.pravatar.cc/44',
    post: 'Greetings from Charlie!'
  }
])

</script>


<style scoped>
/* Şu an özel stil yok, gerekirse buraya ekleriz */
</style>
