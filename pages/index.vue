<script setup lang="ts">
  const options = [{
  value: 'Sim',
  label: 'Sim'
}, {
  value: 'Não',
  label: 'Não'
}];

const selected = ref('')

const options2 = [{
  value: 'Sim',
  label: 'Sim'
}, {
  value: 'Não',
  label: 'Não'
}];

const selected2 = ref('')

const options3 = [{
  value: 'Sim',
  label: 'Sim'
}, {
  value: 'Não',
  label: 'Não'
}];

const selected3 = ref('')

const options4 = [{
  value: 'Evangélico',
  label: 'Evangélico'
}, {
  value: 'Católico',
  label: 'Católico'
}, {
  value: 'Espírita',
  label: 'Espírita'
}, {
  value: 'Outros',
  label: 'Outros'
}];

const selected4 = ref('')

const method = ['Pix', 'Dinheiro', 'Débito', 'Crédito']

const selected5 = ref(method[0])

</script>

<template>
  <UCard class="w-1/2 mx-auto bg-red-900">
      <template #header>
        <UAlert  
        title = "UNIDADE JOVEM"
        description = "ENCONTRO DE JOVENS - DATA: 12,13,14 de Julho de 2024"
        :avatar = "{ src: 'https://raw.githubusercontent.com/devjanrs/form-uj/main/public/logo%20uj.png' }"
        />
        <Placeholder class="h-8" />
      </template>

      
        <div class="flex flex-col gap-4">
          <UDivider label="PREENCHA O FORMULÁRIO COM SEUS DADOS PESSOAIS" />
          
          <UFormGroup size="xl" label="Nome completo" required>
            <UInput/>
          </UFormGroup>
        
          <UFormGroup size="xl" label="RG" required>
            <UInput  placeholder="00.000.000-0" />
          </UFormGroup>
        
          <UFormGroup size="xl" label="CPF" required>
            <UInput placeholder="000.000.000-00"/>
          </UFormGroup>

          <UFormGroup size="xl" label="Data de Nascimento" required>
            <UInput type="date" placeholder="00/00/000"/>
          </UFormGroup>
        
          <UFormGroup size="xl" label="Tel. Residencial">
            <UInput placeholder="00000000" icon="i-heroicons-phone-solid"/>
          </UFormGroup>
        
          <UFormGroup size="xl" label="Tel. Celular" required>
            <UInput placeholder="00000000" icon="i-heroicons-device-tablet-16-solid"/>
          </UFormGroup>

          
        
          <UDivider label="FORMA DE PAGAMENTO (NÃO ACEITAMOS CHEQUE)" />
          <UAlert title="Valor R$430,00"/>
          <UInputMenu size="xl" v-model="selected5" :options="method"/>
          
        
          <UDivider label="DADOS MÉDICOS" />
          <URadioGroup v-model="selected" legend="Necessita de cuidados médicos?" :options="options" />
          <URadioGroup v-model="selected2" legend="Necessita de medicamentos?" :options="options2" />
          <URadioGroup v-model="selected3" legend="É alérgico?" :options="options3" />
          <URadioGroup v-model="selected4" legend="Você é:" :options="options4" />
          

          <UAlert title="NÃO NOS RESPONSABILIZAMOS PELA PERDA OU EXTRAVIO DE OBJETOS PESSOAIS.
          A GUARDA E RESPONSABILIDADE DOS MESMOS É EXCLUSIVAMENTE DO ENCONTRISTA." />

          <UButton class= "mx-auto"
          icon="i-heroicons-arrow-right-start-on-rectangle-20-solid"
          size="sm"
          color="sky"
          variant="soft"
          label="Finalizar inscrição"
          trailing
          />
      </div>

    <template #footer>
      <UDivider label="LEVAR PARA O ENCONTRO" />
      <UAlert title="DOCUMENTO DE IDENTIDADE, BÍBLIA, REPELENTE, ROUPAS LEVES, CONFORTÁVEIS E DECENTES. CASACO, ROUPA DE CAMA,
      TRAVESSEIRO, FRONHA, TOALHA DE BANHO, OBJETOS DE HIGIENE PESSOAL (SHAMPOO, SABONETE, PASTA DE DENTES,
      ESCOVA DE DENTES, ETC). DINHEIRO PARA ADQUIRIR NA CANTINA: REFRIGERANTES, SUCOS, BALAS, DOCES. ETC..." />
        
      <UAlert title="NO DIA 12/07/24 (6ª FEIRA) - CHEGAR NA IGREJA ÀS 19:00 HORAS
      PARA FAZER O CHECK-IN " />

      

      <Placeholder class="h-8" />
    </template>
  </UCard>
 </template>

