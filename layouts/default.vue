<script setup lang="ts"></script>
<template>
  <div class="bg-teal-800">
    <div class="flex flex-row space-x-1 space-y-2 m-auto p-1">
      <UAvatar
        class="mt-5"
        size="lg"
        src="https://raw.githubusercontent.com/devjanrs/form-uj/main/public/logo%20uj.png"
        alt="Avatar"
      />
      <UAlert
        color=""
        title="Unidade Jovem"
        description="Encontro de Jovens - Data: 12, 13, 14 de Julho de 2024"
      />
    </div>
    <div class="w-full flex gap-4 mx-4 text-white ">
      <NuxtLink class="hover:bg-primary-600" to="/"> Cadastros </NuxtLink>
      <NuxtLink class="hover:bg-primary-600" to="/encontristas"> Encontristas </NuxtLink>
    </div>
  </div>
  <slot />
</template>

<style scoped></style>
