<template>
    <div>
        <nav class="w-full shadow-md border border-zinc-300 flex items-center justify-between py-6 font-medium">
            <NuxtLink to="/">Home</NuxtLink>
            <ul class="flex items-center gap-9">
               
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/products">Product</NuxtLink></li>
                <li><NuxtLink to="/products/braya">ProductDetail</NuxtLink></li>
            </ul>
        </nav>
    </div>

    <div>
        <slot/>
    </div>
</template>

<script setup>

</script>

<style scoped>

    .router-link-exact-active{
        color: red
    }
</style>