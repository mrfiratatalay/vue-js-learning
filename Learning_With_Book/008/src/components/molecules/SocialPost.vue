<template>
  <div
    class="SocialPost"
    :class="{ SocialPost__selected: selected}"
    @click="onSelectedClick"
  >
    <div class="header">
      <img class="avatar" :src="avatarSrc" />
      <div class="name">{{ username }}</div>
      <div class="userId">{{ userId }}</div>
    </div>
    <div class="post" v-text="post"></div>

    <button v-show="hasComments"
      @click="onShowCommentClick">
        Show Comments
    </button>

    <SocialPostComments
    v-if="showComments"
    :comments="comments"
    />

    <div class="interactions">
      <span v-if="likes > 0">{{ likes }} Likes</span>
      <span v-if="retweets > 0">{{ retweets }} Retweets</span>
      <span v-if="interactions > 0">{{ interactions }} Interactions</span>
    </div>
  </div>


</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import SocialPostComments from './SocialPostComments.vue';

const selected = ref(false);
const showComments = ref(false);

const onSelectedClick = () => {
  selected.value = !selected.value;
}

const onShowCommentClick = () => {
  showComments.value = !showComments.value;
}

const hasComments = computed(() => {
  return props.comments.length > 0;
});


const props = defineProps({
    username: String,
    userId: String,
    avatarSrc: String,
    post: String,
    comments: Array,
    likes: Number,
    retweets: Number,
})

const interactions = computed(() => {
  const comments = props.comments.length;
  return comments + props.likes + props.retweets;
})

onMounted(() => {
    console.log('SocialPost component mounted with props:', props.username);
})
</script>



<style lang="scss">
.SocialPost {
  background: linear-gradient(135deg, #d8ea66 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 24px;
  margin: 16px 0;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(31, 38, 135, 0.5);
  }

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    position: relative;
    z-index: 2;
  }

  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 16px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
      border-color: rgba(255, 255, 255, 0.6);
    }
  }

  .name {
    font-weight: 700;
    font-size: 16px;
    margin-right: 12px;
    color: #ffffff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    letter-spacing: 0.5px;
  }

  .userId {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    font-weight: 400;
    opacity: 0.8;
  }

  .post {
    margin-top: 16px;
    color: #ffffff;
    font-size: 16px;
    line-height: 1.6;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 2;

    &::selection {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  .interactions {
    margin-top: 16px;
    display: flex;
    gap: 12px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    position: relative;
    z-index: 2;

    span {
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: #ffffff;
      }
    }
  }

  // Dark theme variant
  &.dark-theme {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);

    .name {
      color: #e8f4f8;
    }

    .userId {
      color: rgba(232, 244, 248, 0.6);
    }

    .post {
      color: #e8f4f8;
    }
  }

  // Light theme variant
  &.light-theme {
    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
    color: #333;

    .name {
      color: #2c3e50;
      text-shadow: none;
    }

    .userId {
      color: rgba(44, 62, 80, 0.6);
    }

    .post {
      color: #2c3e50;
      text-shadow: none;
    }
  }

  // Responsive design
  @media (max-width: 768px) {
    padding: 20px;
    margin: 12px 0;

    .avatar {
      width: 40px;
      height: 40px;
      margin-right: 12px;
    }

    .name {
      font-size: 15px;
    }

    .userId {
      font-size: 13px;
    }

    .post {
      font-size: 15px;
    }
  }

  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 12px;

    .header {
      margin-bottom: 12px;
    }

    .post {
      margin-top: 12px;
    }
  }
}
</style>
