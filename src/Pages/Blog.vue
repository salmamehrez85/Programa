<template>
  <!-- .programa-webinar -->
  <NavBar />
  <div class="font-sans max-w-[1763px] mx-35 px-2.5 sm:px-4 md:px-6 pb-[100px]">
    <!-- Select Container -->
    <SelectB />

    <!-- Header and Search -->
    <HeaderSearch
      v-model="searchQuery"
      placeholder="Explore the blog"
      @search="filterResults"
    />

    <!-- Content Container -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-7.5 mb-8 sm:mb-10 md:mb-12.5"
      ref="contentContainer"
    >
      <!-- Left Column Component -->
      <LeftColumn :navbarHeight="navbarHeight" />

      <!-- Right Column Component -->
      <RightColumn
        :searchQuery="searchQuery"
        :selectedCategory="selectedCategory"
        ref="rightColumnComponent"
      />
    </div>

    <!-- Filter Bar Component -->
    <FilterBar v-model="selectedCategory" :categories="categories" />
  </div>
</template>

<script setup>
import HeaderSearch from "@/components/Blog Page/HeaderSearch.vue";
import SelectB from "@/components/Blog Page/SelectB.vue";
import LeftColumn from "@/components/Blog Page/LeftColumn.vue";
import RightColumn from "@/components/Blog Page/RightColumn.vue";
import FilterBar from "@/components/Blog Page/FilterBar.vue";
import { ref, onMounted } from "vue";
import NavBar from "@/components/NavBar.vue";

// Search and filter state
const searchQuery = ref("");
const selectedCategory = ref("All categories");
const navbarHeight = ref(window.innerWidth < 768 ? 60 : 80);

// Categories for filter bar
const categories = [
  "All categories",
  "Artificial Intelligence",
  "Brand Guides",
  "Business",
  "Industry Updates",
  "Integrations",
  "Interior Design",
  "Product News",
  "Templates",
];

// Method to filter results based on search query
const filterResults = (query) => {
  searchQuery.value = query;
};

// Update navbar height on resize
onMounted(() => {
  window.addEventListener("resize", () => {
    navbarHeight.value = window.innerWidth < 768 ? 60 : 80;
  });
});
</script>
