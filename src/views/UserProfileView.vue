<template>
    <section class="userView">
        <h2>User Information</h2>
        <template v-for="key in valuesToDisplay" :key="key">
            <label v-if="user[key]">
                {{ key }}
                <input
                    type="text"
                    disabled
                    :value="user[key]"
                />
            </label>
        </template>
    </section>
</template>

<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const user = reactive({});
const valuesToDisplay = [
    "title",
    "firstName",
    "lastName",
    "email",
    "picture",
    "gender"
];


const fetchUser = (userId) => {
    console.log('BAŞLADI - userId:', userId);

    const url = `https://dummyapi.io/data/v1/user/${userId}`;

    fetch(url, {
        "headers": {
        "app-id": "657a3106698992f50c0a5885"}
    })
    .then(response => {
        console.log('RESPONSE GELDİ:', response.status);
        return response.json();
    })
    .then(result => {
        console.log('DATA GELDİ:', result);
        Object.assign(user, result);
        console.log('USER OBJE:', user);
    })
    .catch(error => {
        console.log('HATA:', error);
    });
}

const route = useRoute();
fetchUser(route.params.userId);
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 1rem;
}
</style>
