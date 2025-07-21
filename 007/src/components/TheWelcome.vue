<template>
  <SocialPost
    :username="posts[0].username"
    :userId="posts[0].userId"
    :avatarSrc="posts[0].avatar"
    :post="posts[0].post"
    :comments="posts[0].comments"
  ></SocialPost>
  <SocialPost
    :username="posts[1].username"
    :userId="posts[1].userId"
    :avatarSrc="posts[1].avatar"
    :post="posts[1].post"
    :comments="posts[1].comments"
  ></SocialPost>
  <SocialPost
    :username="posts[2].username"
    :userId="posts[2].userId"
    :avatarSrc="posts[2].avatar"
    :post="posts[2].post"
    :comments="posts[2].comments"
  ></SocialPost>
</template>

<script setup>
import { reactive } from 'vue';
import SocialPost from './molecules/SocialPost.vue';

const posts = reactive([
  { username: "Username one",
    userId: "usernameId1",
    avatar: "https://i.pravatar.cc/70",
    post: "This is my post",
    comments: [
      "great post",
      "amazing post"
    ],
    tags: [
      "tag 1"
    ]
  },
  { username: "Username two",
    userId: "usernameId2",
    avatar: "https://i.pravatar.cc/40",
    post: "This is my second post",
    comments: [],
    tags: [
      "tag 1",
      "tag 2"
    ]
  },
  {
    username: "Username three",
    userId: "usernameId3",
    avatar: "https://i.pravatar.cc/60",
    post: "This is my third post",
    comments: [
      "awesome post"
    ],
    tags: [
      "tag 1",
      "tag 2",
      "tag 3"
    ]
  }

]);

</script>
