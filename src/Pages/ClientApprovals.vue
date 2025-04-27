<script setup>
import BookADemoClient from "@/components/ClientApproval Page/BookADemoClient.vue";
import ClientApprovalFeatures from "@/components/ClientApproval Page/ClientApprovalFeatures.vue";
import HeroClient from "@/components/ClientApproval Page/HeroClient.vue";
import QRCode from "@/components/ClientApproval Page/QRCode.vue";
import ShonaMcElroy from "@/components/ClientApproval Page/ShonaMcElroy.vue";
import SubmitForClientApproval from "@/components/ClientApproval Page/SubmitForClientApproval.vue";
import DayTrial from "@/components/DayTrial.vue";
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar />

  <HeroClient />
  <ShonaMcElroy />
  <BookADemoClient
    header="Effortlessly Receive Client Approvals"
    paragraph="Track feedback and approvals directly within your Schedules. Allowing clients to review and approve changes in real-time, teams can track feedback, manage timelines effectively, and avoid costly mistakes."
  />

  <ClientApprovalFeatures />

  <SubmitForClientApproval />

  <div
    class="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-40 xl:px-80 py-6 sm:py-8 md:py-12 lg:py-16 text-center mt-4 sm:mt-6 md:mt-8 lg:mt-10"
  >
    <h1
      class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold px-2 sm:px-4 md:px-8 lg:px-16 xl:px-20"
    >
      "The standard fields and clear format of Programa has made the biggest
      difference in our project success by streamlining our input and approval
      process, while generally reducing time spent on scheduling."
    </h1>
    <p
      class="text-sm sm:text-md mt-3 sm:mt-4 md:mt-5 max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl"
    >
      <span class="font-bold">Yasmine Ghoneim </span>
      YSG
    </p>
  </div>

  <QRCode />

  <DayTrial />

  <Footer />
</template>
