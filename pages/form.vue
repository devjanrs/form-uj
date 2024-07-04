<script setup lang="ts">
import { number, object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import { ReligiaoEnum, type Encontrista } from "~/helper/types";
import { min } from "date-fns";
import { vMaska } from "maska";

const method = ["Pix", "Dinheiro", "Débito", "Crédito"];

const selected = ref(method[4]);

const religion = ["Evangélico", "Católico", "Espírita", "Outros", "Não possuo"];

const selected_religion = ref(religion[5]);

const options1 = [
  {
    value: 'Sim',
    label: "Sim",
  },
  {
    value: "Não",
    label: "Não",
  },
];

const selected1 = ref("");

const options2 = [
  {
    value: "Sim",
    label: "Sim",
  },
  {
    value: "Não",
    label: "Não",
  },
];

const selected2 = ref("");

const options3 = [
  {
    value: "Sim",
    label: "Sim",
  },
  {
    value: "Não",
    label: "Não",
  },
];

const selected3 = ref("");

const { addEncontrista, loading } = useEncontrista();

const schema = object({});

const checkTerm = ref(true)

type Schema = InferType<typeof schema>;

const state = reactive({
  name: undefined,
  rg: undefined,
  cpf: undefined,
  birth: undefined,
  tel1: undefined,
  tel2: undefined,
  pay: undefined,
  data1: undefined,
  data2: undefined,
  data3: undefined,
  religionchoice: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const encontrista: Encontrista = {
    nome: state.name,
    identidade: state.rg,
    cpf: state.cpf,
    dt_nascimento: state.birth,
    contato: state.tel1,
    contato2: state.tel2,
    mt_pagamento: state.pay,
    cuidados_medicos: state.data1,
    medicamento: state.data2,
    alergico: state.data3,
    religiao: state.religionchoice,
  };

  await addEncontrista(encontrista);
  navigateTo("/encontristas");
}
</script>

<template>
  <div class="w-full md:w-[50%] mx-auto my-10">
    <UForm :schema="schema" :state="state" @submit="onSubmit">
      <div class="flex flex-col gap-4">
        <UCard
          :ui="{
            header: {
              base: ' text-white text-2xl rounded-t-md',
              background: 'bg-neutral-900',
            },
          }"
        >
          <template #header>
            <div>Informações Pessoais</div>
          </template>
          <div class="flex flex-col gap-2">
            <UFormGroup size="xl" label="Nome completo" name="name" required>
              <UInput v-model="state.name" />
            </UFormGroup>

            <UFormGroup size="xl" label="RG" name="rg" required>
              <UInput
                v-model="state.rg"
                placeholder="xx.xxx.xxx-x"
                v-maska
                data-maska="##.###.###-#"
              />
            </UFormGroup>

            <UFormGroup size="xl" label="CPF" name="cpf" required>
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
            >
              <UInput type="date" v-model="state.birth" />
            </UFormGroup>

            <UFormGroup size="xl" label="Tel. Residencial" required name="tel1">
              <UInput
                v-model="state.tel1"
                v-maska
                data-maska="+55 (##) ####-####"
              />
            </UFormGroup>

            <UFormGroup size="xl" label="Tel. Celular" required name="tel2">
              <UInput
                v-model="state.tel2"
                v-maska
                data-maska="+55 (##) 9 ####-####"
              />
            </UFormGroup>
          </div>
        </UCard>
        <UCard
          :ui="{
            header: {
              base: ' text-white text-2xl rounded-t-md',
              background: 'bg-neutral-900',
            },
          }"
        >
          <template #header>
            <div>Dados médicos</div>
          </template>
          <div class="flex flex-col gap-2">
          <UFormGroup
            size="xl"
            label="Necessita de cuidados médicos?"
            required
            name="data1"
          >
            <URadioGroup
              v-model="selected1"
              :options="options1"
              name="data1"
              required
            />

            <UTextarea
            class="mt-4"
            v-if="selected1.valueOf() === 'Sim'"
            color="bg-teal-800" 
            variant="outline" 
            placeholder="Descreva os cuidados médicos que você precisa" 
            />

          </UFormGroup>
          <UFormGroup
            size="xl"
            label="Necessita de medicamentos?"
            required
            name="data2"
          >
            <URadioGroup
              v-model="selected2"
              :options="options2"
              name="data2"
              required
            />

            <UTextarea 
            class="mt-4"
            v-if="selected2.valueOf() === 'Sim'"
            color="bg-teal-800" 
            variant="outline" 
            placeholder="Descreva os medicamentos" 
            />

          </UFormGroup>
          <UFormGroup size="xl" label="É alergico?" required name="data3">
            <URadioGroup
              v-model="selected3"
              :options="options3"
              name="data3"
              required
            />
            <UTextarea 
            class="mt-4"
            v-if="selected3.valueOf() === 'Sim'"
            color="bg-teal-800" 
            variant="outline" 
            placeholder="Descreva..." 
            />
          </UFormGroup>
          </div>
        </UCard>

        <div class="flex flex-col gap-2 p-2 mt-1">
          <h1 class="bg-neutral-900 text-white p-2 rounded font-medium">
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

        <div class="flex flex-col gap-2 p-2 mt-1">
          <h1 class="bg-neutral-900 text-white p-2 rounded font-medium">
            Religião
          </h1>
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
          <UCheckbox 
            v-model="checkTerm" 
            name="Termo"
            required 
            label="Estou ciente de que sou exclusivamente responsável pela guarda de meus objetos pessoais 
            e que a direção da IAUC não se responsabiliza por perdas ou extravios." 
            :ui =" {
              label: 'text-red-700 dark:text-red-700'
            }"
          />
        </div>

        <UButton
          v-if="checkTerm.valueOf() == true"
          type="submit"
          class="mx-auto flex mt-4 mb-5 bg-neutral-900"
          icon="i-heroicons-pencil-square"
          size="sm"
          color="primary"
          variant="solid"
          label="Finalizar inscrição"
          :loading="loading"
          trailing
        />
      </div>
    </UForm>
  </div>
</template>
