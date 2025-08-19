<template>
  <SocialPost
    v-for="(post, index) in posts"
    :username="post.owner.firstName"
    :id="post.id"
    :avatarSrc="post.image"
    :post="post.text"
    :likes="post.likes"
    :key="post.id"
    :postData="post"

    @delete="removePost(index)"
  ></SocialPost>
</template>

<script setup>

import { storeToRefs } from 'pinia';
import { usePostsStore } from '../../stores/posts';

import { watch } from 'vue';
import SocialPost from '../molecules/SocialPost.vue';

const postsStore = usePostsStore();


const { posts } = storeToRefs(postsStore);
const { fetchPosts, removePost } = postsStore;


watch(
    posts.value,
    (newValue) => {
      if( newValue.length <= 3 ) {
        fetchPosts(true);
      }
    }
  )

fetchPosts();

</script>
