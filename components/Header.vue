<script setup lang="ts">
const nuxtApp = useNuxtApp();
const { activeHeadings } = useScrollspy();

const links = computed(() => [
  {
    label: "Home",
    to: "/",
    icon: "i-heroicons-home",
    active:
      activeHeadings.value.includes("Home") &&
      !activeHeadings.value.includes("About"),
  },
  {
    label: "About",
    to: "/about",
    icon: "i-heroicons-bookmark",
    active:
      activeHeadings.value.includes("About") &&
      !activeHeadings.value.includes("Products"),
  },
  {
    label: "Products",
    to: "/products",
    icon: "i-heroicons-shopping-cart",
    active: activeHeadings.value.includes("Products"),
  },
]);
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      Nuxt Commerce <UBadge label="Pro" variant="subtle" class="mb-0.5" />
    </template>

    <template #right>
        <UColorModeButton size="sm" />
    </template>

  </UHeader>
</template>
