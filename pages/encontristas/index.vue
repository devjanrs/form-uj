<script setup lang="ts">
const { encontristas, getEncontristas } = useEncontrista();

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
    <UTable :columns="columns" :rows="encontristas" />

</template>

<style scoped></style>
