<template>
    <nav class="border-b border-zinc-300 shadow-md md:block hidden">
        <ul class="flex items-center container mx-auto px-36 gap-20  py-9 text-3xl">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Product</NuxtLink></li>
        </ul>
    </nav>

    <button class="md:hidden block" @click="showDropDown">Burger</button>

    <nav
    v-if="dropdown"
    class="border-b border-zinc-300 shadow-md md:hidden block">
        <ul class="grid gap-3 place-items-stretch py-9 text-3xl border-t">
            <li class="hover:bg-gray-200 p-3  duration-300"><NuxtLink to="/">Home</NuxtLink></li>
            <li class="hover:bg-gray-200 p-3  duration-300"><NuxtLink to="/about">About</NuxtLink></li>
            <li class="hover:bg-gray-200 p-3 duration-300"><NuxtLink to="/products">Product</NuxtLink></li>
        </ul>
    </nav>
        

    <div>
        <slot/>
    </div>
</template>

<script setup>
const dropdown = ref(false)
const showDropDown = () => {
    dropdown.value = !dropdown.value
}
</script>

<style scoped>

    .router-link-exact-active{
        color: #50C878
    }
</style>