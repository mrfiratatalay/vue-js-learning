<template>
    <div
    class="SocialPost"
    :class="{SocialPost__selected: selected}"
    @click="selected = !selected"
    >
        <div class="header">
            <img class="avatar" :src="avatarSrc"/>
            <div class="name">{{ username }}</div>
            <div class="userId">{{ userId }}</div>
        </div>
        <div class="post">{{ post }}</div>
    </div>

    <button @click="incrementLike">👍 Like {{ likeCount }} </button>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const selected = ref(false);

const props = defineProps({
    username: String,
    userId: String,
    avatarSrc: String,
    post: String
});

const likeCount = ref(0);

function incrementLike() {
    likeCount.value++;
}


onMounted(() => {
    console.log(props.username)
})

</script>


<style lang="scss">
.SocialPost {

    cursor:pointer;

    &__selected {
        border: 2px solid white;
        padding: 5px;
        background-color: rgba(239, 3, 3, 0.1);
    }
    .header {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
    }

    .avatar {
        border-radius: 50%;
        margin-right: 12px;
    }
    .name {
        font-weight: bold;
        margin-right: 8px;
        color: white;
    }
}

</style>
