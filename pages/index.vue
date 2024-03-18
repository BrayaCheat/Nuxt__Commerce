<template>
  <div class="container mx-auto lg:px-36 p-3">
    
    <ULandingHero
      title="Turn Your Vision into Reality"
      description="Watch your dreams materialize before your eyes with us."
      :links="[
        { label: 'Get Started', icon: 'i-heroicons-rocket-launch', size: 'lg' },
        {
          label: 'Learn more',
          icon: 'i-heroicons-arrow-small-right',
          color: 'gray',
          size: 'lg',
        },
      ]"
    />
    
  </div>
</template>

<script setup>
import axios from "axios";

const product = ref();

onMounted(async () => {
  try {
    await axios
      .get("https://fakestoreapi.com/products?limit=1")
      .then((res) => {
        product.value = res.data;
        console.log(product.value);
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
});
</script>

<style scoped></style>
