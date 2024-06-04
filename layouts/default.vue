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
  <div class="bg-neutral-900">
    <div
      class="flex justify-between items-center text-white text-2xl px-4 py-2"
    >
      <div class="flex gap-4 items-center">
        <UIcon name="i-material-symbols-menu" @click="openSideMenu" />
        <NuxtImg fit="cover" src="logo-unidade.png" width="110"/>       
      </div>
      <div class="flex justify-between items-end text-lg font-mono px-4 gap-10 ml-auto">
        <NuxtLink 
        to="#" 
        external 
        target="blank">
          <UIcon name="i-heroicons-building-storefront-solid" />
        Unidade Store
        </NuxtLink>

        <NuxtLink 
        to="https://www.instagram.com/unidadejovem/" 
        external 
        target="blank">
          <UIcon name="i-heroicons-share-solid" />
        Mídias
        </NuxtLink>
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
  </div>
  <slot />
  <footer class="bg-neutral-900 flex flex-col p-2">
    <h1 class="mx-auto flex mt-2 text-sm font-medium text-white">
      Fique por dentro de todas as novidades seguindo o nosso instagram
    </h1>

    <a
      class="mx-auto flex mt-1 text-sm font-medium text-white"
      href="https://www.instagram.com/unidadejovem/"
      target="_blank"
      >@unidadejovem</a
    >
  </footer>
</template>

<style scoped></style>
