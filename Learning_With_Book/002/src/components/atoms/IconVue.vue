<template>
    <img :src="iconPath" :class="sizeClass"/>
</template>




<script>
export default {
    name: 'IconVue',
    props: {
        size: String,
        name: String
    },
    computed: {
        iconPath() {
            return `/public/${this.name}.svg`;
        },
        sizeClass() {
            return `${this.size}-icon`;
        }


    }
}

</script>


<style scoped>
.small-icon {
  width: 16px;
  height: 16px;
}
.medium-icon {
  width: 32px;
  height: 32px;
}
.large-icon {
  width: 48px;
  height: 48px;
}
</style>
