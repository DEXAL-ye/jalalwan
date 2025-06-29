<script setup lang="ts">
import { ref } from "vue";
import MenuToggle from "./MenuToggle.vue";
import NavLinks from "./NavLinks.vue";
import LocaleDiv from "./LanguageSwitcher.vue";
// import logo from "@images/logo.svg";
const isMenuOpen = ref(false);

const toggleMenu = (): void => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
    <nav class="relative  text-primary py-4 px-4 md:px-16 shadow-md z-50">
        <div class="container mx-auto flex justify-between items-center">
            <!-- Logo -->
            <router-link to="/">
                <img src="@images/logo.png" alt="Logo" class="w-28  " />
            </router-link>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex gap-6 items-center">
                <NavLinks />
            </div>

            <div class="hidden md:flex gap-4">
                <LocaleDiv color="white" />
            </div>

            <!-- Mobile Menu Toggle Button -->
            <div class="md:hidden flex items-center justify-between gap-3">
                <LocaleDiv color="white" />
                <MenuToggle :isMenuOpen="isMenuOpen" @toggle="toggleMenu" />
            </div>
        </div>

        <!-- Mobile Navigation -->
        <div v-if="isMenuOpen"
            class="absolute top-15 left-0 w-full bg-primary text-white p-4 my-3 flex gap-6 flex-col items-center">
            <NavLinks />
        </div>
    </nav>
</template>
