<script setup>
import BookADemo from "@/components/BookADemo.vue";
import BookADemoSpecification from "@/components/BookADemoSpecification.vue";
import Footer from "@/components/Footer.vue";
import HeroSpecification from "@/components/HeroSpecification.vue";
import NavBar from "@/components/NavBar.vue";
import ScheduleFeatures from "@/components/ScheduleFeatures.vue";
import clientsReview from "@/assets/clientsReview.webp";
import AccessibleEverywhere from "@/components/AccessibleEverywhere.vue";
import WebClipper from "@/components/WebClipper.vue";
import TrackManageDeliver from "@/components/TrackManageDeliver.vue";
import DayTrial from "@/components/DayTrial.vue";
</script>

<template>
  <NavBar />
  <HeroSpecification />
  <BookADemoSpecification
    header="Specification, simplified."
    paragraph="Eliminate the data entry from your workflow so you can focus on the work that matters"
  />
  <ScheduleFeatures />

  <div class="text-md border-1 w-60 text-center ml-175 py-2 px-2 mt-20">
    Schedules & Specification
  </div>

  <BookADemoSpecification
    header="Stop stressing about version control"
    paragraph="With Programa, your Schedules are always live, ensuring builders, clients, and trades have real-time access to the latest information and specifications, wherever they are.
"
  />

  <div class="mb-12 flex justify-center">
    <img
      :src="clientsReview"
      alt="Client Review"
      class="w-9/12 rounded-lg shadow-md object-cover"
    />
  </div>

  <BookADemoSpecification
    header="Accessible Everywhere"
    paragraph="Programa ensures that builders, clients, and trades can access the most up-to-date information and specifications from any location, fostering seamless communication and coordination."
  />

  <AccessibleEverywhere />

  <WebClipper />

  <div
    class="flex flex-col items-center justify-center px-80 py-16 text-center mt-10"
  >
    <h1 class="text-4xl font-semibold px-20">
      “The use of Schedules ensured efficient communication of changes and
      reduced all back-and-forth with the client.”
    </h1>
    <p class="text-md mt-5 max-w-3xl">
      <span class="font-bold">Calvin Janse Van Vuuren </span>Senior Associate,
      Design Partnership
    </p>
  </div>

  <TrackManageDeliver />

  <DayTrial />
  <Footer />
</template>

<style scoped></style>
