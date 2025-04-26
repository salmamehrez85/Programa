<script setup>
import { ref } from "vue";
import logo from "@/assets/logo.webp";

const mobileMenuOpen = ref(false);
const activeDropdown = ref(null);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  activeDropdown.value = null;
};

const toggleDropdown = (dropdown) => {
  if (activeDropdown.value === dropdown) {
    activeDropdown.value = null;
  } else {
    activeDropdown.value = dropdown;
  }
};
</script>

<template>
  <nav
    class="backdrop-blur-2xl z-[999] shadow-lg fixed w-full py-2 md:py-4 px-4 md:px-10 flex justify-between items-center bg-white"
  >
    <!-- Logo -->
    <router-link to="/">
      <img
        class="w-28 md:w-40 md:ml-30 cursor-pointer"
        :src="logo"
        alt="logo"
      />
    </router-link>

    <!-- Desktop Navigation -->
    <div class="hidden md:flex gap-6 relative">
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
              <router-link to="/specification">
                <p class="font-semibold text-sm">Specification tools</p>
              </router-link>

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
                <router-link to="/clientApprovals">
                  <p class="font-semibold text-sm">Client Approvals</p>
                </router-link>
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
      <router-link to="/pricing">
        <p
          class="px-4 rounded-lg hover:underline hover:bg-gray-100 cursor-pointer"
        >
          Pricing
        </p>
      </router-link>

      <p
        class="px-4 rounded-lg hover:underline hover:bg-gray-100 cursor-pointer"
      >
        Resources
      </p>
      <p
        class="px-4 rounded-lg hover:underline hover:bg-gray-100 cursor-pointer"
      >
        Editorial
      </p>
    </div>

    <!-- Desktop Buttons -->
    <div class="hidden md:flex gap-7">
      <button class="hover:underline cursor-pointer">Log in</button>
      <button
        class="cursor-pointer px-4 py-1 rounded-xl bg-yellow-200 hover:bg-yellow-300"
      >
        Start For Free
      </button>
    </div>

    <!-- Mobile Menu Button -->
    <button
      @click="toggleMobileMenu"
      class="md:hidden text-gray-800 focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          v-if="!mobileMenuOpen"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </nav>

  <!-- Mobile Menu -->
  <div
    v-if="mobileMenuOpen"
    class="md:hidden fixed top-14 left-0 w-full bg-white shadow-lg z-50 pt-4 pb-6 px-4 overflow-y-auto max-h-screen"
    style="max-height: calc(100vh - 3.5rem)"
  >
    <!-- Mobile Navigation Items -->
    <div class="space-y-1">
      <!-- Product Dropdown -->
      <div>
        <button
          @click="toggleDropdown('product')"
          class="w-full flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          <span>Product</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 transform transition-transform"
            :class="activeDropdown === 'product' ? 'rotate-180' : ''"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div v-if="activeDropdown === 'product'" class="mt-1 ml-4 space-y-1">
          <div class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
            <p class="font-semibold text-sm">Features</p>
            <p class="text-gray-500 text-xs">Freedom, by design.</p>
          </div>
          <div class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
            <p class="font-semibold text-sm">Specification tools</p>
            <p class="text-gray-500 text-xs">
              Eliminate the data entry from your workflow
            </p>
          </div>
          <div class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
            <p class="font-semibold text-sm">Management tools</p>
            <p class="text-gray-500 text-xs">
              Manage projects effortlessly and intuitively
            </p>
          </div>
          <div class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
            <p class="font-semibold text-sm">Creative tools</p>
            <p class="text-gray-500 text-xs">
              Ideate, iterate and create in one space
            </p>
          </div>
          <div class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
            <p class="font-semibold text-sm">Presentation tools</p>
            <p class="text-gray-500 text-xs">
              Purpose-built from concept to completion
            </p>
          </div>
        </div>
      </div>

      <!-- Solutions Dropdown -->
      <div>
        <button
          @click="toggleDropdown('solutions')"
          class="w-full flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          <span>Solutions</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 transform transition-transform"
            :class="activeDropdown === 'solutions' ? 'rotate-180' : ''"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div v-if="activeDropdown === 'solutions'" class="mt-1 ml-4 space-y-1">
          <p class="text-lg text-black bg-gray-100 px-2 py-1 rounded-lg mb-2">
            For Designer
          </p>
          <p class="text-xs uppercase text-gray-400 font-bold mb-1 ml-2">
            Features
          </p>
          <div class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
            <p class="font-semibold text-sm">Schedules</p>
            <p class="text-gray-500 text-xs">
              Centralise specification & reduce error.
            </p>
          </div>
          <div class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
            <p class="font-semibold text-sm">Client Dashboard</p>
            <p class="text-gray-500 text-xs">
              Collaborate and share project details.
            </p>
          </div>
          <div class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
            <p class="font-semibold text-sm">Mood Boards</p>
            <p class="text-gray-500 text-xs">
              Visualise, present & develop ideas.
            </p>
          </div>
          <!-- Additional items -->
          <div class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
            <p class="font-semibold text-sm">Web Clipper</p>
            <p class="text-gray-500 text-xs">Project sourcing made easy.</p>
          </div>
          <div class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
            <p class="font-semibold text-sm">Product Library</p>
            <p class="text-gray-500 text-xs">
              All-in-one hub for product details.
            </p>
          </div>
          <div class="p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
            <p class="font-semibold text-sm">Purchase Orders</p>
            <p class="text-gray-500 text-xs">Efficient ordering, simplified.</p>
          </div>
        </div>
      </div>

      <!-- Other Nav Items -->
      <button
        v-for="(item, i) in items.slice(2)"
        :key="i"
        class="w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 focus:outline-none"
      >
        {{ item }}
      </button>
    </div>

    <!-- Mobile Buttons -->
    <div class="mt-6 space-y-3">
      <button
        class="w-full py-2 text-center hover:underline focus:outline-none"
      >
        Log in
      </button>
      <button
        class="w-full py-2 bg-yellow-200 hover:bg-yellow-300 rounded-xl focus:outline-none"
      >
        Start For Free
      </button>
    </div>
  </div>
</template>
