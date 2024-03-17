<!-- /products because index is the root file of products so it will display the root page when you access to this route-->

<template>
  <div class="container mx-auto p-36 grid gap-9">
    <h1 class="text-4xl">Product Page</h1>
    <hr>

    <div
      v-if="products.length > 0"
      class="grid grid-cols-4 place-items-stretch gap-9"
    >
      <NuxtLink
        :to="`/products/${p.id}`"
        v-for="p in products"
        :key="p.id"
        class="shadowm-md border p-9 grid gap-3"
      >
        <img :src="p.image" alt="" class="w-full h-80 object-contain" />
        <hr />
        <h1 class="text-md">{{ p.category }}</h1>
        <div class="flex items-center justify-between">
          <h1 class="text-2xl">{{ p.title.slice(0, 25) }}...</h1>
          <span class="text-xl text-red-600">${{ p.price }}</span>
        </div>
        <p>{{ p.description.slice(0, 25) }}...</p>
      </NuxtLink>
    </div>
    <div v-else>
      <h1 class="animated-pulse">Loading...</h1>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

definePageMeta({
  layout: "products",
});

const products = ref([]);

onMounted(async () => {
  try {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => (products.value = res.data));
  } catch (error) {
    console.log(error);
  }
});
</script>

<style lang="scss" scoped></style>
