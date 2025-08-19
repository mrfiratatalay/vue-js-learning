<template>
  <div>
    <h1>I am starting to learn "Ref and Reactive"</h1>
    <HelloWorld
      :username="posts[0].username"
      :userId="posts[0].userId"
      :avatarSrc="posts[0].avatarSrc"
      :post="posts[0].post"
    />
    <HelloWorld
      :username="posts[1].username"
      :userId="posts[1].userId"
      :avatarSrc="posts[1].avatarSrc"
      :post="posts[1].post"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

const posts = reactive([
  {
    username: 'John Doe',
    userId: 1,
    avatarSrc: 'https://i.pravatar.cc/150',
    post: 'This is my first post!'
  },
  {
    username: 'Jane Smith',
    userId: 2,
    avatarSrc: 'https://i.pravatar.cc/151',
    post: 'Hello, world!'
  }
])
</script>
