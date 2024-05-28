<script setup lang="ts">
import { number, object, string, type InferType } from 'yup';
import type { FormSubmitEvent } from '#ui/types';
import { ReligiaoEnum, type Encontrista } from '~/helper/types';
import { min } from 'date-fns';
import { vMaska } from 'maska';

const method = ['Pix', 'Dinheiro', 'Débito', 'Crédito'];

const selected = ref(method[4]);

const religion = ['Evangélico', 'Católico', 'Espírita', 'Outros', 'Não possuo'];

const selected_religion = ref(religion[5]);

const options1 = [
  {
    value: 'Sim',
    label: 'Sim',
  },
  {
    value: 'Não',
    label: 'Não',
  },
];

const selected1 = ref('');

const options2 = [
  {
    value: 'Sim',
    label: 'Sim',
  },
  {
    value: 'Não',
    label: 'Não',
  },
];

const selected2 = ref('');

const options3 = [
  {
    value: 'Sim',
    label: 'Sim',
  },
  {
    value: 'Não',
    label: 'Não',
  },
];

const selected3 = ref('');

const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});

const { addEncontrista, loading } = useEncontrista();

const schema = object({

});

type Schema = InferType<typeof schema>;

const state = reactive({
  name: undefined,
  rg: undefined,
  cpf: undefined,
  birth: undefined,
  tel1: undefined,
  tel2: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const encontrista: Encontrista = {
    nome: state.name,
    identidade: state.rg,
    cpf: state.cpf,
    dt_nascimento: state.birth,
    contato: state.tel1,
    alergico: false,
    cuidados_medicos: false,
    medicamento: false
  };

  await addEncontrista(encontrista);
}
</script>

<template>
  <header class="bg-teal-800">
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
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>

  <UForm
    :schema="schema"
    :state="state"
    class="border-neutral-200 md:border flex flex-col gap-4 md:p-6 rounded"
    @submit="onSubmit"
  >
    <div class="flex flex-col gap-2 p-2 w-1/2 mx-auto mt-1">
      <h1 class="bg-teal-800 text-white p-2 rounded font-medium">
        Informações Pessoais
      </h1>
      <div class="rounded">
        <UFormGroup size="xl" label="Nome completo" name="name" required>
          <UInput v-model="state.name" />
        </UFormGroup>

        <UFormGroup
          size="xl"
          label="RG"
          name="rg"
          required
          :ui="{ wrapper: 'mt-4' }"
        >
          <UInput
            v-model="state.rg"
            placeholder="xx.xxx.xxx-x"
            v-maska
            data-maska="##.###.###-#"
          />
        </UFormGroup>

        <UFormGroup
          size="xl"
          label="CPF"
          name="cpf"
          required
          :ui="{ wrapper: 'mt-4' }"
        >
          <UInput
            v-model="state.cpf"
            placeholder="xxx.xxx.xxx-xx"
            v-maska
            data-maska="###.###.###-##"
          />
        </UFormGroup>

        <UFormGroup
          size="xl"
          label="Data de Nascimento"
          name="birth"
          required
          :ui="{ wrapper: 'mt-4' }"
        >
          <UInput type="date" v-model="state.birth" />
        </UFormGroup>

        <UFormGroup
          size="xl"
          label="Tel. Residencial"
          required
          name="tel1"
          :ui="{ wrapper: 'mt-4' }"
        >
          <UInput
            v-model="state.tel1"
            v-maska
            data-maska="+55 (##) ####-####"
          />
        </UFormGroup>

        <UFormGroup
          size="xl"
          label="Tel. Celular"
          required
          name="tel2"
          :ui="{ wrapper: 'mt-4' }"
        >
          <UInput
            v-model="state.tel2"
            v-maska
            data-maska="+55 (##) 9 ####-####"
          />
        </UFormGroup>
      </div>
    </div>

    <div class="flex flex-col gap-2 p-2 w-1/2 mx-auto mt-1">
      <h1 class="bg-teal-800 text-white p-2 rounded font-medium">
        Forma de pagamento (Não aceitamos cheque)
      </h1>
      <p class="text-sm font-medium">Valor R$430,00</p>
      <div class="rounded">
        <USelectMenu
          v-model="selected"
          :options="method"
          placeholder="Selecione o método de pagamento desejado"
          name="pay"
          required
        />
      </div>
    </div>

    <div class="flex flex-col gap-2 p-2 w-1/2 mx-auto mt-1">
      <h1 class="bg-teal-800 text-white p-2 rounded font-medium">
        Dados Médicos
      </h1>
      <div class="rounded">
        <URadioGroup
          :ui="{ wrapper: 'mt-1' }"
          v-model="selected1"
          legend="Necessita de cuidados médicos?"
          :options="options1"
          name="data1"
          required
        />
        <URadioGroup
          :ui="{ wrapper: 'mt-4' }"
          v-model="selected2"
          legend="Necessita de medicamentos?"
          :options="options2"
          name="data2"
          required
        />
        <URadioGroup
          :ui="{ wrapper: 'mt-4' }"
          v-model="selected3"
          legend="É alergico?"
          :options="options3"
          name="data3"
          required
        />
      </div>
    </div>

    <div class="flex flex-col gap-2 p-2 w-1/2 mx-auto mt-1">
      <h1 class="bg-teal-800 text-white p-2 rounded font-medium">Religião</h1>
      <div class="rounded">
        <USelectMenu
          v-model="selected_religion"
          :options="religion"
          placeholder="Selecione sua religião"
          name="religionchoice"
          required
        />
      </div>
    </div>

    <div class="flex flex-col gap-2 p-2 w-1/2 mx-auto mt-1 rounded">
      <h1 class="text-red-700 font-semibold p-1 rounded mb-1 text-base">
        NÃO NOS RESPONSABILIZAMOS PELA PERDA OU EXTRAVIO DE OBJETOS PESSOAIS. A
        GUARDA E RESPONSABILIDADE DOS MESMOS É EXCLUSIVAMENTE DO ENCONTRISTA.
      </h1>
    </div>

    <UButton
      type="submit"
      class="mx-auto flex mt-4 mb-5 bg-teal-800"
      icon="i-heroicons-pencil-square"
      size="sm"
      color="primary"
      variant="solid"
      label="Realizar inscrição"
      trailing
    />
  </UForm>

  <footer class="bg-teal-800 flex flex-col p-2">
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
