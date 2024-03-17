<!-- /products/:id -->

<template>
    <div>
        <p>Product Detail For {{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, a.</p>
        <nuxt-link to="/">Back to home</nuxt-link>
    </div>
</template>

<script setup>
    const {id} = useRoute().params
</script>

<style scoped>

</style>