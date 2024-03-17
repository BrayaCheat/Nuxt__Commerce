<template>
    <div class="grid lg:grid-cols-2 place-items-start p-9 border shadow-md gap-9">
        <img :src="product.image" alt="" class="h-96 w-full object-contain">
        <div class="grid gap-3">
            <NuxtLink to="/products" class="text-2xl hover:underline">Go Back</NuxtLink>
            <hr>
            <h1 class="text-gray-600">{{ product.category }}</h1>
            <div class="flex items-center flex-wrap justify-between gap-6">
                <h1 class="text-4xl font-bold">{{ product.title }}</h1>
                <span class="text-4xl text-primary font-bold">${{ product.price }}</span>
            </div>
            <article class="text-lg">
                {{ product.description }}
            </article>
        </div>
    </div>
</template>

<script setup>
   const { product } = defineProps(["product"]);
</script>
