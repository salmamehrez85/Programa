<script setup>
import { ref } from "vue";
import logo from "@/assets/logo.webp";

const reloadAndScrollToTop = () => {
  window.location.href = window.location.origin + window.location.pathname;
};
const items = ["Product", "Solutions", "Pricing", "Resources", "Editorial"];
</script>

<template>
  <nav
    class="backdrop-blur-2xl z-[999] shadow-lg fixed w-full py-4 px-10 flex justify-between bg-white"
  >
    <img
      class="w-40 ml-30 cursor-pointer"
      :src="logo"
      alt="logo"
      @click="reloadAndScrollToTop"
    />

    <div class="flex gap-6 relative">
      <!-- Product Dropdown -->
      <div class="relative group">
        <p
          class="px-4 rounded-lg hover:underline hover:bg-gray-100 cursor-pointer"
        >
          Product
        </p>
        <div
          class="absolute top-full left-0 mt-2 w-96 bg-white shadow-xl rounded-xl border border-gray-100 p-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50"
        >
          <ul>
            <li class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
              <p class="font-semibold text-sm">Features</p>
              <p class="text-gray-500 text-xs">Freedom, by design.</p>
            </li>
            <li class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
              <p class="font-semibold text-sm">Specification tools</p>
              <p class="text-gray-500 text-xs">
                Eliminate the data entry from your workflow
              </p>
            </li>
            <li class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
              <p class="font-semibold text-sm">Management tools</p>
              <p class="text-gray-500 text-xs">
                Manage projects effortlessly and intuitively
              </p>
            </li>
            <li class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
              <p class="font-semibold text-sm">Creative tools</p>
              <p class="text-gray-500 text-xs">
                Ideate, iterate and create in one space
              </p>
            </li>
            <li class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
              <p class="font-semibold text-sm">Presentation tools</p>
              <p class="text-gray-500 text-xs">
                Purpose-built from concept to completion
              </p>
            </li>
          </ul>
        </div>
      </div>

      <!-- Solutions Dropdown -->
      <div class="relative group">
        <p
          class="px-4 rounded-lg hover:underline hover:bg-gray-100 cursor-pointer"
        >
          Solutions
        </p>
        <div
          class="absolute top-full left-0 mt-2 w-[600px] bg-white shadow-xl rounded-xl border border-gray-100 p-6 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 flex gap-12"
        >
          <!-- Left column -->
          <div class="flex-1">
            <p
              class="text-2xl text-black bg-gray-100 px-2 py-2 rounded-2xl w-40 mb-3"
            >
              For Desinger
            </p>
            <hr class="text-gray-100 mb-5" />
            <p class="text-xs uppercase text-gray-400 font-bold mb-3">
              Features
            </p>
            <ul class="space-y-3">
              <li class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                <p class="font-semibold text-sm">Schedules</p>
                <p class="text-gray-500 text-xs">
                  Centralise specification & reduce error.
                </p>
              </li>
              <li class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                <p class="font-semibold text-sm">Client Dashboard</p>
                <p class="text-gray-500 text-xs">
                  Collaborate and share project details.
                </p>
              </li>
              <li class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                <p class="font-semibold text-sm">Mood Boards</p>
                <p class="text-gray-500 text-xs">
                  Visualise, present & develop ideas.
                </p>
              </li>
              <li class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                <p class="font-semibold text-sm">Invoicing</p>
                <p class="text-gray-500 text-xs">Create and send invoices.</p>
              </li>
              <li class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                <p class="font-semibold text-sm">Client Approvals</p>
                <p class="text-gray-500 text-xs">Easy approvals & sharing.</p>
              </li>
            </ul>
          </div>

          <!-- Right column -->
          <div class="flex-1 mt-10">
            <p class="text-xs invisible mb-3">Spacer</p>
            <ul class="space-y-3">
              <li class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                <p class="font-semibold text-sm">Web Clipper</p>
                <p class="text-gray-500 text-xs">Project sourcing made easy.</p>
              </li>
              <li class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                <p class="font-semibold text-sm">Product Library</p>
                <p class="text-gray-500 text-xs">
                  All-in-one hub for product details.
                </p>
              </li>
              <li class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                <p class="font-semibold text-sm">Purchase Orders</p>
                <p class="text-gray-500 text-xs">
                  Efficient ordering, simplified.
                </p>
              </li>
              <li class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                <p class="font-semibold text-sm">Project Management</p>
                <p class="text-gray-500 text-xs">Coordinate your practice.</p>
              </li>
              <li class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                <p class="font-semibold text-sm">Trade Portal</p>
                <p class="text-gray-500 text-xs">
                  Marketplace for product sourcing.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Remaining nav items -->
      <p
        v-for="(item, i) in items.slice(2)"
        :key="i"
        class="px-4 rounded-lg hover:underline hover:bg-gray-100 cursor-pointer"
      >
        {{ item }}
      </p>
    </div>

    <!-- Buttons -->
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
