<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import Header from '../components/Shared/Header.vue';
import Hero from '../components/Shared/HeroSection.vue';
import Home from '../components/Shared/Home.vue';
import About from '../components/Shared/About.vue';
import Agents from '../components/Shared/Agent.vue';
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
const activePage = ref('home');

const setActivePage = (page: string) => {
  activePage.value = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
import type { NavigationItem } from '../types/var';
import { useRoute, useRouter } from 'vue-router';

const formatPhoneNumber = (phone: string) => {
  return phone.replace(/\D/g, '');
};

// Precompute all phone numbers to avoid complex template expressions
const contactPhoneValue = computed(() => t('contact.phone_value'));
const footerPhoneValue = computed(() => t('footer.phone'));
const formattedContactPhone = computed(() => formatPhoneNumber(contactPhoneValue.value));
const formattedFooterPhone = computed(() => formatPhoneNumber(footerPhoneValue.value));

const emit = defineEmits(['set-active-page']);

const route = useRoute();
const router = useRouter();

const navigation = ref<NavigationItem[]>([
  { id: 'home', title: 'home' },
  { id: 'agents', title: 'agent_system' },
  { id: 'about', title: 'about' },
  { id: 'contact', title: 'contact_us' }
]);

// Predefined URLs
const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.444062526807!2d39.18273831541619!3d21.56826177482348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d06eb0eada53%3A0xa265b30c08915e0f!2z2KfZhNmF2LnZhdiv2Kog2KfZhNiv2YjZhdin2YU!5e0!3m2!1sen!2ssa!4v1658322347658!5m2!1sen!2ssa";
const mapDirectionsUrl = "https://www.google.com/maps/place/JESA6619,+6619+Abu+Al+Fadl+Al+Mouhsi,+2603,+As+Salamah+District,+Jeddah+23436,+Saudi+Arabia/@21.5802697,39.1470876,18z/data=!3m1!4b1!4m10!1m2!2m1!1z2K3ZiiDYp9mE2LPZhNin2YXYqS-AtINij2KjZiCDYp9mE2YHYttmEINin2YTZhdit2LPZiiA2NjE5INis2K_YqSDYjDIzNDM2INin2YTZhdmF2YTZg9ipINin2YTYudix2KjZitipINin2YTYs9i52YjYr9mK2Kkg4oCTINmH2KfYqtmBIDAwOTY2NTA1MTQ0NiDYsy7YqiA0MDMwNTk1MzM4!3m6!1s0x15c3da848293561b:0x3e8c805069fa976e!8m2!3d21.5802697!4d39.1490991!15sCqIB2K3ZiiDYp9mE2LPZhNin2YXYqS-AtINij2KjZiCDYp9mE2YHYttmEINin2YTZhdit2LPZiiA2NjE5INis2K_YqSDYjDIzNDM2INin2YTZhdmF2YTZg9ipINin2YTYudix2KjZitipINin2YTYs9i52YjYr9mK2Kkg4oCTINmH2KfYqtmBIDAwOTY2NTA1MTQ0NiDYsy7YqiA0MDMwNTk1MzM4kgERY29tcG91bmRfYnVpbGRpbmfgAQA!16s%2Fg%2F11k6bby4xc?entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D";

const navigateToSection = (nav: NavigationItem): void => {
  if (route.path !== '/') {
    router.push('/').then(() => {
      scrollToSection(nav.id);
    });
  } else {
    scrollToSection(nav.id);
  }
};

const scrollToSection = (hash: string): void => {
  emit('set-active-page', hash);
  setTimeout(() => {
    const section = document.getElementById(hash);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, 100);
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
  handleScroll();
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
      <Home id="home" class="pt-28" />
      <Agents id="agents" class="pt-28" />
      <About id="about" class="pt-28" />
      <div id="contact" class="animate-fadeIn py-16 pt-28 bg-[#FFF9F2]">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16 relative">
            <h2 class="text-3xl font-bold text-[#9C0B26] inline-block pb-3">
              {{ t('contact.heading') }}
            </h2>
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#D6A756]"></div>
            <p class="mt-6 text-[#7A7A7A] max-w-2xl mx-auto">
              {{ t('contact.subheading') }}
            </p>
          </div>

          <div class="flex flex-col lg:flex-row gap-10 items-stretch">
            <!-- Contact Information -->
            <div class="w-full lg:w-1/2 bg-[#9C0B26] text-white rounded-2xl p-8 shadow-xl">
              <h3 class="text-2xl font-bold mb-8 relative pb-4">
                {{ t('contact.info_heading') }}
                <div class="absolute bottom-0 w-10 h-1 bg-[#D6A756]"
                  :class="locale === 'ar' ? 'right-0' : 'left-0'"></div>
              </h3>

              <div class="space-y-7">
                <!-- Phone with WhatsApp link -->
                <div class="flex items-start">
                  <div class="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <i class="fas fa-phone-alt text-[#D6A756] text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg">{{ t('contact.phone_label') }}</h4>
                    <p class="mt-1">
                      <a :href="`https://wa.me/${formattedContactPhone}`" target="_blank"
                        class="hover:underline transition-all duration-300 hover:text-[#D6A756]" dir="ltr">
                        {{ contactPhoneValue }}
                      </a>
                    </p>
                  </div>
                </div>

                <!-- Email with mailto link -->
                <div class="flex items-start">
                  <div class="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <i class="fas fa-envelope text-[#D6A756] text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg">{{ t('contact.email_label') }}</h4>
                    <p class="mt-1">
                      <a :href="`mailto:${t('contact.email_value')}`"
                        class="hover:underline transition-all duration-300 hover:text-[#D6A756]">
                        {{ t('contact.email_value') }}
                      </a>
                    </p>
                  </div>
                </div>

                <!-- Address -->
                <div class="flex items-start">
                  <div class="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <i class="fas fa-map-marker-alt text-[#D6A756] text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg">{{ t('contact.address_label') }}</h4>
                    <p class="mt-1">{{ t('contact.address_line1') }}</p>
                    <p class="mt-1">{{ t('contact.address_line2') }}</p>
                    <p class="mt-1">{{ t('contact.address_line3') }}</p>
                  </div>
                </div>

                <!-- Commercial Registration -->
                <div class="flex items-start">
                  <div class="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <i class="fas fa-file-alt text-[#D6A756] text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg">{{ t('contact.cr_label') }}</h4>
                    <p class="mt-1">{{ t('contact.cr_value') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Map Section -->
            <div class="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl relative">
              <div class="h-full">
                <iframe
                  :src="mapEmbedUrl"
                  class="w-full h-full min-h-[500px] border-0" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>

                <div class="absolute bottom-4 right-4 bg-white rounded-lg shadow-md py-2 px-4">
                  <a :href="mapDirectionsUrl"
                    target="_blank"
                    class="text-[#9C0B26] font-bold flex items-center hover:text-[#D6A756] transition-colors">
                    <i class="fas fa-directions mr-2"></i>
                    {{ t('contact.directions') }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="bg-[#4B4B4B] text-white pt-12 pb-6">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 class="text-xl font-bold mb-4 relative pb-2">
              {{ t('company_name') }}
              <div class="absolute bottom-0 w-10 h-1 bg-[#D6A756]"
                :class="locale === 'ar' ? 'right-0' : 'left-0'"></div>
            </h3>
            <p class="text-gray-300 mb-4">
              {{ t('hero_description') }}
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-4 relative pb-2">
              {{ t('footer.quick_links') }}
              <div class="absolute bottom-0 w-10 h-1 bg-[#D6A756]"
                :class="locale === 'ar' ? 'right-0' : 'left-0'"></div>
            </h3>
            <ul class="space-y-2">
              <li v-for="(nav, index) in navigation" :key="index">
                <a href="#" @click.prevent="navigateToSection(nav)"
                  class="text-gray-300 hover:text-[#D6A756] transition-colors">
                  {{ t(nav.title) }}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-4 relative pb-2">
              {{ t('footer.contact') }}
              <div class="absolute bottom-0 w-10 h-1 bg-[#D6A756]"
                :class="locale === 'ar' ? 'right-0' : 'left-0'"></div>
            </h3>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start">
                <i class="fas fa-phone mt-1 mr-2 text-[#D6A756]"></i>
                <a :href="`https://wa.me/${formattedFooterPhone}`" target="_blank"
                  class="hover:underline hover:text-[#D6A756] transition-colors" dir="ltr">
                  {{ footerPhoneValue }}
                </a>
              </li>
              <li class="flex items-start">
                <i class="fas fa-envelope mt-1 mr-2 text-[#D6A756]"></i>
                <a :href="`mailto:${t('footer.email')}`" class="hover:underline hover:text-[#D6A756] transition-colors">
                  {{ t('footer.email') }}
                </a>
              </li>
              <li class="flex items-start">
                <i class="fas fa-map-marker-alt mt-1 mr-2 text-[#D6A756]"></i>
                <span>{{ t('footer.address') }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>{{ t('footer.copyright', { year: new Date().getFullYear() }) }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.animate-fadeIn {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>