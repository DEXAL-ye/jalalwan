<script setup lang="ts">
import { setLanguage } from '../../utils/language'
import i18n from '../../i18n'

defineProps<{ color?: 'white' | 'black' }>();
</script>

<template>
    <div class="flex items-center">
        <button @click="setLanguage(i18n.global.locale.value === 'ar' ? 'en' : 'ar')">
            <img src="@images/locale-icon.svg" alt="locale" class="w-5 h-5 md:w-6 md:h-6"
                :class="color === 'black' ? 'invert brightness-0' : ''" />
        </button>
    </div>
</template>