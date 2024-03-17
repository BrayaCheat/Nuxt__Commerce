<!-- /products because index is the root file of products so it will display the root page when you access to this route-->

<template>
  <div class="container mx-auto lg:p-36 p-3 grid place-items-stretch gap-9">
    <h1 class="text-5xl">Product Page</h1>
    <hr />

    <div
      v-if="products.length > 0"
      class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9"
    >
      <div v-for="p in products" :key="p.id">
        <product__card :product="p" />
      </div>
    </div>
    <div v-else>
      <h1 class="animated-pulse">Loading...</h1>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style lang="scss" scoped></style>
