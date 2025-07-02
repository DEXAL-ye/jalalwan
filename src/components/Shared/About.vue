<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t, tm } = useI18n();

// Define interface for core values
interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

// Get core values using tm() for array/object translations
const coreValues = computed<CoreValue[]>(() => tm('core_values.values') as CoreValue[]);
</script>

<template>
    <div id="about" class="animate-fadeIn py-16 bg-gradient-to-b from-[#FFF9F2] to-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16 relative">
                <h2 class="text-3xl font-bold text-[#9C0B26] inline-block pb-3">{{ t('about_section.title') }}</h2>
                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#D6A756]"></div>
                <p class="mt-6 text-[#7A7A7A] max-w-2xl mx-auto">
                    {{ t('about_section.description') }}
                </p>
            </div>

            <div class="flex flex-col-reverse md:flex-row items-center gap-10 text-start">
                <div class="w-full md:w-1/2 text-start">
                    <h3 class="text-2xl text-start font-bold text-[#9C0B26] mb-6">{{ t('mission_vision.title') }}</h3>
                    <p class="text-[#4B4B4B] mb-5  leading-relaxed" v-html="t('mission_vision.paragraph1')"></p>
                    <p class="text-[#4B4B4B] mb-6 leading-relaxed">
                        {{ t('mission_vision.paragraph2') }}
                    </p>

                    <h3 class="text-2xl font-bold text-[#9C0B26] mt-10 mb-6">{{ t('core_values.title') }}</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div 
                            v-for="(value, index) in coreValues" 
                            :key="index"
                            class="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#D6A756]">
                            <div class="flex items-center gap-3">
                                <div class="bg-[#9C0B26]/10 p-2 rounded-lg">
                                    <i :class="`fas fa-${value.icon} text-[#9C0B26] text-xl`"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-[#222] mb-2">{{ value.title }}</h4>
                                    <p class="text-[#5A5A5A] text-sm">
                                        {{ value.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-10 flex gap-4">
                        <a href="#contact"
                            class="bg-[#D6A756] hover:bg-[#c59442] text-[#222222] font-bold px-6 py-3 rounded-lg transition-colors">
                            {{ t('buttons.contact_us') }}
                        </a>
                        <a href="#agents"
                            class="border-2 border-[#9C0B26] hover:bg-[#9C0B26] hover:text-white text-[#9C0B26] font-bold px-6 py-3 rounded-lg transition-colors">
                            {{ t('buttons.our_agencies') }}
                        </a>
                    </div>
                </div>

                <div class="w-full md:w-1/2">
                    <div class="relative rounded-2xl overflow-hidden shadow-lg">
                        <div class="aspect-w-16 aspect-h-9">
                            <img src="@images/mekup/about-showcase.jpg" :alt="t('team.image_alt')" class="object-cover w-full h-full" />
                        </div>
                        <div
                            class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#9C0B26] to-transparent p-6 text-white">
                            <h3 class="text-xl font-bold">{{ t('team.title') }}</h3>
                            <p class="text-sm mt-2">{{ t('team.description') }}</p>
                        </div>
                        <div class="absolute -top-6 -right-6 bg-[#D6A756] w-24 h-24 rounded-full z-[-1]"></div>
                    </div>

                    <div class="grid grid-cols-2 gap-4 mt-6">
                        <div class="bg-[#9C0B26] text-white p-4 rounded-xl text-center">
                            <p class="text-3xl font-bold">+50</p>
                            <p class="text-sm">{{ t('stats.customer') }}</p>
                        </div>
                        <div class="bg-[#222] text-white p-4 rounded-xl text-center">
                            <p class="text-3xl font-bold">1</p>
                            <p class="text-sm">{{ t('stats.exclusive_agency') }}</p>
                        </div>
                        <div class="bg-[#D6A756] text-[#222] p-4 rounded-xl text-center">
                            <p class="text-3xl font-bold">3+</p>
                            <p class="text-sm">{{ t('stats.upcoming_agencies') }}</p>
                        </div>
                        <div class="bg-white border border-[#D6A756] p-4 rounded-xl text-center">
                            <p class="text-3xl font-bold text-[#9C0B26]">100%</p>
                            <p class="text-sm">{{ t('stats.commitment') }}</p>
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