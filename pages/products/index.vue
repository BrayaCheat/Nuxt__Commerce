<!-- /products because index is the root file of products so it will display the root page when you access to this route-->

<template>
    <div>
        <h1 class="text-4xl">Product Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, a.</p>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })
</script>

<style lang="scss" scoped>

</style>