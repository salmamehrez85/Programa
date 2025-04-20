<template>
  <div class="w-full flex flex-col items-center px-4 py-10">
    <!-- Headline -->
    <h1
      class="text-3xl lg:text-7xl font-bold mb-6 text-center leading-tight max-w-5xl"
    >
      Beautiful software for interior designers & architects
    </h1>

    <!-- Subtext -->
    <p class="text-lg lg:text-2xl font-semibold py-8 text-center max-w-3xl">
      Streamline your workflow and unlock your studio's potential. <br />
      Start your 7 day trial
    </p>

    <!-- Email Checker -->
    <form @submit.prevent="submitEmail" class="w-full flex justify-center">
      <div
        :class="[
          'flex items-center border-2 hover:border-red-200 hover:shadow-xl rounded-2xl p-1 transition-all w-full max-w-[500px]',
          isError ? 'border-pink-400' : 'border-gray-200',
        ]"
      >
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          class="flex-grow px-4 py-2 rounded-full outline-none text-base"
          required
        />
        <button
          type="submit"
          class="cursor-pointer bg-yellow-300 hover:bg-yellow-400 text-black px-4 py-2 rounded-full font-medium text-base"
        >
          Get started
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      isError: false,
    };
  },
  methods: {
    submitEmail() {
      if (!this.email || !this.email.includes("@")) {
        this.isError = true;
        alert("Please enter a valid email.");
        return;
      }
      this.isError = false;
      console.log("Submitted email:", this.email);
      alert(`Thanks for signing up with ${this.email}`);
      this.email = "";
    },
  },
};
</script>

<style scoped></style>
