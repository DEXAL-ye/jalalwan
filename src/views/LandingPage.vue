<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Header from '../components/Shared/Header.vue';
import Hero from '../components/Shared/HeroSection.vue';
import Home from '../components/Shared/Home.vue';
import About from '../components/Shared/About.vue';
import Agents from '../components/Shared/Agent.vue';
import Contact from '../components/Shared/Contact.vue';
import Footer from '../components/Shared/Footer.vue';

const activePage = ref('home');

const setActivePage = (page: string) => {
  activePage.value = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Detect active section on scroll
const handleScroll = () => {
  const sections = [
    { id: 'home', element: document.getElementById('home') },
    { id: 'about', element: document.getElementById('about') },
    { id: 'agents', element: document.getElementById('agents') },
    { id: 'contact', element: document.getElementById('contact') }
  ];

  let currentSection = 'home';
  for (const section of sections) {
    if (!section.element) continue;
    const rect = section.element.getBoundingClientRect();
    // Detect when section top is near middle of viewport
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSection = section.id;
      break;
    }
  }

  if (activePage.value !== currentSection) {
    activePage.value = currentSection;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initialize on load
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <Header :active-page="activePage" @set-active-page="setActivePage" />
    <Hero />
    <main class="container mx-auto px-4 py-12 flex-grow">
      <Home id="home" class="pt-28"  />
      <Agents id="agents" class="pt-28" />
      <About id="about" class="pt-28" />
      <Contact id="contact" class="pt-28" />
    </main>
    <Footer @set-active-page="setActivePage" />
  </div>
</template>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.animate-fadeIn {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>