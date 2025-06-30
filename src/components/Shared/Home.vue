<script setup lang="ts">
// No complex logic needed for this component
</script>

<template>
    <div class="animate-fadeIn">
        <div class="text-center mb-12 relative">
            <h2 class="text-3xl font-bold text-[#9C0B26] inline-block pb-3">خدماتنا المميزة</h2>
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#D6A756]"></div>
        </div>

        <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="w-full md:w-1/2 text-right">
                <h3 class="text-2xl font-bold text-[#9C0B26] mb-4">شركتكم للمستقبل</h3>
                <p class="text-[#4B4B4B] mb-4">
                    تأسست شركة جلوان بهدف تقديم حلول مبتكرة وخدمات عالية الجودة لعملائنا في مختلف المجالات. نسعى دائمًا
                    لتحقيق التميز والريادة من خلال فريق عمل محترف وذو خبرة واسعة.
                </p>
                <p class="text-[#4B4B4B] mb-6">
                    نؤمن في شركة جلوان بأن نجاح عملائنا هو نجاح لنا، لذلك نعمل بجد لتقديم أفضل الحلول التي تلبي
                    احتياجاتهم وتتجاوز توقعاتهم.
                </p>
                <a href="#"
                    class="inline-block bg-[#D6A756] text-[#222222] font-bold px-6 py-2 rounded-lg hover:bg-[#c59442] transition-colors">
                    المزيد عنا
                </a>
            </div>
            <div
                class="w-full md:w-1/2 bg-gray-200 border-2 border-dashed rounded-xl h-80 flex items-center justify-center text-[#4B4B4B]">
                <i class="fas fa-building text-6xl"></i>
            </div>

            
        </div>
    </div>
</template>