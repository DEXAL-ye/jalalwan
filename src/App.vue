<template>
  <router-view />
</template>

<script lang="ts">
import { initLanguage } from './utils/language';
import { defineComponent } from 'vue'

initLanguage()

export default defineComponent({
  name: 'App'
});
</script>