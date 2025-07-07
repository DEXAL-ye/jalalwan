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
    { id: 'contact', title: 'contact_us' }
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
            // Add timeout to ensure DOM update
            setTimeout(() => {
                section.scrollIntoView({ behavior: 'smooth' });
            }, 100);
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
                            <a href="https://wa.me/+9665505651446" target="_blank"
                                class="hover:underline hover:text-[#D6A756] transition-colors" dir="ltr">
                                +9665505651446
                            </a>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-envelope mt-1 mr-2 text-[#D6A756]"></i>
                            <a href="mailto:info@jalalwan.com"
                                class="hover:underline hover:text-[#D6A756] transition-colors">
                                info@jalalwan.com
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
</template>