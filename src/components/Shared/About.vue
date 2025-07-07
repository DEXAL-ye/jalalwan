<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t, tm, locale } = useI18n();

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
                        <div v-for="(value, index) in coreValues" :key="index"
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
                            <img src="@images/mekup/about-showcase.jpg" :alt="t('team.image_alt')"
                                class="object-cover w-full h-full" />
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
    <div id="contact" class="animate-fadeIn py-16 bg-[#FFF9F2] pt-28">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16 relative">
                <h2 class="text-3xl font-bold text-[#9C0B26] inline-block pb-3">
                    {{ t('contact.heading') }}
                </h2>
                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#D6A756]"></div>
                <p class="mt-6 text-[#7A7A7A] max-w-2xl mx-auto">
                    {{ t('contact.subheading') }}
                </p>
            </div>

            <div class="flex flex-col lg:flex-row gap-10 items-stretch">
                <!-- Contact Information -->
                <div class="w-full lg:w-1/2 bg-[#9C0B26] text-white rounded-2xl p-8 shadow-xl">
                    <h3 class="text-2xl font-bold mb-8 relative pb-4">
                        {{ t('contact.info_heading') }}
                        <div class="absolute bottom-0 w-10 h-1 bg-[#D6A756]"
                            :class="locale === 'ar' ? 'right-0' : 'left-0'"></div>
                    </h3>

                    <div class="space-y-7">
                        <!-- Phone with WhatsApp link -->
                        <div class="flex items-start">
                            <div
                                class="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-phone-alt text-[#D6A756] text-xl"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg">{{ t('contact.phone_label') }}</h4>
                                <p class="mt-1">
                                    <a :href="`https://wa.me/${t('contact.phone_value').replace(/[^\d]/g, '')}`"
                                        target="_blank"
                                        class="hover:underline transition-all  duration-300 hover:text-[#D6A756]"
                                        dir="ltr">
                                        {{ t('contact.phone_value') }}
                                    </a>
                                </p>
                            </div>
                        </div>

                        <!-- Email with mailto link -->
                        <div class="flex items-start">
                            <div
                                class="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-envelope text-[#D6A756] text-xl"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg">{{ t('contact.email_label') }}</h4>
                                <p class="mt-1">
                                    <a :href="`mailto:${t('contact.email_value')}`"
                                        class="hover:underline transition-all duration-300 hover:text-[#D6A756]">
                                        {{ t('contact.email_value') }}
                                    </a>
                                </p>
                            </div>
                        </div>

                        <!-- Address -->
                        <div class="flex items-start">
                            <div
                                class="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-map-marker-alt text-[#D6A756] text-xl"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg">{{ t('contact.address_label') }}</h4>
                                <p class="mt-1">{{ t('contact.address_line1') }}</p>
                                <p class="mt-1">{{ t('contact.address_line2') }}</p>
                                <p class="mt-1">{{ t('contact.address_line3') }}</p>
                            </div>
                        </div>

                        <!-- Commercial Registration -->
                        <div class="flex items-start">
                            <div
                                class="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-file-alt text-[#D6A756] text-xl"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg">{{ t('contact.cr_label') }}</h4>
                                <p class="mt-1">{{ t('contact.cr_value') }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Map Section -->
                <div class="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl relative">
                    <div class="h-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.444062526807!2d39.18273831541619!3d21.56826177482348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d06eb0eada53%3A0xa265b30c08915e0f!2z2KfZhNmF2LnZhdiv2Kog2KfZhNiv2YjZhdin2YU!5e0!3m2!1sen!2ssa!4v1658322347658!5m2!1sen!2ssa"
                            class="w-full h-full min-h-[500px] border-0" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>

                        <div class="absolute bottom-4 right-4 bg-white rounded-lg shadow-md py-2 px-4">
                            <a href="https://www.google.com/maps/place/JESA6619,+6619+Abu+Al+Fadl+Al+Mouhsi,+2603,+As+Salamah+District,+Jeddah+23436,+Saudi+Arabia/@21.5802697,39.1470876,18z/data=!3m1!4b1!4m10!1m2!2m1!1z2K3ZiiDYp9mE2LPZhNin2YXYqSAtINij2KjZiCDYp9mE2YHYttmEINin2YTZhdit2LPZiiA2NjE5INis2K_YqSDYjDIzNDM2INin2YTZhdmF2YTZg9ipINin2YTYudix2KjZitipINin2YTYs9i52YjYr9mK2Kkg4oCTINmH2KfYqtmBIDAwOTY2NTA1MTQ0NiDYsy7YqiA0MDMwNTk1MzM4!3m6!1s0x15c3da848293561b:0x3e8c805069fa976e!8m2!3d21.5802697!4d39.1490991!15sCqIB2K3ZiiDYp9mE2LPZhNin2YXYqSAtINij2KjZiCDYp9mE2YHYttmEINin2YTZhdit2LPZiiA2NjE5INis2K_YqSDYjDIzNDM2INin2YTZhdmF2YTZg9ipINin2YTYudix2KjZitipINin2YTYs9i52YjYr9mK2Kkg4oCTINmH2KfYqtmBIDAwOTY2NTA1MTQ0NiDYsy7YqiA0MDMwNTk1MzM4kgERY29tcG91bmRfYnVpbGRpbmfgAQA!16s%2Fg%2F11k6bby4xc?entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                class="text-[#9C0B26] font-bold flex items-center hover:text-[#D6A756] transition-colors">
                                <i class="fas fa-directions mr-2"></i>
                                {{ t('contact.directions') }}
                            </a>
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