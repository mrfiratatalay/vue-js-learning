<template>
    <div class="SocialPost">
        <div class="header">
            <img class="avatar" :src="avatarSrc"/>
            <div class="name">{{ username }}</div>
            <IconDelete @click="onDeleteClick" />
        </div>
        <div class="post" v-text="post"></div>
        <SocialPostComments
          v-if="showComments"
          :post-id="id"

        />
        <div class="interactions">
            <IconHeart />
            {{ likes }}
            <IconCommunity />
            <TheButton
                @click="onShowCommentClick"
                value="Show Comment"
                width="auto"
                theme="dark"
                data-cy="showCommentButton"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import TheButton from '../atoms/TheButton.vue';
import IconCommunity from '../icons/IconCommunity.vue';
import IconDelete from '../icons/IconDelete.vue';
import IconHeart from '../icons/IconHeart.vue';
import SocialPostComments from './SocialPostComments.vue';

const showComments = ref(false);
const onShowCommentClick = () => {
    showComments.value = !showComments.value;
}

const props = defineProps({
    username: String,
    id: String,
    avatarSrc: String,
    post: String,
    likes: Number,
});


const emit = defineEmits(["delete"]);
const onDeleteClick = () => {
    emit("delete");
}
</script>


<style lang="scss">
.SocialPost{
  margin-bottom:16px;
  &__selected{
    border: white solid 1px;
  }
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 8px;;
  }
  .avatar {
    border-radius: 50%;
    width: 40px;
    height: 40px;;
    margin-right: 12px;
  }
  .name {
    font-weight: bold;
    margin-right: 8px;
    color: black;  // veya #333
  }
  .interactions {
    display: flex;
    font-weight: bold;
    margin-top: 8px;
    gap:8px;
  }
  svg {
    width: 24px;
    height: 24px;
    fill: var(--color-input-soft);
    cursor:pointer;
  }
}
</style>
