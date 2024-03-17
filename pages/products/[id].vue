<!-- /products/:id -->

<template>
    <div>
        <h1 class="text-4xl">Product Detail For {{ id }}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, a.</p>
    </div>
</template>

<script setup>
    const {id} = useRoute().params
    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>