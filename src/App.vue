<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
</template>

<script>
export default {
  data() {
    return {
      items: ["Product", "Solutions", "Pricing", "Resources", "Editorial"],
    };
  },
  components: {
    NavBar,
  },
};
</script>
<style scoped></style>
