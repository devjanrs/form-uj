<script setup lang="ts">
import { UiSideMenu } from "#components";

const slideover = useSlideover();

const openSideMenu = () => {
  slideover.open(UiSideMenu, {
    onClose: slideover.close,
  });
};
</script>
<template>
  <div class="bg-teal-800">
    <div
      class="flex justify-between items-center text-white text-2xl px-4 py-2"
    >
      <div class="flex gap-4 items-center">
        <UIcon name="i-material-symbols-menu" @click="openSideMenu" />
        <NuxtImg class="size-10" src="logo-uj.png" />
      </div>
    </div>
  </div>
  <slot />
</template>

<style scoped></style>
