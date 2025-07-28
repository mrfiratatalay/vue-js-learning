<template>
    <SocialPost
        v-for="(post, index) in posts"
        :key="post.id"
        :username="post.owner.firstName"
        :id="post.id"
        :avatarSrc="post.image"
        :post="post.text"
        :likes="post.likes"
        @delete="onDelete(index)"
    />
</template>

<script setup>
import { reactive } from "vue";
import SocialPost from '../molecules/SocialPost.vue';

const onDelete = (postIndex) => {
    posts.splice(postIndex, 1);
}


const posts = reactive([]);

const fetchPosts = () => {
  const baseUrl = "https://dummyapi.io/data/v1";
  fetch(`${baseUrl}/post?limit=5`, {
    headers: {
      "app-id": "657a3106698992f50c0a5885"
    }
  })
    .then(response => response.json())
    .then(result => {
      posts.push(...result.data);
    });
}

fetchPosts();

</script>
