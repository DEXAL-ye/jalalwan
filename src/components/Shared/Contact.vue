<script setup lang="ts">
// No complex logic needed for this component
</script>

<template>
    <div class="animate-fadeIn">
        <div class="text-center mb-12 relative">
            <h2 class="text-3xl font-bold text-[#9C0B26] inline-block pb-3">اتصل بنا</h2>
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#D6A756]"></div>
        </div>

        <div class="flex flex-col lg:flex-row gap-8">
            <div class="w-full lg:w-1/2 bg-[#9C0B26] text-white rounded-xl p-8">
                <h3 class="text-2xl font-bold mb-6 relative pb-4">
                    معلومات التواصل
                    <div class="absolute bottom-0 left-0 w-16 h-1 bg-[#D6A756]"></div>
                </h3>

                <div class="space-y-6">
                    <div class="flex items-start">
                        <div
                            class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                            <i class="fas fa-phone text-[#D6A756] text-xl"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-lg">رقم الهاتف</h4>
                            <p>+9665505651446</p>
                        </div>
                    </div>

                    <div class="flex items-start">
                        <div
                            class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                            <i class="fas fa-envelope text-[#D6A756] text-xl"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-lg">البريد الإلكتروني</h4>
                            <p>info@jalalwan.com</p>
                        </div>
                    </div>

                    <div class="flex items-start">
                        <div
                            class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                            <i class="fas fa-id-card text-[#D6A756] text-xl"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-lg">رقم السجل التجاري</h4>
                            <p>4030061641</p>
                        </div>
                    </div>

                    <div class="flex items-start">
                        <div
                            class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                            <i class="fas fa-map-marker-alt text-[#D6A756] text-xl"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-lg">العنوان</h4>
                            <p>حي السلامة - أبو الفضل المحسي 6619 جدة ،23436 المملكة العربية السعودية</p>
                            <p class="mt-2">As Salamah Dist, Abu Alfadlh Almohsei 6619, Jeddah, Kingdom of Saudi Arabia
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full lg:w-1/2 bg-gray-200 rounded-xl flex items-center justify-center h-96">
                <div class="text-center text-[#4B4B4B]">
                    <i class="fas fa-map-marked-alt text-5xl mb-4"></i>
                    <p class="text-xl font-bold">خريطة الموقع</p>
                </div>
            </div>
        </div>
    </div>
</template>