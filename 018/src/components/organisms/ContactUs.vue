<template>
    <form @submit="handleSubmit">
        <label for="email">Email</label>
        <label for="message">Message</label>
        <TheButton>Send</TheButton>
    </form>
</template>

<script setup>
import TheButton from "../atoms/TheButton.vue";
const handleSubmit = ({email, message}) => {
    console.log("email:", email);
    console.log("message:", message)
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  width: 60%;
}
.error {
  color: red;
}
</style>
