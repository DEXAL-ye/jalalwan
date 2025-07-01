<script setup lang="ts">
import { ref } from 'vue';

interface Brand {
    id: number;
    logo: string;
    name: string;
    category: string;
    description: string;
}

const brands = ref<Brand[]>([
    {
        id: 1,
        logo: '/images/brands/brand1.png',
        name: 'لوكس كوزمتكس',
        category: 'مكياج فاخر',
        description: 'منتجات عالية الجودة مع تركيز على الظلال والماسكارا'
    },
    {
        id: 2,
        logo: '/images/brands/brand2.png',
        name: 'جلوري سكين',
        category: 'العناية بالبشرة',
        description: 'مستحضرات ترطيب وتغذية البشرة من مصادر طبيعية'
    },
    {
        id: 3,
        logo: '/images/brands/coming-soon.png',
        name: 'وكالة جديدة',
        category: 'قريباً',
        description: 'نبحث عن وكالات جديدة لضمها إلى عائلتنا'
    },
    {
        id: 4,
        logo: '/images/brands/coming-soon.png',
        name: 'وكالة جديدة',
        category: 'قريباً',
        description: 'كن شريكنا في رحلة النجاح'
    }
]);
</script>

<template>
    <div class="animate-fadeIn py-16 bg-[#FFF9F2]">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16 relative">
                <h2 class="text-3xl font-bold text-[#9C0B26] inline-block pb-3">العلامات التجارية</h2>
                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#D6A756]"></div>
                <p class="mt-6 text-[#7A7A7A] max-w-2xl mx-auto">
                    نفتخر بتمثيل العلامات الرائدة في عالم الجمال، ونسعى دائمًا لتوسيع محفظتنا
                    بعلامات تجارية جديدة تشاركنا رؤيتنا للتميز
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div v-for="brand in brands" :key="brand.id"
                    class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

                    <!-- Brand Logo -->
                    <div
                        class="h-48 bg-gradient-to-br from-[#FCF6ED] to-[#FFF9F2] flex items-center justify-center p-6">
                        <img :src="brand.logo" :alt="brand.name" class="max-h-32 object-contain">
                    </div>

                    <!-- Brand Info -->
                    <div class="p-6 text-center border-t-4 border-[#D6A756]">
                        <span class="inline-block bg-[#9C0B26]/10 text-[#9C0B26] text-sm px-3 py-1 rounded-full mb-3">
                            {{ brand.category }}
                        </span>
                        <h3 class="text-xl font-bold text-[#222] mb-3">{{ brand.name }}</h3>
                        <p class="text-[#5A5A5A] text-sm min-h-[60px]">{{ brand.description }}</p>
                    </div>
                </div>
            </div>

            <div class="text-center mt-16">
                <a href="#contact"
                    class="inline-flex items-center gap-2 bg-[#9C0B26] hover:bg-[#8a0a21] text-white font-bold px-8 py-3 rounded-lg transition-colors">
                    تريد أن تصبح شريكنا؟
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