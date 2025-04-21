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
    class="flex flex-col items-center justify-center px-80 py-16 text-center mt-10"
  >
    <h1 class="text-4xl font-semibold px-20">
      “The standard fields and clear format of Programa has made the biggest
      difference in our project success by streamlining our input and approval
      process, while generally reducing time spent on scheduling.”
    </h1>
    <p class="text-md mt-5 max-w-3xl">
      <span class="font-bold">Yasmine Ghoneim </span>
      YSG
    </p>
  </div>

  <QRCode />

  <DayTrial />

  <Footer />
</template>
