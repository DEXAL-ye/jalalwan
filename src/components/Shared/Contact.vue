<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, reactive } from 'vue'

const { t, locale } = useI18n()

// Form data and state
const formData = reactive({
    name: '',
    email: '',
    phone: '',
    message: ''
})

const submissionStatus = ref<string | null>(null)
const isSubmitting = ref(false)

const submitForm = () => {
    isSubmitting.value = true

    // Simulate form submission
    setTimeout(() => {
        const isSuccess = Math.random() > 0.2
        submissionStatus.value = isSuccess ? 'success' : 'error'
        isSubmitting.value = false

        if (isSuccess) {
            // Compose email content
            const subject = encodeURIComponent(`${t('contact.form_subject_prefix')} ${formData.name}`);
            const body = encodeURIComponent(
                `${t('contact.form_body_name')}: ${formData.name}\n\n` +
                `${t('contact.form_body_email')}: ${formData.email}\n\n` +
                `${t('contact.form_body_phone')}: ${formData.phone}\n\n` +
                `${t('contact.form_body_message')}:\n${formData.message}`
            );
            
            // Open email client
            const mailtoLink = `mailto:info@jalalwan.com?subject=${subject}&body=${body}`;
            window.location.href = mailtoLink;

            // Reset form on success
            formData.name = ''
            formData.email = ''
            formData.phone = ''
            formData.message = ''

            // Clear status after 5 seconds
            setTimeout(() => {
                submissionStatus.value = null
            }, 5000)
        }
    }, 1500)
}
</script>

<template>
    <div id="contact" class="animate-fadeIn py-16 bg-[#FFF9F2]">
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
                        <!-- Email with mailto link -->
                        <div class="flex items-start">
                            <div
                                class="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-envelope text-[#D6A756] text-xl"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg">{{ t('contact.email_label') }}</h4>
                                <p class="mt-1">
                                    <a href="mailto:info@jalalwan.com"
                                        class="hover:underline transition-all duration-300 hover:text-[#D6A756]">
                                        info@jalalwan.com
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
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form Section -->
                <div class="w-full lg:w-1/2 bg-white rounded-2xl p-8 shadow-xl">
                    <h3 class="text-2xl font-bold mb-8 relative pb-4 text-[#9C0B26]">
                        {{ t('contact.form_title') }}
                        <div class="absolute bottom-0 w-10 h-1 bg-[#D6A756]"
                            :class="locale === 'ar' ? 'right-0' : 'left-0'"></div>
                    </h3>

                    <form @submit.prevent="submitForm" class="space-y-6">
                        <!-- Name Field -->
                        <div>
                            <label class="block text-[#7A7A7A] font-medium mb-2">
                                {{ t('contact.form_name') }}
                            </label>
                            <input type="text" v-model="formData.name" required
                                class="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#9C0B26]/50 focus:border-[#9C0B26] transition-all"
                                :placeholder="t('contact.form_name_placeholder')">
                        </div>

                        <!-- Email Field -->
                        <div>
                            <label class="block text-[#7A7A7A] font-medium mb-2">
                                {{ t('contact.form_email') }}
                            </label>
                            <input type="email" v-model="formData.email" required
                                class="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#9C0B26]/50 focus:border-[#9C0B26] transition-all"
                                :placeholder="t('contact.form_email_placeholder')">
                        </div>

                        <!-- Phone Field -->
                        <div>
                            <label class="block text-[#7A7A7A] font-medium mb-2">
                                {{ t('contact.form_phone') }}
                            </label>
                            <input type="tel" v-model="formData.phone" required
                                class="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#9C0B26]/50 focus:border-[#9C0B26] transition-all"
                                :placeholder="t('contact.form_phone_placeholder')">
                        </div>

                        <!-- Message Field -->
                        <div>
                            <label class="block text-[#7A7A7A] font-medium mb-2">
                                {{ t('contact.form_message') }}
                            </label>
                            <textarea v-model="formData.message" required rows="5"
                                class="w-full px-4 py-3 rounded-lg border border-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#9C0B26]/50 focus:border-[#9C0B26] transition-all"
                                :placeholder="t('contact.form_message_placeholder')"></textarea>
                        </div>

                        <!-- Submit Button -->
                        <button type="submit" :disabled="isSubmitting"
                            class="w-full bg-[#9C0B26] hover:bg-[#800920] text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
                            :class="isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'">

                            <span v-if="!isSubmitting">{{ t('contact.form_button') }}</span>
                            <span v-else>{{ t('contact.form_sending') }}</span>

                            <i class="fas ml-3" :class="isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'"></i>
                        </button>
                    </form>

                    <!-- Submission Status Messages -->
                    <div v-if="submissionStatus === 'success'"
                        class="mt-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-start">
                        <i class="fas fa-check-circle mt-1 mr-3 text-green-600"></i>
                        <div>
                            <p class="font-medium">{{ t('contact.form_success') }}</p>
                            <p class="text-sm mt-1">{{ t('contact.form_success_note') }}</p>
                        </div>
                    </div>

                    <div v-else-if="submissionStatus === 'error'"
                        class="mt-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-start">
                        <i class="fas fa-exclamation-circle mt-1 mr-3 text-red-600"></i>
                        <div>
                            <p class="font-medium">{{ t('contact.form_error') }}</p>
                            <p class="text-sm mt-1">{{ t('contact.form_error_note') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Add any additional styles if needed */
</style>