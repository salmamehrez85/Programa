<template>
  <h1 class="text-8xl mx-auto font-bold mb-6 text-center leading-tight">
    Beautiful software for interior designers & architects
  </h1>
  <p class="text-2xl font-semibold py-8 text-center">
    Streamline your workflow and unlock your studio's potential. <br />
    Start your 7 day trial
  </p>

  <!-- Email Checker -->
  <form @submit.prevent="submitEmail">
    <div class="py-15 pl-150">
      <div
        :class="[
          'flex items-center border-2 hover:border-red-200 hover:shadow-xl rounded-2xl p-1 w-[500px] transition-all',
          isError ? 'border-pink-400' : 'border-gray-200',
        ]"
      >
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          class="flex-grow px-4 py-2 rounded-full outline-none"
          required
        />
        <button
          type="submit"
          class="cursor-pointer bg-yellow-300 hover:bg-yellow-400 text-black px-4 py-2 rounded-full font-medium"
        >
          Get started
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    submitEmail() {
      if (!this.email) {
        alert("Please enter a valid email.");
        return;
      }
      // Here you can handle the email submission, like sending it to an API.
      console.log("Submitted email:", this.email);
      alert(`Thanks for signing up with ${this.email}`);
      this.email = "";
    },
  },
};
</script>

<style scoped></style>
