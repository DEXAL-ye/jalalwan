<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onBeforeUnmount, type ComponentPublicInstance } from 'vue';
import type { NavigationItem } from '../../types/var';
import LocaleDiv from './LanguageSwitcher.vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
interface UnderlinePosition {
    width: string;
    left: string;
}
const route = useRoute();
const router = useRouter();
const props = defineProps<{
    activePage: string;
}>();

const { t } = useI18n();
const emit = defineEmits(['set-active-page']);

const mobileMenuOpen = ref(false);
const navigation = ref<NavigationItem[]>([
    { id: 'home', title: 'home' },
    { id: 'agents', title: 'agent_system' },
    { id: 'about', title: 'about' },
    { id: 'contact', title: 'contact' }
]);

// Underline animation refs
const desktopNavItems = ref<(HTMLElement | null)[]>([]);
const mobileNavItems = ref<(HTMLElement | null)[]>([]);
const desktopUnderline = ref<UnderlinePosition>({ width: '0px', left: '0px' });
const mobileUnderline = ref<UnderlinePosition>({ width: '0px', left: '0px' });
const desktopNavContainer = ref<HTMLElement | null>(null);

// Helper function to get DOM element from ref
const getElement = (el: HTMLElement | ComponentPublicInstance | null): HTMLElement | null => {
    if (el instanceof HTMLElement) {
        return el;
    }
    if (el && '$el' in el) {
        return el.$el as HTMLElement;
    }
    return null;
};

// Update underline position based on active nav item
const updateUnderline = () => {
    nextTick(() => {
        // Desktop underline
        const desktopIndex = navigation.value.findIndex(nav => nav.id === props.activePage);
        const desktopEl = desktopIndex !== -1 ? desktopNavItems.value[desktopIndex] : null;
        const desktopElement = desktopEl ? getElement(desktopEl) : null;

        if (desktopElement && desktopNavContainer.value) {
            const rect = desktopElement.getBoundingClientRect();
            const containerRect = desktopNavContainer.value.getBoundingClientRect();

            desktopUnderline.value = {
                width: `${rect.width}px`,
                left: `${rect.left - containerRect.left}px`
            };
        }

        // Mobile underline
        const mobileIndex = navigation.value.findIndex(nav => nav.id === props.activePage);
        const mobileEl = mobileIndex !== -1 ? mobileNavItems.value[mobileIndex] : null;
        const mobileElement = mobileEl ? getElement(mobileEl) : null;

        if (mobileElement && mobileElement.parentElement) {
            const rect = mobileElement.getBoundingClientRect();
            const parentRect = mobileElement.parentElement.getBoundingClientRect();

            mobileUnderline.value = {
                width: `${rect.width}px`,
                left: `${rect.left - parentRect.left}px`
            };
        }
    });
};

// Handle body scroll when mobile menu is open
watch(mobileMenuOpen, (newVal) => {
    if (newVal) {
        document.body.classList.add('overflow-hidden');
        nextTick(updateUnderline);
    } else {
        document.body.classList.remove('overflow-hidden');
    }
});

// Update underline when active page changes
watch(() => props.activePage, updateUnderline);

// Handle window resize
onMounted(() => {
    window.addEventListener('resize', updateUnderline);
    nextTick(updateUnderline);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateUnderline);
});

const setActivePage = (page: string) => {
    emit('set-active-page', page);
    mobileMenuOpen.value = false;
};

const navigateToSection = (nav: NavigationItem): void => {
    // Close mobile menu when navigating
    mobileMenuOpen.value = false;
    
    if (route.path !== '/') {
        router.push('/').then(() => {
            scrollToSection(nav.id);
        });
    } else {
        scrollToSection(nav.id);
    }
};

// MODIFIED: Simplified scroll function
const scrollToSection = (hash: string): void => {
    // Update active page immediately
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
    <header class="bg-white shadow-md sticky top-0 z-50">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center py-4">
                <div class="flex items-center">
                    <router-link to="/">
                        <img src="@images/logo.png" alt="Logo" class="w-28" />
                    </router-link>
                </div>
                <button class="md:hidden text-[#9C0B26] text-xl" @click="mobileMenuOpen = !mobileMenuOpen">
                    <i class="fas fa-bars"></i>
                </button>

                <nav ref="desktopNavContainer" class="hidden md:block relative">
                    <ul class="flex space-x-1 space-x-reverse">
                     <li v-for="(nav, index) in navigation" :key="index"
                            :ref="el => desktopNavItems[index] = el as HTMLElement | null">
                           <button
                                @click="navigateToSection(nav)"
                                :class="{
                                    'text-[#4B4B4B] hover:text-[#9C0B26]': activePage !== nav.id,
                                    'text-[#9C0B26]': activePage === nav.id
                                }"
                                class="px-4 py-2 font-medium transition-colors relative"
                            >
                                {{ t(nav.title) }}
                            </button>
                        </li>
                    </ul>
                    <!-- Desktop underline -->
                    <div class="absolute bottom-0 h-0.5 bg-[#9C0B26] transition-all duration-300" :style="{
                        width: desktopUnderline.width,
                        left: desktopUnderline.left
                    }"></div>
                </nav>
                <div class="hidden md:flex gap-4">
                    <LocaleDiv color="white" />
                </div>
            </div>

            <!-- Mobile Navigation -->
            <div class="md:hidden py-3 border-t mt-2 bg-white relative"
                :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }">
                <ul class="space-y-2">
                    <li v-for="(nav, index) in navigation" :key="index"
                        :ref="el => mobileNavItems[index] = el as HTMLElement | null">
                        <a href="#" @click.prevent="setActivePage(nav.id)" :class="{
                            'text-[#4B4B4B]': activePage !== nav.id,
                            'text-[#9C0B26]': activePage === nav.id
                        }" class="block px-4 py-2 font-medium transition-colors relative">
                            {{ t(nav.title) }}
                        </a>
                    </li>
                </ul>
                <!-- Mobile underline -->
                <div class="absolute bottom-3 h-0.5 bg-[#9C0B26] transition-all duration-300" :style="{
                    width: mobileUnderline.width,
                    left: mobileUnderline.left
                }"></div>
            </div>
        </div>
    </header>
</template>

<style scoped>
@media (max-width: 768px) {
    .overflow-hidden {
        overflow: hidden;
    }
}
</style>