<script setup lang="ts">
import { ref } from 'vue';

// Import your local image
import heroImage from '@images/hero-image.jpg';

// If using a dynamic image name (optional)
const heroImageUrl = ref(heroImage);
</script>

<template>
    <section class="flex items-center justify-center w-full text-center bg-cover"    :style="{ backgroundImage: `linear-gradient(rgba(156, 11, 38, 0.5), rgba(156, 11, 38, 0.9)), url(${heroImageUrl})` }" id="home-section">
        <div class="container mx-auto px-4 py-16">
            <div class="max-w-3xl mx-auto">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow">
                    مرحبًا بكم في شركة جلوان
                </h1>
                <p class="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto">
                    شركة رائدة في مجالها، تقدم حلولاً مبتكرة وخدمات عالية الجودة
                </p>
                <a href="#"
                    class="inline-block px-8 py-3 text-lg font-medium bg-white text-primary rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
                    اكتشف المزيد
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    height: 500px;
    background-size: cover;
    background-position: center;
}

.text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

@media (max-width: 640px) {
    section {
        height: 400px;
    }

    h1 {
        font-size: 2.5rem;
    }

    p {
        font-size: 1.1rem;
    }
}
</style>