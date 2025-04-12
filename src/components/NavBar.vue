<script setup>
import logo from "@/assets/logo.webp";
</script>

<template>
  <nav class="fixed w-full py-4 px-30 flex justify-between">
    <img class="w-1/11" :src="logo" alt="logo" />
    <div class="flex">
      <p
        class="px-4 rounded-lg hover:underline hover:bg-gray-100 cursor-pointer"
        v-for="navbaritem in items"
      >
        {{ navbaritem }}
      </p>
    </div>

    <div class="flex gap-7">
      <button class="hover:underline cursor-pointer">Log in</button>
      <button
        class="cursor-pointer px-4 py-1 rounded-xl bg-yellow-200 hover:bg-yellow-300"
      >
        Start For Free
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: ["Product", "Solutions", "Pricing", "Resources", "Editorial"],
    };
  },
};
</script>
<style scoped></style>
