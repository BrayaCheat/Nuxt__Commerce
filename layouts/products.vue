<template>
        <ul class="flex items-center justify-center gap-20 border-b border-zinc-300 shadow-md py-9 text-3xl">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Product</NuxtLink></li>
        </ul>

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