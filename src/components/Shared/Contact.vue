<script setup lang="ts">
// No complex logic needed for this component
</script>

<template>
    <div id="contact" class="animate-fadeIn py-16 bg-[#FFF9F2]">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16 relative">
                <h2 class="text-3xl font-bold text-[#9C0B26] inline-block pb-3">تواصل معنا</h2>
                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#D6A756]"></div>
                <p class="mt-6 text-[#7A7A7A] max-w-2xl mx-auto">
                    نرحب باستفساراتكم وأسئلتكم في أي وقت
                </p>
            </div>

            <div class="flex flex-col lg:flex-row gap-10 items-stretch">
                <!-- Contact Information -->
                <div class="w-full lg:w-1/2 bg-[#9C0B26] text-white rounded-2xl p-8 shadow-xl">
                    <h3 class="text-2xl font-bold mb-8 relative pb-4">
                        معلومات التواصل
                        <div class="absolute bottom-0 left-0 w-16 h-1 bg-[#D6A756]"></div>
                    </h3>

                    <div class="space-y-7">
                        <div class="flex items-start">
                            <div class="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-phone-alt text-[#D6A756] text-xl"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg">الهاتف</h4>
                                <p class="mt-1">+966 55 056 5146</p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-envelope text-[#D6A756] text-xl"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg">البريد الإلكتروني</h4>
                                <p class="mt-1">info@jomalat-alwan.com</p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-map-marker-alt text-[#D6A756] text-xl"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg">المقر الرئيسي</h4>
                                <p class="mt-1">حي السلامة، جدة 23436</p>
                                <p class="mt-1">المملكة العربية السعودية</p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-clock text-[#D6A756] text-xl"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg">ساعات العمل</h4>
                                <p class="mt-1">الأحد - الخميس: 8 صباحًا - 5 مساءً</p>
                                <p class="mt-1">الجمعة والسبت: إجازة</p>
                            </div>
                        </div>

                        <div class="pt-6 border-t border-white/20">
                            <h4 class="font-bold text-lg mb-3">تابعنا</h4>
                            <div class="flex gap-4">
                                <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D6A756] transition-colors">
                                    <i class="fab fa-instagram text-white"></i>
                                </a>
                                <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D6A756] transition-colors">
                                    <i class="fab fa-linkedin-in text-white"></i>
                                </a>
                                <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D6A756] transition-colors">
                                    <i class="fab fa-x-twitter text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Map Section -->
                <div class="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl">
                    <div class="h-full">
                        <!-- Google Maps Embed -->
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.444062526807!2d39.18273831541619!3d21.56826177482348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d06eb0eada53%3A0xa265b30c08915e0f!2z2KfZhNmF2LnZhdiv2Kog2KfZhNiv2YjZhdin2YU!5e0!3m2!1sen!2ssa!4v1658322347658!5m2!1sen!2ssa" 
                            class="w-full h-full min-h-[500px] border-0"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                        
                        <div class="absolute bottom-4 right-4 bg-white rounded-lg shadow-md py-2 px-4">
                            <a href="https://goo.gl/maps/3YbJk5XmZz5ZbZJQ8" target="_blank" class="text-[#9C0B26] font-bold flex items-center">
                                <i class="fas fa-directions mr-2"></i>
                                اتبع الإرشادات
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>