<template>
  <div class="max-w-3xl mx-auto px-6 py-16 text-center">
    <h2 class="text-3xl font-bold mb-8">Specification done right</h2>

    <div>
      <div v-for="(feature, index) in visibleFeatures" :key="index">
        <div
          class="flex items-center justify-between py-4 border-t border-gray-200"
        >
          <p :class="{ 'text-gray-400': feature.disabled }">
            {{ feature.text }}
          </p>
          <span v-if="!feature.disabled" class="text-green-500 text-xl">✔</span>
        </div>
      </div>
      <div class="border-t border-gray-200"></div>
    </div>

    <button
      @click="toggleShowMore"
      class="cursor-pointer mt-8 px-6 py-3 bg-black text-white rounded-md font-semibold hover:bg-gray-800"
    >
      {{ showMore ? "See less features" : "See all features" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "FeatureToggleList",
  data() {
    return {
      showMore: false,
      features: [
        {
          text: "Build your own Product Library with the specs your projects need",
        },
        {
          text: "Share to customisable Client Dashboards, on site QR codes for trades and more",
        },
        { text: "Import your existing Schedules" },
        { text: "Use the Web Clipper to add products from anywhere online" },
        { text: "Customise to your studio's needs" },
        { text: "Manage deadlines, predict delays all within Programa" },
        { text: "Assign tasks, guide colleagues" },
        { text: "All your work collected and organised" },
        {
          text: "See all upcoming tasks, deadlines and Schedules in project management",
        },
      ],
    };
  },
  computed: {
    visibleFeatures() {
      return this.showMore ? this.features : this.features.slice(0, 5);
    },
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore;
    },
  },
};
</script>

<style scoped></style>
