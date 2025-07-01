<script setup lang="ts">
// No complex logic needed for this component
</script>

<template>
    <div id="about" class="animate-fadeIn py-16 bg-gradient-to-b from-[#FFF9F2] to-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16 relative">
                <h2 class="text-3xl font-bold text-[#9C0B26] inline-block pb-3">من نحن</h2>
                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#D6A756]"></div>
                <p class="mt-6 text-[#7A7A7A] max-w-2xl mx-auto">
                    شركاؤك في بناء حضور العلامات التجارية في سوق التجميل
                </p>
            </div>

            <div class="flex flex-col-reverse md:flex-row items-center gap-10">
                <div class="w-full md:w-1/2 text-right">
                    <h3 class="text-2xl font-bold text-[#9C0B26] mb-6">رسالتنا ورؤيتنا</h3>
                    <p class="text-[#4B4B4B] mb-5 leading-relaxed">
                        تأسست <span class="font-bold text-[#9C0B26]">مؤسسة جملة الألوان التجارية</span> لتكون شريكًا
                        استراتيجيًا
                        للعلامات العالمية في قطاع التجميل. بدأنا رحلتنا بتمثيل وكالة واحدة، وحققنا لها انتشارًا واسعًا
                        في
                        السوق المحلي بفضل شبكتنا التوزيعية القوية.
                    </p>
                    <p class="text-[#4B4B4B] mb-6 leading-relaxed">
                        نسعى اليوم لتوسيع محفظتنا من الوكالات التجارية الفاخرة، لنكون الجسر الذي يربط بين
                        العلامات العالمية الراقية ومتاجر التجزئة في المنطقة. نطمح أن نصبح بيت التوزيع
                        الأول لمنتجات الجمال في الشرق الأوسط بحلول 2028.
                    </p>

                    <h3 class="text-2xl font-bold text-[#9C0B26] mt-10 mb-6">قيمنا الأساسية</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#D6A756]">
                            <div class="flex items-start">
                                <div class="bg-[#9C0B26]/10 p-2 rounded-lg mr-4">
                                    <i class="fas fa-handshake text-[#9C0B26] text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-[#222] mb-2">الشراكة الاستراتيجية</h4>
                                    <p class="text-[#5A5A5A] text-sm">
                                        نتعامل مع العلامات التجارية كشركاء نجاح وليس مجرد وكالات
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#D6A756]">
                            <div class="flex items-start">
                                <div class="bg-[#9C0B26]/10 p-2 rounded-lg mr-4">
                                    <i class="fas fa-truck text-[#9C0B26] text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-[#222] mb-2">كفاءة التوزيع</h4>
                                    <p class="text-[#5A5A5A] text-sm">
                                        شبكة لوجستية تغطي جميع مناطق المملكة بمواعيد دقيقة
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#D6A756]">
                            <div class="flex items-start">
                                <div class="bg-[#9C0B26]/10 p-2 rounded-lg mr-4">
                                    <i class="fas fa-chart-line text-[#9C0B26] text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-[#222] mb-2">النمو المشترك</h4>
                                    <p class="text-[#5A5A5A] text-sm">
                                        نجاح العلامات التجارية هو مقياس نجاحنا الأساسي
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#D6A756]">
                            <div class="flex items-start">
                                <div class="bg-[#9C0B26]/10 p-2 rounded-lg mr-4">
                                    <i class="fas fa-lightbulb text-[#9C0B26] text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-[#222] mb-2">الابتكار المستمر</h4>
                                    <p class="text-[#5A5A5A] text-sm">
                                        نطور حلولاً توزيعية مبتكرة تناسب متغيرات سوق التجميل
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-10 flex gap-4">
                        <a href="#contact"
                            class="bg-[#D6A756] hover:bg-[#c59442] text-[#222222] font-bold px-6 py-3 rounded-lg transition-colors">
                            تواصل معنا
                        </a>
                        <a href="#agencies"
                            class="border-2 border-[#9C0B26] hover:bg-[#9C0B26] hover:text-white text-[#9C0B26] font-bold px-6 py-3 rounded-lg transition-colors">
                            تعرف على وكالاتنا
                        </a>
                    </div>
                </div>

                <div class="w-full md:w-1/2">
                    <div class="relative rounded-2xl overflow-hidden shadow-lg">
                        <div class="aspect-w-16 aspect-h-9">
                            <img src="@images/mekup/about-showcase.jpg" alt="فريق مؤسسة جملة الألوان"
                                class="object-cover w-full h-full" />
                        </div>
                        <div
                            class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#9C0B26] to-transparent p-6 text-white">
                            <h3 class="text-xl font-bold">فريقنا المتخصص</h3>
                            <p class="text-sm mt-2">خبراء في توزيع وتسويق مستحضرات التجميل</p>
                        </div>
                        <div class="absolute -top-6 -right-6 bg-[#D6A756] w-24 h-24 rounded-full z-[-1]"></div>
                    </div>

                    <div class="grid grid-cols-2 gap-4 mt-6">
                        <div class="bg-[#9C0B26] text-white p-4 rounded-xl text-center">
                            <p class="text-3xl font-bold">+50</p>
                            <p class="text-sm">منفذ بيع</p>
                        </div>
                        <div class="bg-[#222] text-white p-4 rounded-xl text-center">
                            <p class="text-3xl font-bold">1</p>
                            <p class="text-sm">وكالة حصرية</p>
                        </div>
                        <div class="bg-[#D6A756] text-[#222] p-4 rounded-xl text-center">
                            <p class="text-3xl font-bold">3+</p>
                            <p class="text-sm">وكالات جديدة قريبًا</p>
                        </div>
                        <div class="bg-white border border-[#D6A756] p-4 rounded-xl text-center">
                            <p class="text-3xl font-bold text-[#9C0B26]">100%</p>
                            <p class="text-sm">التزام بنجاح شركائنا</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-gradient-to-b {
    background: linear-gradient(to bottom, #FFF9F2 0%, white 100%);
}
</style>