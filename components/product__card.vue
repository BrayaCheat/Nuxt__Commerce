<template>
  <NuxtLink
    :to="`/products/${product.id}`"
    class="p-6 border shadow-md grid lg:place-items-stretch place-items-center gap-3 hover:scale-105 duration-300"
  >
    <img :src="product.image" class="w-80 h-80 object-contain" />
    <hr />
    <h1 class="text-zinc-600">{{ product.category }}</h1>
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold">{{ (product.title).slice(0,15) }}</h1>
      <span class="font-medium text-xl text-primary">${{ product.price }}</span>
    </div>
    <article class="h-10">
      {{ (product.description).slice(0,40) }}...
    </article>
  </NuxtLink>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>
