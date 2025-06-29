<script setup lang="ts">
</script>
<template>
      <footer class="bg-secondary text-white pt-12 pb-6">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 class="text-xl font-bold mb-4 relative pb-2">
                            شركة جلوان
                            <div class="absolute bottom-0 left-0 w-10 h-1 bg-accent"></div>
                        </h3>
                        <p class="text-gray-300 mb-4">
                            شركة رائدة في مجالها، تقدم حلولاً مبتكرة وخدمات عالية الجودة لعملائها في المملكة العربية السعودية والمنطقة.
                        </p>
                        <div class="flex space-x-3 space-x-reverse">
                            <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-xl font-bold mb-4 relative pb-2">
                            روابط سريعة
                            <div class="absolute bottom-0 left-0 w-10 h-1 bg-accent"></div>
                        </h3>
                        <ul class="space-y-2">
                            <li >
                                <a href="#" 
                                   @click.prevent=""
                                   class="text-gray-300 hover:text-accent transition-colors">
                                  
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 class="text-xl font-bold mb-4 relative pb-2">
                            اتصل بنا
                            <div class="absolute bottom-0 left-0 w-10 h-1 bg-accent"></div>
                        </h3>
                        <ul class="space-y-3 text-gray-300">
                            <li class="flex items-start">
                                <i class="fas fa-phone mt-1 mr-2 text-accent"></i>
                                <span>+9665505651446</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-envelope mt-1 mr-2 text-accent"></i>
                                <span>info@jalalwan.com</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-map-marker-alt mt-1 mr-2 text-accent"></i>
                                <span>حي السلامة، جدة، المملكة العربية السعودية</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="pt-6 border-t border-gray-700 text-center text-gray-400">
                    <p>جميع الحقوق محفوظة &copy; 2023 شركة جلوان | السجل التجاري: 4030061641</p>
                </div>
            </div>
        </footer>
</template>