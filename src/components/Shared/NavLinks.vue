<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import LandingPage from '../../views/LandingPage.vue';
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const showSearchInput = ref<boolean>(false);
const activeHash = ref<string>('');

interface Link {
    name: string;
    path: string;
    hash: string;
    component?: any;
}

const links: Link[] = [
    {
        name: 'home',
        path: '/',
        hash: '#hero',
        component: LandingPage
    },
    // {
    //     name: 'features',
    //     path: '/',
    //     hash: '#features',
    //     component: LandingPage
    // },
    // {
    //     name: 'faq',
    //     path: '/',
    //     hash: '#faq',
    //     component: LandingPage
    // }
];

// Update active hash when route changes
watch(() => route.hash, (newHash) => {
    activeHash.value = newHash;
}, { immediate: true });

const toggleSearchInput = (): void => {
    showSearchInput.value = !showSearchInput.value;
};

const navigateToSection = (link: Link): void => {
    if (route.path !== link.path) {
        router.push(link.path).then(() => {
            scrollToSection(link.hash);
        });
    } else {
        scrollToSection(link.hash);
    }
};

const scrollToSection = (hash: string): void => {
    // Update URL hash without page reload
    if (route.hash !== hash) {
        router.replace({ hash });
    }

    // Scroll to section
    const section = document.querySelector(hash);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};
</script>

<template>
    <div class="flex flex-col md:flex-row gap-6 items-center">
        <button v-for="link in links" :key="link.name" @click="navigateToSection(link)"
            class="relative cursor-pointer px-2 transition-colors hover:text-primary-300"
            :class="{ 'text-primary-300': activeHash === link.hash }">
            {{ t(`${link.name}`) }}

            <span v-if="activeHash === link.hash"
                class="absolute bottom-[-10px] left-0 w-full h-[2px] bg-primary-300 rounded-sm"></span>
        </button>

        <!-- Search Icon -->
        <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                @click="toggleSearchInput" class="cursor-pointer hover:text-primary-300">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>

            <transition name="fade">
                <input v-if="showSearchInput" type="text" :placeholder="t('search.placeholder')"
                    class="bg-white text-primary px-4 py-2 rounded-lg w-full md:w-auto border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all" />
            </transition>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s, transform 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateX(-10px);
}
</style>