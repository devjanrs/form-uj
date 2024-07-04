<script setup lang="ts">
import { UiSideMenu } from "#components";

const slideover = useSlideover();

const openSideMenu = () => {
  slideover.open(UiSideMenu, {
    onClose: slideover.close,
  });
};

const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>
<template>
  <header class="bg-neutral-900">
    <div
      class="flex justify-between items-center text-white text-2xl px-4 py-2"
    >
      <div class="flex gap-4 items-center">
        <UIcon name="i-material-symbols-menu" @click="openSideMenu" />
        <NuxtImg fit="cover" src="logo-unidade.png" width="110"/>       
      </div>
      <div class="flex justify-between items-end text-lg font-mono px-4 gap-10 ml-auto">

        <div class="flex px-4 gap-8 items-center justify-center text-nowrap text-sm">

        <NuxtLink 
          to="https://www.instagram.com/unidadejovem/" 
          external 
          target="blank">
            <UIcon name="i-heroicons-share-solid" />
              Mídias
        </NuxtLink>
        </div>
        
      </div>
      <UButton
        :icon="
          isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
        "
        color="white"
        variant="link"
        aria-label="Theme"
        @click="isDark = !isDark"
      />
    </div>
  </header>

  <slot/>

  <footer class="bg-neutral-900 flex flex-col p-2">
    <div
      class="flex justify-between items-center text-white text-2xl px-4 py-2"
    >
      <div class="flex gap-4 items-center justify-center">
        <NuxtImg fit="cover" src="logo-unidade.png" width="80"/>       
      </div>

    </div>
    
  </footer>
</template>

<style scoped></style>
