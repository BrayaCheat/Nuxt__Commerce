<!-- /products because index is the root file of products so it will display the root page when you access to this route-->

<template>
  <div class="container mx-auto lg:p-36 p-3 grid place-items-stretch gap-9">
    <h1 class="text-5xl">Product Page / {{ currentPage }}</h1>
    <hr />

    <div
      v-if="products.length > 0"
      class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9"
    >
      <div v-for="p in paginate" :key="p.id">
        <product__card :product="p" />
      </div>

      <div
        class="flex items-center justify-center lg:col-span-3 md:col-span-2 col-span-1 text-xl"
      >
        <button
          class="border p-3 shadow-md active:bg-primary active:text-white font-medium active:border-0 me-6"
          @click="changePage(currentPage - 1)"
          :disabled="currentPage === 1"
        >
          Previous
        </button>

        <div
          v-for="page in totalPages"
          :key="page"
          class="lg:col-span-3 md:col-span-2 col-span-1 flex items-center"
        >
          <span
            :class="{ active: page === currentPage }"
            class="cursor-pointer border p-3 shadow-md active:bg-primary active:text-white font-medium active:border-0"
            @click="changePage(page)"
            >{{ page }}</span
          >
        </div>

        <button
          class="border p-3 shadow-md active:bg-primary active:text-white font-medium active:border-0 ms-6"
          @click="changePage(currentPage + 1)"
          :disabled="currentPage === totalPages"
        >
          Next
        </button>
      </div>
    </div>

    <div v-else>
      <h1 class="animate-pulse text-4xl">Loading...</h1>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const products = ref([]);
const itemPerPage = 6;
let currentPage = ref(1);

onMounted(() => {
  fetchData();
});

const fetchData = async () => {
  try {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        products.value = res.data;
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

const paginate = computed(() => {
  const startIndex = (currentPage.value - 1) * totalPages.value;
  const endIndex = startIndex + itemPerPage;
  return products.value.slice(startIndex, endIndex);
});

const totalPages = computed(() =>
  Math.ceil(products.value.length / itemPerPage)
);

const changePage = (page) => {
  currentPage.value = page;
};
</script>

<style scoped>
.active {
  color: #50c878;
}
</style>
