<script setup lang="ts">
    const items = [
    'https://raw.githubusercontent.com/devjanrs/form-uj/main/public/slide1.jpeg',
    'https://raw.githubusercontent.com/devjanrs/form-uj/main/public/slide2.jpeg',
    'https://raw.githubusercontent.com/devjanrs/form-uj/main/public/slide3.jpeg'
    ] 
</script>

<template>
    <UCarousel 
    v-slot="{ item }" 
    :items="items" :ui="{ item: 'basis-full' }" 
    class="overflow-hidden mt-4" arrows indicators>

    <img 
    :src="item" 
    class="w-4/6 h-lvh mx-auto" 
    draggable="false">

    </UCarousel>

    <UButton 
    class="mx-auto flex mt-4 mb-5 bg-slate-950"
    icon="i-heroicons-pencil-square"
    >Realizar inscrição!
    </UButton>

    
</template>
