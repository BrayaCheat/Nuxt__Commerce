<template>
    <nav class="border-b border-zinc-300 shadow-md">
        <ul class="flex items-center container mx-auto px-36 gap-20  py-9 text-3xl">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Product</NuxtLink></li>
        </ul>
    </nav>
        

    <div>
        <slot/>
    </div>
</template>

<script setup>

</script>

<style scoped>

    .router-link-exact-active{
        color: #50C878
    }
</style>