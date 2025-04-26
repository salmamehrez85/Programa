<template>
    <!-- .right-column -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 content-start" ref="rightColumn">
      <div 
        v-for="(item, index) in filteredItems" 
        :key="index" 
        class="rounded-lg sm:rounded-xl overflow-hidden bg-white"
      >
        <!-- .item-image -->
        <div class="h-[180px] sm:h-[200px] md:h-[228px] w-full sm:w-auto md:w-full lg:w-[342px] relative rounded-lg sm:rounded-xl" :class="{
          'bg-[#3a3a3a]': item.colorClass === 'bg-dark',
          'bg-[#ffffaa]': item.colorClass === 'bg-yellow',
          'bg-[#f5f5f5]': item.colorClass === 'bg-light'
        }">
          <!-- .item-title -->
          <div class="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-5 md:left-5 text-xl sm:text-2xl md:text-[28px] font-medium" :class="{
            'text-white/70': item.colorClass === 'bg-dark',
            'text-black/70': item.colorClass === 'bg-yellow' || item.colorClass === 'bg-light'
          }">{{ item.title }}</div>
          <!-- .item-tags -->
          <div class="absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5 md:bottom-4 md:left-4">
            <span class="px-2 py-1 sm:px-3 sm:py-1.5 md:px-3.5 md:py-1.5 bg-white/90 rounded-[20px] text-xs sm:text-sm text-[#333]">{{ item.tag }}</span>
          </div>
        </div>
        <!-- .item-content -->
        <div class="py-3 sm:py-4 md:py-5">
          <h3 class="m-0 mb-1 sm:mb-1.5 text-base sm:text-lg md:text-xl font-semibold">{{ item.heading }}</h3>
          <h4 class="m-0 mb-2 sm:mb-3 md:mb-4 text-base sm:text-lg md:text-xl font-normal">{{ item.subheading }}</h4>
          <!-- .item-meta -->
          <div class="pt-1.5 sm:pt-2 md:pt-2.5 text-[10px] sm:text-xs">
            <!-- .item-author -->
            <div v-if="item.author" class="font-semibold mb-1 sm:mb-1.5">{{ item.author }}</div>
            <!-- .item-date -->
            <div>{{ item.date }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const props = defineProps({
    searchQuery: {
      type: String,
      default: ''
    },
    selectedCategory: {
      type: String,
      default: 'All categories'
    }
  });
  
  // Sample data for right column items
  const items = ref([
    {
      title: 'Product Updates',
      tag: 'Industry Updates',
      heading: '2024 Yearly Round-up: Product Updates',
      subheading: 'Listen, Improve, Upgrade',
      date: '2024-12-05',
      colorClass: 'bg-dark'
    },
    {
      title: 'Product Update',
      tag: 'Product News',
      heading: 'Product Update',
      subheading: 'Trade Portal Marketplace',
      date: '2024-11-25',
      colorClass: 'bg-dark'
    },
    {
      title: 'Marketing 12',
      tag: 'Business',
      heading: 'Build a Brand Clients Trust',
      subheading: 'Marketing for Interior Designers',
      author: 'SEBASTIAN GEBHARDI, MARKET YOUR ARCHITECTURE',
      date: '2023-04-04',
      colorClass: 'bg-yellow'
    },
    {
      title: 'Marketing 11',
      tag: 'Business',
      heading: 'Trends You Can\'t Ignore',
      subheading: 'Marketing for Interior Designers',
      author: 'SEBASTIAN GEBHARDI, MARKET YOUR ARCHITECTURE',
      date: '2023-03-27',
      colorClass: 'bg-yellow'
    },
    {
      title: 'Design Issue',
      tag: 'Interior Design',
      heading: 'The Design Issue',
      subheading: 'Exploring Interior Design Trends',
      date: '2023-02-15',
      colorClass: 'bg-light'
    },
    {
      title: 'Concept Design',
      tag: 'Product News',
      heading: 'Concept to Reality',
      subheading: 'Product Design Process',
      date: '2023-01-20',
      colorClass: 'bg-dark'
    },
    {
      title: 'AI Tools',
      tag: 'Artificial Intelligence',
      heading: 'AI for Designers',
      subheading: 'Tools to Enhance Your Workflow',
      date: '2022-12-10',
      colorClass: 'bg-dark'
    }
  ]);
  
  // Computed property for filtered items
  const filteredItems = computed(() => 
    items.value.filter(item => {
      const matchesSearch = !props.searchQuery || 
        [item.heading, item.subheading]
          .some(text => text.toLowerCase().includes(props.searchQuery.toLowerCase()));
      
      const matchesCategory = props.selectedCategory === 'All categories' || 
        item.tag === props.selectedCategory;
      
      return matchesSearch && matchesCategory;
    })
  );
  
  // Expose the rightColumn ref to the parent
  const rightColumn = ref(null);
  defineExpose({ rightColumn });
  </script>