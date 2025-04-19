<script setup>
import NavBar from "./components/NavBar.vue";
import DesignProjectsCarousel from "./components/DesignProjectsCarousel.vue";
import HeroSection from "./components/HeroSection.vue";
import ImageSection from "./components/ImageSection.vue";
import BookADemo from "./components/BookADemo.vue";
import Features from "./components/Features.vue";
import SpecificationAndStreamlined from "./components/SpecificationAndStreamlined.vue";
import Management from "./components/Management.vue";
import Creativity from "./components/Creativity.vue";
import Presentations from "./components/Presentations.vue";
import ProgramaInThePress from "./components/ProgramaInThePress.vue";
import CountriesSlideShow from "./components/CountriesSlideShow.vue";
import ChatOurTeam from "./components/ChatOurTeam.vue";
import DayTrial from "./components/DayTrial.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <NavBar />

  <div class="bg-white pt-60 w-full">
    <HeroSection />

    <ImageSection />

    <BookADemo
      header=" Built by &amp; for interior designers"
      paragraph=" Powerful tools to elevate your design process from concept to completion"
    />

    <Features />

    <SpecificationAndStreamlined />

    <BookADemo
      header="Real-Time Specification, No Double Handling"
      paragraph="Streamline your workflow with instant, accurate data"
    />

    <Management />

    <BookADemo
      header="Effortless Project Management"
      paragraph="Simplify your workflow with an intuitive, user-friendly platform"
    />

    <Creativity />

    <BookADemo
      header=" Collaborative Tools, One Shared Space"
      paragraph="Bring your studio together to ideate, iterate, and create seamlessly"
    />

    <Presentations />

    <BookADemo
      header="Purpose-Built Presentation for One Source of Truth"
      paragraph="Seamlessly manage every stage of your project with unified tools"
    />

    <hr class="mt-30 text-gray-300" />

    <ProgramaInThePress />

    <DesignProjectsCarousel />

    <CountriesSlideShow />

    <ChatOurTeam />

    <DayTrial />

    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
