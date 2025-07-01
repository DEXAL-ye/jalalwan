<script setup lang="ts">
import { ref, nextTick } from 'vue';
import type { NavigationItem } from '../../types/var';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const { locale } = useI18n();
const emit = defineEmits(['set-active-page']);

const route = useRoute();
const router = useRouter();

const navigation = ref<NavigationItem[]>([
    { id: 'home', title: 'home' },
    { id: 'agents', title: 'agent_system' },
    { id: 'about', title: 'about' },
    { id: 'contact', title: 'contact' }
]);

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
    nextTick(() => {
        const section = document.getElementById(hash);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
};
</script>

<template>
    <footer class="bg-[#4B4B4B] text-white pt-12 pb-6">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                    <h3 class="text-xl font-bold mb-4 relative pb-2">
                        شركة جلوان
                        <div class="absolute bottom-0 w-10 h-1 bg-[#D6A756]"
                            :class="locale === 'ar' ? 'right-0' : 'left-0'"></div>
                    </h3>
                    <p class="text-gray-300 mb-4">
                        شركة رائدة في مجالها، تقدم حلولاً مبتكرة وخدمات عالية الجودة لعملائها في المملكة العربية
                        السعودية والمنطقة.
                    </p>
                    <div class="flex space-x-3 space-x-reverse">
                        <a href="#"
                            class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D6A756] transition-colors">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#"
                            class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D6A756] transition-colors">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#"
                            class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D6A756] transition-colors">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#"
                            class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D6A756] transition-colors">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <h3 class="text-xl font-bold mb-4 relative pb-2">
                        روابط سريعة
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
                        اتصل بنا
                       <div class="absolute bottom-0 w-10 h-1 bg-[#D6A756]"
                            :class="locale === 'ar' ? 'right-0' : 'left-0'"></div>
                    </h3>
                    <ul class="space-y-3 text-gray-300">
                        <li class="flex items-start">
                            <i class="fas fa-phone mt-1 mr-2 text-[#D6A756]"></i>
                            <span>+9665505651446</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-envelope mt-1 mr-2 text-[#D6A756]"></i>
                            <span>info@jalalwan.com</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-map-marker-alt mt-1 mr-2 text-[#D6A756]"></i>
                            <span>حي السلامة، جدة، المملكة العربية السعودية</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="pt-6 border-t border-gray-700 text-center text-gray-400">
                <p>جميع الحقوق محفوظة &copy; 2023 شركة جلوان | السجل التجاري: 4030061641</p>
            </div>
        </div>
    </footer>
</template>