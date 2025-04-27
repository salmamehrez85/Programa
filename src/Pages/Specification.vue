<script setup>
import BookADemo from "@/components/Home/BookADemo.vue";
import BookADemoSpecification from "@/components/Specification Page/BookADemoSpecification.vue";
import Footer from "@/components/Footer.vue";
import HeroSpecification from "@/components/Specification Page/HeroSpecification.vue";
import NavBar from "@/components/NavBar.vue";
import ScheduleFeatures from "@/components/Specification Page/ScheduleFeatures.vue";
import clientsReview from "@/assets/clientsReview.webp";
import AccessibleEverywhere from "@/components/Specification Page/AccessibleEverywhere.vue";
import WebClipper from "@/components/Specification Page/WebClipper.vue";
import TrackManageDeliver from "@/components/Specification Page/TrackManageDeliver.vue";
import DayTrial from "@/components/DayTrial.vue";
import StraightFromTheSource from "@/components/Specification Page/StraightFromTheSource.vue";
import EnterDataOnce from "@/components/Specification Page/EnterDataOnce.vue";
import SpecificationDoneRight from "@/components/Specification Page/SpecificationDoneRight.vue";
</script>

<template>
  <NavBar />
  <HeroSpecification />
  <BookADemoSpecification
    header="Specification, simplified."
    paragraph="Eliminate the data entry from your workflow so you can focus on the work that matters"
  />
  <ScheduleFeatures />

  <div
    class="text-md border border-gray-300 w-full max-w-xs mx-auto md:max-w-xs lg:max-w-xs py-2 px-2 mt-10 md:mt-20 text-center rounded-sm shadow-sm"
  >
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
    class="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-40 xl:px-80 py-8 md:py-16 text-center mt-6 md:mt-10"
  >
    <h1
      class="text-2xl md:text-3xl lg:text-4xl font-semibold px-2 sm:px-6 md:px-10 lg:px-20"
    >
      "The use of Schedules ensured efficient communication of changes and
      reduced all back-and-forth with the client."
    </h1>
    <p
      class="text-md mt-3 md:mt-5 max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl"
    >
      <span class="font-bold">Calvin Janse Van Vuuren </span>Senior Associate,
      Design Partnership
    </p>
  </div>

  <TrackManageDeliver />

  <StraightFromTheSource />

  <EnterDataOnce />
  <hr class="text-gray-200 mt-20" />

  <SpecificationDoneRight />

  <DayTrial />
  <Footer />
</template>

<style scoped></style>
