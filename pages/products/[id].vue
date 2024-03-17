<!-- /products/:id -->

<template>
  <div class="container mx-auto lg:p-36 p-3 grid place-items-stretch gap-9">
    <h1 class="text-5xl">Product Page</h1>
    <hr />

    <div v-if="product">
      <product__detail :product="product" />
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
const { id } = useRoute().params;
const { data: product } = await useFetch(
  `https://fakestoreapi.com/products/${id}`
);
</script>

<style scoped></style>
