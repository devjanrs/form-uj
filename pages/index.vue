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
        :items="items" 
        :ui="{ item: 'basis-full' }" 
        class="rounded-lg overflow-hidden" 
        arrows>
        <img :src="item" class="w-full" draggable="false">
    </UCarousel>

    <UButton 
    class="mx-auto flex mt-4 mb-5 bg-teal-800"
    >Realizar inscrição
    </UButton>
</template>