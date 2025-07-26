<template>
    <SocialPost
        v-for="(post, index) in posts"
        :key="post.userId"
        :username="post.username"
        :userId="post.userId"
        :avatarSrc="post.avatar"
        :comments="post.comments"
        :likes="post.likes"
        :retweets="post.retweets"
        @delete="onDelete(index)"
    />
</template>

<script setup>
import { reactive } from "vue";
import SocialPost from '../molecules/SocialPost.vue';

const onDelete = (postIndex) => {
    posts.splice(postIndex, 1);
}


const posts = reactive([
    { username: "Username one",
      userId: "@usernameId1",
      avatar: "https://i.pravatar.cc/60",
      post: "This is my post",
      comments: [
        "great post",
        "amazing post"
      ],
      likes: 2,
      retweets: 1,
      tags: [
        "tag 1"
      ]
    },
    { username: "Username two",
      userId: "@usernameId2",
      avatar: "https://i.pravatar.cc/70",
      post: "This is my second post",
      comments: [],
      likes: 3,
      retweets: 1,
      tags: [
        "tag 1",
        "tag 2"
      ]
    }
  ]);
</script>
