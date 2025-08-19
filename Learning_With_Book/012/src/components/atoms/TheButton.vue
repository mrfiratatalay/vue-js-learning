<template>
    <button
        :class="theme"
        :style="{ width: width }"
    >
     <slot>Click me</slot>
    </button>
</template>

<script setup>
defineProps({
    width: {
        type: String,
        default: "100px"
    },
    theme: {
        type: String,
        default: "light",
        validator: (value) => ["light", "dark"].includes(value)
    }
})
</script>

<style scoped>
button {
    height: 40px;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid transparent;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 80px;
}

.light {
    background-color: #1DA1F2;
    color: white;
    border-color: #1DA1F2;
}

.light:hover {
    background-color: #1991db;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(29, 161, 242, 0.3);
}

.dark {
    background-color: transparent;
    color: #1DA1F2;
    border: 1px solid #1DA1F2;
}

.dark:hover {
    background-color: #1DA1F2;
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(29, 161, 242, 0.3);
}

button:active {
    transform: translateY(0);
}
</style>
