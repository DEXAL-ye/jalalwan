<script setup lang="ts">
import Header from '../components/Shared/Header.vue';
import HeroSection from '../components/Shared/HeroSection.vue';
import Home from '../components/Shared/Home.vue';
import About from '../components/Shared/About.vue';
import Agent from '../components/Shared/Agent.vue';
import Footer from '../components/Shared/Footer.vue';
import Contact from '../components/Shared/Contact.vue';
</script>

<template>
  <!-- Your existing template remains the same -->
  <Header />
    <HeroSection />
  <main class="container mx-auto px-4 py-12">
    <Home />
    <About />
    <Agent/>
    <Contact/>
  </main>
  <div>
    <Footer />
  </div>
</template>