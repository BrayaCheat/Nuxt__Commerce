<!-- /products/:id -->

<template>
    <div class="grid grid-cols-2 place-items-center p-9 border shadow-md">
        <img :src="product.image" alt="" class="h-full w-80 object-contain">
        <div class="grid gap-3">
            <NuxtLink to="/products">Go Back</NuxtLink>
            <h1>{{ product.category }}</h1>
            <div class="flex items-center justify-between">
                <h1 class="text-2xl">{{ product.title }}</h1>
                <span class="text-xl text-red-600">${{ product.price }}</span>
            </div>
            <article>
                {{ product.description }}
            </article>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';

    const {id} = useRoute().params
    const product = ref('')
    definePageMeta({
        layout: 'products'
    })

    onMounted(async () => {
        try {
            await axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => product.value = res.data)
        } catch (error) {
            console.log(error)
        }
    })
</script>

<style scoped>

</style>