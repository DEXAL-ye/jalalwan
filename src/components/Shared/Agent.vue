<script setup lang="ts">

import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import godetiaImage from '@images/brands/godetia.png';
import maybellineImage from '@images/brands/maybelline.svg';
import lorealImage from '@images/brands/loreal.svg';
import flormarImage from '@images/brands/flormar.svg';
import sheglamImage from '@images/brands/sheglam.svg';
import bourjoisImage from '@images/brands/bourjois.jpg';
import kikoImage from '@images/brands/kiko.svg';
const brands = ref([
    {
        name: 'GODETIA',
        image: godetiaImage,
        category: t('brand_card.0.category'),
        description: t('brand_card.0.description')
    },
    {
        name: 'MAYBELLINE',
        image: maybellineImage,
        category: t('brand_card.1.category'),
        description: t('brand_card.1.description')
    },
    {
        name: 'LOREAL PARIS',
        image: lorealImage, // You'll need to import this
        category: t('brand_card.2.category'),
        description: t('brand_card.2.description')
    },
    {
        name: 'FLORMAR',
        image: flormarImage, // You'll need to import this
        category: t('brand_card.3.category'),
        description: t('brand_card.3.description')
    },
    {
        name: 'SHEGLAM',
        image: sheglamImage, // You'll need to import this
        category: t('brand_card.4.category'),
        description: t('brand_card.4.description')
    },
    {
        name: 'BOURJOIS',
        image: bourjoisImage, // You'll need to import this
        category: t('brand_card.5.category'),
        description: t('brand_card.5.description')
    },
    {
        name: 'KIKO COSMETICS',
        image: kikoImage, // You'll need to import this
        category: t('brand_card.6.category'),
        description: t('brand_card.6.description')
    }
]);
</script>

<template>
    <div class="animate-fadeIn py-16 bg-[#FFF9F2]">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16 relative">
                <h2 class="text-3xl font-bold text-[#9C0B26] inline-block pb-3">{{ t('brands_section.title') }}</h2>
                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#D6A756]"></div>
                <p class="mt-6 text-[#7A7A7A] max-w-2xl mx-auto">
                    {{ t('brands_section.description') }}
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
                <!-- First card spans 2 columns on sm/lg -->
                <div v-for="(brand, index) in brands" :key="index"
                    class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    :class="index === 0 ? 'sm:col-span-2 lg:col-span-6' : 'lg:col-span-3'">
                    <div
                        class="h-48 bg-gradient-to-br from-[#FCF6ED] to-[#FFF9F2] flex items-center justify-center p-6">
                        <img :src="brand.image" :alt="brand.name" class="max-h-32 object-contain">
                    </div>
                    <div class="p-6 text-center border-t-4 border-[#D6A756]">
                        <!-- <span class="inline-block bg-[#9C0B26]/10 text-[#9C0B26] text-sm px-3 py-1 rounded-full mb-3">
                            {{ brand.category }}
                        </span> -->
                        <h3 class="text-xl font-bold text-[#222] mb-3">{{ brand.name }}</h3>
                        <p class="text-[#5A5A5A] text-sm min-h-[60px]">{{ brand.description }}</p>
                    </div>
                </div>
            </div>

            <div class="mt-16 bg-white rounded-2xl shadow-md p-8 md:p-12 max-w-4xl mx-auto">
                <div class="text-center mb-8">
                    <h3 class="text-2xl md:text-3xl font-bold text-[#9C0B26] mb-4">{{ t('agencies_section.title') }}
                    </h3>
                    <p class="text-[#4B4B4B] max-w-3xl mx-auto">
                        {{ t('agencies_section.description') }}
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-8 mt-10">
                    <div>
                        <h4 class="text-xl font-bold text-[#9C0B26] mb-4 flex items-center">
                            <i class="fas fa-star text-[#D6A756] mr-2"></i>
                            {{ t('agencies_section.criteria_title') }}
                        </h4>
                        <ul class="space-y-3 text-[#4B4B4B]">
                            <li v-for="i in 5" :key="'criteria_' + i" class="flex items-start">
                                <i class="fas fa-check-circle text-[#D6A756] mt-1 mr-2"></i>
                                <span>{{ t(`agencies_section.criteria_${i}`) }}</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="text-xl font-bold text-[#9C0B26] mb-4 flex items-center">
                            <i class="fas fa-handshake text-[#D6A756] mr-2"></i>
                            {{ t('agencies_section.advantages_title') }}
                        </h4>
                        <ul class="space-y-3 text-[#4B4B4B]">
                            <li v-for="i in 5" :key="'advantage_' + i" class="flex items-start">
                                <i class="fas fa-check-circle text-[#D6A756] mt-1 mr-2"></i>
                                <span>{{ t(`agencies_section.advantage_${i}`) }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="text-center mt-16">
                <a href="#contact"
                    class="inline-flex items-center gap-2 bg-[#9C0B26] hover:bg-[#8a0a21] text-white font-bold px-8 py-3 rounded-lg transition-colors">
                    {{ t('become_partner_btn') }}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-gradient-to-br {
    background: linear-gradient(135deg, #FCF6ED 0%, #FFF9F2 100%);
}
</style>