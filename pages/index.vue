<script setup lang="ts">
    const method = ['Pix', 'Dinheiro', 'Débito', 'Crédito']

    const selected = ref(method[0])

    const religion = ['Evangélico', 'Católico', 'Espírita', 'Outros']

    const selected_religion = ref(religion[0])

    const options1 = [{
    value: 'Sim',
    label: 'Sim'
    }, {
      value: 'Não',
      label: 'Não'
    }]

    const selected1 = ref('')

    const options2 = [{
      value: 'Sim',
      label: 'Sim'
    }, {
      value: 'Não',
      label: 'Não'
    }]

    const selected2 = ref('')

    const options3 = [{
      value: 'Sim',
      label: 'Sim'
    }, {
      value: 'Não',
      label: 'Não'
    }]

    const selected3 = ref('')

    const colorMode = useColorMode()
    const isDark = computed({
      get () {
        return colorMode.value === 'dark'
      },
      set () {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
      }
    })

</script>

<template>
  <header class="bg-teal-800">

    <div class= "flex flex-row space-x-1 space-y-2 m-auto p-1">
      <UAvatar class="mt-5"
      size="lg"
      src="https://raw.githubusercontent.com/devjanrs/form-uj/main/public/logo%20uj.png"
      alt="Avatar"
      />
      <UAlert color=""
      title="Unidade Jovem"
      description="Encontro de Jovens - Data: 12, 13, 14 de Julho de 2024"
      />
    </div>
  </header>

  <ClientOnly>
    <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
    />
    <template #fallback>
      <div class="w-8 h-8"/>
    </template>
  </ClientOnly>

  <div class="flex flex-col gap-2 p-2 w-1/2 mx-auto mt-1">
    <h1 class="bg-teal-800 text-white p-2 rounded font-medium">Informações Pessoais</h1>
    <div class="rounded">
      <UFormGroup size="xl" label="Nome completo" required>
        <UInput/>
      </UFormGroup>
  
      <UFormGroup size="xl" label="RG" required :ui="{wrapper: 'mt-4'}">
        <UInput/>
      </UFormGroup>
  
      <UFormGroup size="xl" label="CPF" required :ui="{wrapper: 'mt-4'}">
        <UInput/>
      </UFormGroup>
  
      <UFormGroup size="xl" label="Data de Nascimento" required :ui="{wrapper: 'mt-4'}">
        <UInput type="date"/>
      </UFormGroup>
  
      <UFormGroup size="xl" label="Tel. Residencial" required :ui="{wrapper: 'mt-4'}">
        <UInput/>
      </UFormGroup>
  
      <UFormGroup size="xl" label="Tel. Celular" required :ui="{wrapper: 'mt-4'}">
        <UInput/>
      </UFormGroup>
    </div>
  </div>

  <div class="flex flex-col gap-2 p-2 w-1/2 mx-auto mt-1">
    <h1 class="bg-teal-800 text-white p-2 rounded font-medium">Forma de pagamento (Não aceitamos cheque)</h1>
    <p class="text-sm font-medium">Valor R$430,00</p>
    <div class="rounded">
      <USelectMenu v-model="selected" :options="method" placeholder="Selecione o método"/>
    </div>
  </div>

  <div class="flex flex-col gap-2 p-2 w-1/2 mx-auto mt-1">
    <h1 class="bg-teal-800 text-white p-2 rounded font-medium">Dados Médicos</h1>
    <div class="rounded">
      <URadioGroup :ui="{wrapper: 'mt-1'}" v-model="selected1" legend="Necessita de cuidados médicos?" :options="options1" />
      <URadioGroup :ui="{wrapper: 'mt-4'}" v-model="selected2" legend="Necessita de medicamentos?" :options="options2" />
      <URadioGroup :ui="{wrapper: 'mt-4'}" v-model="selected3" legend="É alergico?" :options="options3" />
    </div>
  </div>

  <div class="flex flex-col gap-2 p-2 w-1/2 mx-auto mt-1">
    <h1 class="bg-teal-800 text-white p-2 rounded font-medium">Religião</h1>
    <div class="rounded">
      <USelectMenu v-model="selected_religion" :options="religion"/>
    </div>
  </div>

  <div class="flex flex-col gap-2 p-2 w-1/2 mx-auto mt-1 rounded">
    <h1 class="text-red-700 font-semibold p-1 rounded mb-1 text-base">
      NÃO NOS RESPONSABILIZAMOS PELA PERDA OU EXTRAVIO DE OBJETOS PESSOAIS.
      A GUARDA E RESPONSABILIDADE DOS MESMOS É EXCLUSIVAMENTE DO ENCONTRISTA.</h1>
  </div>

  <UButton class="mx-auto flex mt-4 mb-5 bg-teal-800"
    icon="i-heroicons-pencil-square"
    size="sm"
    color="primary"
    variant="solid"
    label="Realizar inscrição"
    trailing
  />

  <footer class="bg-teal-800 flex flex-col p-2">
    <h1 class="mx-auto flex mt-2 text-sm font-medium text-white"
      >Fique por dentro de todas as novidades seguindo o nosso instagram</h1>

    <a 
      class="mx-auto flex mt-1 text-sm font-medium text-white" 
      href="https://www.instagram.com/unidadejovem/" 
      target="_blank"
      >@unidadejovem</a>
   
  </footer>
</template>

