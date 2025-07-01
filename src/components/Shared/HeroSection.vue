<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

// Import your local image
import heroImage from '@images/hero-image.jpg';

const heroImageUrl = ref(heroImage);
</script>

<template>
    <section class="relative w-full text-center bg-cover"
        :style="{ 
            backgroundImage: `linear-gradient(rgba(156, 11, 38, 0.5), rgba(156, 11, 38, 0.9)), url(${heroImageUrl})`,
            paddingTop: 'var(--header-height)'
        }"
        id="home-section">
        <div class="container mx-auto px-4 py-16 min-h-[500px] flex items-center">
            <div class="max-w-3xl mx-auto">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow">
                    {{ t('company_name') }}
                </h1>
                <p class="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto">
                    {{ t('hero_description') }}
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>
#home-section {
    background-size: cover;
    background-position: center;
}

.text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

@media (max-width: 640px) {
    #home-section .container {
        min-height: 400px;
    }

    h1 {
        font-size: 2.5rem;
    }

    p {
        font-size: 1.1rem;
    }
}
</style>