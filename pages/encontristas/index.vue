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
    {key: 'contato',
        label: 'Contato'
    },
    {key: 'religiao',
        label: 'Religiao'
    },
]

await getEncontristas();
</script>
<template>
    <UTable :loading="loading" :columns="columns" :rows="encontristas" />

</template>

<style scoped></style>
