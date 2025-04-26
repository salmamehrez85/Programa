<template>
  <div class="max-w-8xl mx-20 rounded-3xl px-4 py-16 bg-gray-200 -mt-100">
    <!-- Heading -->
    <h2 class="text-2xl font-bold text-center mb-10">
      One platform for your whole company
    </h2>

    <!-- Billing Toggle -->
    <div class="flex justify-center mb-10">
      <div class="bg-gray-300 p-1 rounded-full inline-flex">
        <button
          @click="billingType = 'monthly'"
          :class="[
            'cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
            billingType === 'monthly'
              ? 'bg-gray-900 text-white'
              : 'text-gray-700',
          ]"
        >
          Monthly
        </button>
        <button
          @click="billingType = 'annual'"
          :class="[
            'cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
            billingType === 'annual'
              ? 'bg-gray-900 text-white'
              : 'text-gray-700',
          ]"
        >
          Save 20% With Annual
        </button>
      </div>
    </div>

    <!-- Pricing Cards -->
    <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      <!-- Professional Card -->
      <div class="bg-white rounded-lg shadow-sm p-8">
        <div class="flex justify-between items-start mb-4">
          <span
            class="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-md"
            >Professional</span
          >
          <span
            class="bg-yellow-300 text-yellow-800 text-xs font-medium px-3 py-1 rounded-md"
            >Popular</span
          >
        </div>

        <h3 class="text-5xl font-bold mb-4">
          {{ billingType === "monthly" ? "$39.20" : "$31.36" }}
        </h3>

        <p class="text-gray-700 mb-1">
          Per user, per month for the first 3 users
        </p>
        <p class="text-gray-700 mb-8">
          Additional users $29 per user/ per month
        </p>

        <button
          class="cursor-pointer w-full bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-medium py-3 px-4 rounded-md transition-colors duration-200 mb-8"
        >
          Start Your 7-day Free Trial
        </button>

        <div class="space-y-6 border-t pt-6">
          <div class="flex justify-between items-center">
            <p class="font-medium">No credit card required</p>
            <button class="text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div class="flex justify-between items-center border-t pt-6">
            <p class="font-medium">Everything included</p>
            <button class="text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div class="flex justify-between items-center border-t pt-6">
            <p class="font-medium">Free training and support</p>
            <button class="text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div class="flex justify-between items-center border-t pt-6">
            <p class="font-medium">Unlimited projects</p>
            <button class="text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Enterprise Card -->
      <div class="bg-gray-300 rounded-lg shadow-sm p-8">
        <div class="mb-4">
          <span
            class="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-md"
            >Large Studios</span
          >
        </div>

        <h3 class="text-5xl font-bold mb-4">Enterprise</h3>
        <p class="text-gray-700 mb-8">
          We Offer Custom Pricing for Large Studios
        </p>

        <button
          class="cursor-pointer w-full bg-white hover:bg-gray-50 text-gray-900 font-medium py-3 px-4 rounded-md border border-gray-200 transition-colors duration-200 mb-8"
        >
          Speak to our team today
        </button>

        <div class="space-y-6 border-t pt-6">
          <div class="flex justify-between items-center">
            <p class="font-medium">Pricing for Large Firms</p>
            <button class="text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div class="flex justify-between items-center border-t pt-6">
            <p class="font-medium">Migration & Onboarding Support</p>
            <button class="text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div class="flex justify-between items-center border-t pt-6">
            <p class="font-medium">Free Trial: No Credit Card Required</p>
            <button class="text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Section -->
    <div class="mt-20 flex flex-col md:flex-row justify-between items-center">
      <h3 class="text-3xl font-bold mb-6 md:mb-0 ml-50">
        Getting started is easy.
      </h3>
      <div class="flex flex-col md:flex-row items-center gap-4 mr-20">
        <p class="text-gray-700 text-left max-w-md mr-10">
          We're always available to help you and your team make the move to
          Programa.
        </p>
        <button
          class="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200"
        >
          Contact Us
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const billingType = ref("monthly");
</script>

<style scoped>
/* Any additional custom styles can go here */
</style>
