<script setup lang="ts">
const { isOpen } = useSlideover();

const menuItems = [
  { to: "/encontristas", label: "Inscritos" },
  { to: "/form", label: "Inscreva-se" },
];
</script>
<template>
  <USlideover v-model="isOpen" side="left">
    <div class="flex flex-col p-4 text-teal-800 text-xl">
      <div class="flex items-center justify-between p-4">
        <h3>Unidade Jovem</h3>
        <UButton
          color="gray"
          variant="ghost"
          icon="i-material-symbols-close"
          class="-my-1"
          @click="isOpen = false"
        />
      </div>
      <UDivider/>
      <div
        class="hover:bg-teal-800 hover:bg-opacity-10"
        v-for="(item, n) in menuItems"
        :key="n"
      >
        <NuxtLink :to="item.to">
          <div class="flex justify-between p-4">
            <div>{{ item.label }}</div>
            <div><UIcon name="i-material-symbols-chevron-right" /></div>
          </div>
        </NuxtLink>
        <UDivider />
      </div>
    </div>
  </USlideover>
</template>



<style scoped>
</style>