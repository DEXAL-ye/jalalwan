<script setup lang="ts">
import { ref } from 'vue';
import type { Agent } from '../../types/var';

const agents = ref<Agent[]>([
    { name: 'محمد أحمد', position: 'وكيل منطقة الرياض', phone: '+966 55 123 4567' },
    { name: 'خالد عبدالله', position: 'وكيل منطقة مكة المكرمة', phone: '+966 55 234 5678' },
    { name: 'سعيد حسن', position: 'وكيل المنطقة الشرقية', phone: '+966 55 345 6789' },
    { name: 'عمر ناصر', position: 'وكيل منطقة المدينة المنورة', phone: '+966 55 456 7890' }
]);
</script>

<template>
    <div class="animate-fadeIn">
        <div class="text-center mb-12 relative">
            <h2 class="text-3xl font-bold text-[#9C0B26] inline-block pb-3">وكلاؤنا</h2>
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#D6A756]"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(agent, index) in agents" :key="index"
                class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div class="bg-[#D6A756] h-48 flex items-center justify-center">
                    <i class="fas fa-user-tie text-white text-6xl"></i>
                </div>
                <div class="p-6 text-center">
                    <h3 class="text-xl font-bold text-[#9C0B26] mb-2">{{ agent.name }}</h3>
                    <p class="text-[#4B4B4B] mb-2">{{ agent.position }}</p>
                    <p class="text-[#4B4B4B] font-medium">{{ agent.phone }}</p>
                </div>
            </div>
        </div>
    </div>
</template>