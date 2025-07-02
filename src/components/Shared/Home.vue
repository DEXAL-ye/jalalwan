<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
    <div class="animate-fadeIn py-16 md:py-24 bg-gradient-to-l from-[#FFF5F0] to-white">
        <div class="container mx-auto px-4">
            <div class="flex flex-col-reverse md:flex-row items-center gap-10">
                <!-- Text Section -->
                <div class="w-full md:w-1/2 text-start">
                    <h2 class="text-4xl md:text-5xl font-bold text-[#9C0B26] mb-6">
                        {{ t('homepage.title') }}
                    </h2>
                    <p class="text-[#4B4B4B] text-lg mb-5 leading-relaxed">


                        {{ t('homepage.description') }}
                    </p>
                    <p class="text-[#4B4B4B] text-lg mb-8 leading-relaxed">

                        {{ t('homepage.description2') }}
                    </p>
                    <div class="flex gap-4">
                        <a href="#contact"
                            class="bg-[#D6A756] hover:bg-[#c59442] text-[#222222] font-bold px-8 py-3 rounded-lg transition-colors">
                            {{ t('homepage.contact') }}
                        </a>
                    </div>
                </div>

                <!-- Image Section -->
                <div class="w-full md:w-1/2 flex justify-center">
                    <div class="relative">
                        <img src="@images/mekup/hero-products.png" alt="منتجات التجميل الفاخرة"
                            class="max-h-[500px] object-contain transform hover:scale-105 transition-transform duration-500" />
                        <div class="absolute -bottom-6 -left-6 bg-[#D6A756] w-24 h-24 rounded-full z-[-1]"></div>
                        <div class="absolute -top-6 -right-6 bg-[#9C0B26] w-16 h-16 rounded-full z-[-1]"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-gradient-to-l {
    background: linear-gradient(to left, #FFF5F0 0%, white 70%);
}

@media (max-width: 768px) {
    .flex-col-reverse {
        flex-direction: column-reverse;
    }
}
</style>