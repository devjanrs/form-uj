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
</script>

<template >
  <UCard>
      <template #header>
        <UAlert  
        description="ENCONTRO DE JOVENS - DATA: 12,13,14 de Julho de 2024"
        :avatar="{ src: 'https://www.flickr.com/photos/200712145@N07/53738012510/in/dateposted-public/' }"
        title="UNIDADE JOVEM"
        />
        <Placeholder class="h-8" />
      </template>

        <UDivider label="PREENCHA O FORMULÁRIO COM SEUS DADOS PESSOAIS" />
      
        <UFormGroup v-slot="{ error }" label="Nome completo">
          <UInput/>
        </UFormGroup>
      
        <UFormGroup  label="RG" required>
          <UInput  placeholder="00.000.000-0" />
        </UFormGroup>
      
        <UFormGroup label="CPF" required>
          <UInput placeholder="000.000.000-00"/>
        </UFormGroup>
      
        <UFormGroup label="Tel. Residencial">
          <UInput placeholder="00000000" icon="i-heroicons-phone-solid"/>
        </UFormGroup>
      
        <UFormGroup label="Tel. Celular" required>
          <UInput placeholder="00000000" icon="i-heroicons-device-tablet-16-solid"/>
        </UFormGroup>

        
      
        <UDivider label="FORMA DE PAGAMENTO (NÃO ACEITAMOS CHEQUE)" />
      
        
      
        <UDivider label="DADOS MÉDICOS" />
        <URadioGroup v-model="selected" legend="Necessita de cuidados médicos?" :options="options" />
        <URadioGroup v-model="selected2" legend="Necessita de medicamentos?" :options="options2" />
        <URadioGroup v-model="selected3" legend="É alérgico?" :options="options3" />
        

        <UDivider label="NÃO NOS RESPONSABILIZAMOS PELA PERDA OU EXTRAVIO DE OBJETOS PESSOAIS.
        A GUARDA E RESPONSABILIDADE DOS MESMOS É EXCLUSIVAMENTE DO ENCONTRISTA." />

        <UButton
        icon="i-heroicons-arrow-right-start-on-rectangle-20-solid"
        size="sm"
        color="sky"
        variant="soft"
        label="Enviar meus dados"
        trailing
        />

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
  