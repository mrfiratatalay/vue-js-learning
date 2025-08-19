<template>
    <footer>
        <ul>
            <li v-for="(link, index) in links" :key="index" v-text="link"></li>
        </ul>
    </footer>
</template>

<script setup>
const links = [
    'Privacy Policy',
    'Terms of Service',
    'Contact Us',
    'About Us'
];
</script>

<style scoped>
footer {
  background-color: #f4f4f4;
  padding: 12px;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 16px;
}

li {
  font-weight: bold;
  color: #333;
  cursor: pointer;
}
</style>
