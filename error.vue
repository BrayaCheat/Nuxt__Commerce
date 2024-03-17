<template>
    <div class="text-center container mx-auto p-36 flex flex-col gap-6">
        <h1>Error 404</h1>
        <p>sorry page not found</p>
        <article>{{ error.statusCode }} || {{ error.message }}</article>
    </div>
</template>

<script setup>
    defineProps(['error'])
</script>

<style lang="scss" scoped>

</style>