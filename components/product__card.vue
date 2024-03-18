<template>
  <ULandingCard>
    <NuxtLink
      :to="`/products/${product.id}`"
      class="grid lg:place-items-stretch place-items-center gap-3"
    >
      <img
        :src="product.image"
        class="w-80 h-80 object-contain hover:scale-105 duration-300"
      />
      <hr />
      <h1 class="text-zinc-600">{{ product.category }}</h1>
      <div class="flex items-center justify-between gap-9">
        <h1 class="text-2xl font-bold">{{ product.title.slice(0, 15) }}</h1>
        <span class="font-medium text-xl text-primary"
          >${{ product.price }}</span
        >
      </div>
    </NuxtLink>
  </ULandingCard>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>
