<template>
  <div
    class="flex flex-col items-center justify-center px-4 py-16 text-center mt-10"
  >
    <h1 class="text-4xl font-semibold">{{ header }}</h1>
    <p class="text-3xl max-w-3xl pb-10">
      {{ paragraph }}
    </p>
    <div class="flex flex-row gap-4 items-center">
      <button
        class="cursor-pointer bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-600 transition-colors"
      >
        Try Programa Free
      </button>
      <button
        class="cursor-pointer px-6 py-3 font-medium rounded-md border border-neutral-400 hover:bg-gray-200 transition-colors"
      >
        Book A Call
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
    },
    paragraph: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
