<template>
    <template v-if="comments.length === 0">
    There are no comments for this post
    </template>

    <template v-else>
        <p>Comments:</p>
        <div v-for="{ owner, message } in comments" :key="owner.id" class="comment">
            <p>{{ owner.firstName }}: <strong>{{ message }}</strong></p>
        </div>
    </template>
</template>

<script setup>
import { reactive } from "vue";

const props = defineProps({
    postId: String
})
const comments = reactive([]);


const fetchComments = (postId) => {
    const baseUrl = "https://dummyapi.io/data/v1";
    return fetch(`${baseUrl}/post/${postId}/comment?limit=5`, {
        headers: { "app-id": "657a3106698992f50c0a5885" }
    })
        .then(response => response.json())
        .then(result => {
            Object.assign(comments, result.data)
        });
}
await fetchComments(props.postId);
</script>


<style scoped>
.comment {
    margin-bottom: 10px;
    padding: 8px;
    border-left: 3px solid #ccc;
    background-color: #f9f9f9;
}
</style>
