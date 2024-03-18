<template>
  <ULandingCard>
    <div
      class="grid lg:grid-cols-2 place-items-start gap-9"
    >
      <img :src="product.image" alt="" class="h-96 w-full object-contain" />
      <div class="grid gap-3">
        <NuxtLink to="/products" class="text-2xl hover:underline"
          >Go Back</NuxtLink
        >
        <hr />
        <h1 class="text-gray-600">{{ product.category }}</h1>
          <h1 class="text-4xl font-bold">{{ product.title }}</h1>
          <span class="text-xl font-bold flex items-center gap-3"
            >Price: <p class="text-primary">${{ product.price }}</p></span
          >
          <hr />
          <h1 class="font-bold text-2xl">Product Description</h1>
        <article class="text-lg">
            
          {{ product.description }}
        </article>
      </div>
    </div>
  </ULandingCard>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>
