<script setup lang="ts">
// No complex logic needed for this component
</script>

<template>
    <div id="about" class="animate-fadeIn">
        <div class="text-center mb-12 relative">
            <h2 class="text-3xl font-bold text-[#9C0B26] inline-block pb-3">من نحن</h2>
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#D6A756]"></div>
        </div>

        <div class="flex flex-col md:flex-row-reverse items-center gap-8">
            <div
                class="w-full md:w-1/2 bg-gray-200 border-2 border-dashed rounded-xl h-96 flex items-center justify-center text-[#4B4B4B]">
                <i class="fas fa-users text-6xl"></i>
            </div>

            <div class="w-full md:w-1/2 text-right">
                <h3 class="text-2xl font-bold text-[#9C0B26] mb-4">قصتنا ورؤيتنا</h3>
                <p class="text-[#4B4B4B] mb-4">
                    تأسست شركة جلوان عام 2005 بمدينة جدة، المملكة العربية السعودية. ومنذ تأسيسها، سعت الشركة لتحقيق
                    التميز في تقديم الحلول والخدمات المتكاملة لعملائها في مختلف القطاعات.
                </p>
                <p class="text-[#4B4B4B] mb-6">
                    نحن نؤمن بأن النجاح الحقيقي يأتي من خلال الالتزام بأعلى معايير الجودة والشفافية في التعامل، وبناء
                    علاقات طويلة الأمد مع عملائنا وشركائنا.
                </p>

                <h3 class="text-2xl font-bold text-[#9C0B26] mt-8 mb-4">قيمنا الأساسية</h3>
                <ul class="text-[#4B4B4B] space-y-2 mb-6">
                    <li class="flex items-start">
                        <i class="fas fa-check-circle text-[#D6A756] mt-1 mr-2"></i>
                        <span>الالتزام بالجودة والتميز في الأداء</span>
                    </li>
                    <li class="flex items-start">
                        <i class="fas fa-check-circle text-[#D6A756] mt-1 mr-2"></i>
                        <span>الشفافية والنزاهة في التعامل</span>
                    </li>
                    <li class="flex items-start">
                        <i class="fas fa-check-circle text-[#D6A756] mt-1 mr-2"></i>
                        <span>الابتكار والتطوير المستمر</span>
                    </li>
                    <li class="flex items-start">
                        <i class="fas fa-check-circle text-[#D6A756] mt-1 mr-2"></i>
                        <span>التركيز على رضا العملاء</span>
                    </li>
                    <li class="flex items-start">
                        <i class="fas fa-check-circle text-[#D6A756] mt-1 mr-2"></i>
                        <span>المسؤولية الاجتماعية</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>