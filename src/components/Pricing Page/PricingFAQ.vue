<template>
  <div class="max-w-2xl mx-auto px-4 py-12">
    <h2 class="text-4xl font-semibold mb-8">Questions about pricing?</h2>
    <hr class="text-gray-200" />
    <div class="divide-y divide-gray-200">
      <!-- FAQ Item 1 -->
      <div class="py-6">
        <button
          @click="toggleFaq(1)"
          class="flex justify-between items-center w-full text-left"
        >
          <h3 class="text-xl font-medium">How are seats billed?</h3>
          <svg
            :class="{ 'rotate-180': openFaq === 1 }"
            class="cursor-pointer text-gray-400 w-5 h-5 transform transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        <div
          v-if="openFaq === 1"
          class="mt-4 space-y-4 transition-all duration-300 ease-in-out"
        >
          <h4 class="text-xl font-medium text-gray-900">Month to month</h4>
          <p class="text-gray-800">
            $49 per user, per month for each of the first 3 users, with
            additional users (4th seat and beyond) billed at $29 per user, per
            month.
          </p>
        </div>
      </div>

      <!-- FAQ Item 2 -->
      <div class="py-6">
        <button
          @click="toggleFaq(2)"
          class="flex justify-between items-center w-full text-left"
        >
          <h3 class="text-xl font-medium">How does the annual pricing work?</h3>
          <svg
            :class="{ 'rotate-180': openFaq === 2 }"
            class="cursor-pointer text-gray-400 w-5 h-5 transform transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        <div
          v-if="openFaq === 2"
          class="mt-4 space-y-4 transition-all duration-300 ease-in-out"
        >
          <h4 class="text-xl font-medium text-gray-900">Annual</h4>
          <p class="text-gray-800">
            Get a 20% discount (equivalent to 2 months free). The price is
            $470.40 for each of the first 3 users annually, and $278.40 for each
            additional user.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const openFaq = ref(null);

function toggleFaq(faqId) {
  if (openFaq.value === faqId) {
    openFaq.value = null; // Close if already open
  } else {
    openFaq.value = faqId; // Open the clicked FAQ
  }
}
</script>
