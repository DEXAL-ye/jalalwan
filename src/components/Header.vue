<script setup lang="ts">
import { ref, watch } from 'vue';
import type { NavigationItem } from '../types/var';
import LocaleDiv from './Shared/LanguageSwitcher.vue';
defineProps<{
    activePage: string;
}>();

const emit = defineEmits(['set-active-page']);

const mobileMenuOpen = ref(false);
const navigation = ref<NavigationItem[]>([
    { id: 'home', title: 'الرئيسية' },
    { id: 'about', title: 'من نحن' },
    { id: 'agents', title: 'الوكلاء' },
    { id: 'contact', title: 'اتصل بنا' }
]);

watch(() => mobileMenuOpen.value, (newVal) => {
    if (newVal) {
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }
});

const setActivePage = (page: string) => {
    emit('set-active-page', page);
    mobileMenuOpen.value = false;
};
</script>

<template>
    <header class="bg-white shadow-md sticky top-0 z-50">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center py-4">
                <div class="flex items-center">
                    <router-link to="/">
                        <img src="@images/logo.png" alt="Logo" class="w-28  " />
                    </router-link>
                </div>
                <button class="md:hidden text-[#9C0B26] text-xl" @click="mobileMenuOpen = !mobileMenuOpen">
                    <i class="fas fa-bars"></i>
                </button>

                <nav class="hidden md:block">
                    <ul class="flex space-x-1 space-x-reverse">
                        <li v-for="(nav, index) in navigation" :key="index">
                            <a href="#" @click.prevent="setActivePage(nav.id)" :class="{
                                'bg-[#9C0B26] text-white': activePage === nav.id,
                                'text-[#4B4B4B] hover:bg-[#9C0B26] hover:text-white': activePage !== nav.id
                            }" class="px-4 py-2 rounded font-medium transition-colors">
                                {{ nav.title }}
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="hidden md:flex gap-4">
                    <LocaleDiv color="white" />
                </div>
            </div>

            <!-- Mobile Navigation -->
            <div class="md:hidden py-3 border-t mt-2 bg-white"
                :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }">
                <ul class="space-y-2">
                    <li v-for="(nav, index) in navigation" :key="index">
                        <a href="#" @click.prevent="setActivePage(nav.id)" :class="{
                            'bg-[#9C0B26] text-white': activePage === nav.id,
                            'text-[#4B4B4B]': activePage !== nav.id
                        }" class="block px-4 py-2 rounded font-medium transition-colors">
                            {{ nav.title }}
                        </a>
                    </li>
                </ul>
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