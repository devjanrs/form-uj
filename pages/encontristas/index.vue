<script setup lang="ts">
const { encontristas, getEncontristas, loading } = useEncontrista();

const columns = [
    {key: 'id',
        label: 'id'
    },
    {key: 'nome',
        label: 'Nome'
    },
    {key: 'identidade',
        label: 'RG'
    },
    {key: 'cpf',
        label: 'CPF'
    },
    {key: 'dt_nascimento',
        label: 'Data de Nascimento'
    },
    {key: 'contato',
        label: 'Telefone'
    },
    {key: 'contato2',
        label: 'Celular'
    },
    {key: 'mt_pagamento',
        label: 'Método de pagamento'
    },
    {key: 'cuidados_medicos',
        label: 'Cuidados médicos'
    },
    {key: 'medicamento',
        label: 'Medicamentos'
    },
    {key: 'alergico',
        label: 'Alérgico'
    },
    {key: 'religiao',
        label: 'Religião'
    },
]

await getEncontristas();
</script>
<template>
    <UTable :loading="loading" :columns="columns" :rows="encontristas" />

</template>

<style scoped></style>
