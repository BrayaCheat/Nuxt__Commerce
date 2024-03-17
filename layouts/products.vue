<template>
    <div>
        <header>
            <ul>
                <li class="text-4xl"><NuxtLink to="/products">Product</NuxtLink></li> 
            </ul>
        </header>
    </div>

    <div>
        <slot/>
    </div>

    <footer>
        <ul class="flex items-center gap-20 border-t border-zinc-300 mt-6 shadow-md py-6">
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Product</NuxtLink></li>
            <li><NuxtLink to="/products/braya">ProductDetail</NuxtLink></li>
        </ul>
    </footer>
</template>

<script setup>

</script>

<style scoped>
    .router-link-exact-active{
        color: red
    }
</style>