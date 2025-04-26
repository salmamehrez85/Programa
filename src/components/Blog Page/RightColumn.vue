<template>
  <!-- .right-column -->
  <div
    class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 content-start"
    ref="rightColumn"
  >
    <div
      v-for="(item, index) in filteredItems"
      :key="index"
      class="rounded-lg sm:rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <!-- .item-image -->
      <div
        class="h-[160px] sm:h-[180px] md:h-[200px] lg:h-[228px] w-full relative rounded-lg sm:rounded-xl"
        :class="{
          'bg-[#3a3a3a]': item.colorClass === 'bg-dark',
          'bg-[#ffffaa]': item.colorClass === 'bg-yellow',
          'bg-[#f5f5f5]': item.colorClass === 'bg-light',
        }"
      >
        <!-- .item-title -->
        <div
          class="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 lg:top-5 lg:left-5 text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium"
          :class="{
            'text-white/70': item.colorClass === 'bg-dark',
            'text-black/70':
              item.colorClass === 'bg-yellow' || item.colorClass === 'bg-light',
          }"
        >
          {{ item.title }}
        </div>
        <!-- .item-tags -->
        <div
          class="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4"
        >
          <span
            class="px-2 py-0.5 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 bg-white/90 rounded-full text-xs sm:text-sm text-[#333]"
            >{{ item.tag }}</span
          >
        </div>
      </div>
      <!-- .item-content -->
      <div class="p-3 sm:p-4 md:p-5">
        <h3
          class="m-0 mb-1 sm:mb-1.5 md:mb-2 text-sm sm:text-base md:text-lg lg:text-xl font-semibold line-clamp-2"
        >
          {{ item.heading }}
        </h3>
        <h4
          class="m-0 mb-2 sm:mb-2.5 md:mb-3 text-sm sm:text-base md:text-lg font-normal text-gray-700 line-clamp-2"
        >
          {{ item.subheading }}
        </h4>
        <!-- .item-meta -->
        <div
          class="pt-1.5 sm:pt-2 md:pt-2.5 border-t border-gray-100 text-[10px] sm:text-xs text-gray-600"
        >
          <!-- .item-author -->
          <div
            v-if="item.author"
            class="font-semibold mb-0.5 sm:mb-1 md:mb-1.5"
          >
            {{ item.author }}
          </div>
          <!-- .item-date -->
          <div>{{ item.date }}</div>
        </div>
      </div>
    </div>

    <!-- Empty state when no items match filters -->
    <div
      v-if="filteredItems.length === 0"
      class="col-span-1 sm:col-span-2 p-8 text-center bg-gray-50 rounded-lg"
    >
      <p class="text-gray-500 text-lg">No items match your current filters.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

// Define emits first before using them
const emit = defineEmits(["filterChange"]);

const props = defineProps({
  searchQuery: {
    type: String,
    default: "",
  },
  selectedCategory: {
    type: String,
    default: "All categories",
  },
});

// Sample data for right column items
const items = ref([
  {
    title: "Product Updates",
    tag: "Industry Updates",
    heading: "2024 Yearly Round-up: Product Updates",
    subheading: "Listen, Improve, Upgrade",
    date: "2024-12-05",
    colorClass: "bg-dark",
  },
  {
    title: "Product Update",
    tag: "Product News",
    heading: "Product Update",
    subheading: "Trade Portal Marketplace",
    date: "2024-11-25",
    colorClass: "bg-dark",
  },
  {
    title: "Marketing 12",
    tag: "Business",
    heading: "Build a Brand Clients Trust",
    subheading: "Marketing for Interior Designers",
    author: "SEBASTIAN GEBHARDI, MARKET YOUR ARCHITECTURE",
    date: "2023-04-04",
    colorClass: "bg-yellow",
  },
  {
    title: "Marketing 11",
    tag: "Business",
    heading: "Trends You Can't Ignore",
    subheading: "Marketing for Interior Designers",
    author: "SEBASTIAN GEBHARDI, MARKET YOUR ARCHITECTURE",
    date: "2023-03-27",
    colorClass: "bg-yellow",
  },
  {
    title: "Design Issue",
    tag: "Interior Design",
    heading: "The Design Issue",
    subheading: "Exploring Interior Design Trends",
    date: "2023-02-15",
    colorClass: "bg-light",
  },
  {
    title: "Concept Design",
    tag: "Product News",
    heading: "Concept to Reality",
    subheading: "Product Design Process",
    date: "2023-01-20",
    colorClass: "bg-dark",
  },
  {
    title: "AI Tools",
    tag: "Artificial Intelligence",
    heading: "AI for Designers",
    subheading: "Tools to Enhance Your Workflow",
    date: "2022-12-10",
    colorClass: "bg-dark",
  },
]);

// Get unique categories for filter options
const categories = computed(() => {
  const uniqueTags = [...new Set(items.value.map((item) => item.tag))];
  return ["All categories", ...uniqueTags];
});

// Computed property for filtered items
const filteredItems = computed(() =>
  items.value.filter((item) => {
    const matchesSearch =
      !props.searchQuery ||
      [item.heading, item.subheading, item.title, item.tag].some((text) =>
        text.toLowerCase().includes(props.searchQuery.toLowerCase())
      );

    const matchesCategory =
      props.selectedCategory === "All categories" ||
      item.tag === props.selectedCategory;

    return matchesSearch && matchesCategory;
  })
);

// Emit event when filter results change - now emit is defined before this
watch(
  filteredItems,
  (newItems) => {
    emit("filterChange", newItems.length);
  },
  { immediate: true }
);

// Expose the rightColumn ref to the parent
const rightColumn = ref(null);
defineExpose({ rightColumn, categories });
</script>
