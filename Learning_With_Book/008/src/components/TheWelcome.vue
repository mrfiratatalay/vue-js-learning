<template>
  <SocialPost
    :username="posts[0].username"
    :userId="posts[0].userId"
    :avatarSrc="posts[0].avatar"
    :post="posts[0].post"
    :comments="posts[0].comments"
    :likes="posts[0].likes"
    :retweets="posts[0].retweets"
  ></SocialPost>
  <SocialPost
    :username="posts[1].username"
    :userId="posts[1].userId"
    :avatarSrc="posts[1].avatar"
    :post="posts[1].post"
    :comments="posts[1].comments"
    :likes="posts[1].likes"
    :retweets="posts[1].retweets"
  ></SocialPost>
  <SocialPost
    :username="posts[2].username"
    :userId="posts[2].userId"
    :avatarSrc="posts[2].avatar"
    :post="posts[2].post"
    :comments="posts[2].comments"
    :likes="posts[2].likes"
    :retweets="posts[2].retweets"
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
    likes: 2,
    retweets: 1,
    tags: [
      "tag 1"
    ]
  },
  { username: "Username two",
    userId: "usernameId2",
    avatar: "https://i.pravatar.cc/40",
    post: "This is my second post",
    comments: [],
    likes: 0,
    retweets: 0,
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
    likes: 1,
    retweets: 0,
    tags: [
      "tag 1",
      "tag 2",
      "tag 3"
    ]
  }

]);

</script>
