<template>
    <div>
        <h2>Home</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, beatae?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, beatae?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, beatae?</p>
        <nav>
            <ul>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/products">Product</NuxtLink></li>
                <li><NuxtLink to="/products/braya">ProductDetail</NuxtLink></li>
            </ul>
        </nav>
    </div>
</template>

<script setup>

</script>

<style scoped>
    ul{
        display: flex;
        justify-items: center;
        gap: 30px;
    }
</style>