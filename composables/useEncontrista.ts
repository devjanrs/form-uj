import { createClient } from '@supabase/supabase-js';
import type { Encontrista } from '~/helper/types';

export const useEncontrista = () => {
  const client = createClient(
    'https://lwfqzybxfxmwnmrrgqik.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3ZnF6eWJ4Znhtd25tcnJncWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyNjkyMzIsImV4cCI6MjAzMTg0NTIzMn0.iPFPkibyrd2olrpM4q8-Cwy2X7t7YI5OUJsxI5GJyUE'
  );
  const loading = ref(false);
  const encontristas = useState<Encontrista[]>(
    "encontristas",
    () => ({} as Encontrista[])
  );

  const addEncontrista = async (encontrista: Encontrista) => {
    loading.value = true;

    const { error } = await client.from('encontrista').upsert(encontrista, {
      returning: 'minimal', // Don't return the value after inserting
    });

    if (error) {
      throw createError({
        statusCode: 400,
        message: error.message,
      });
    }

    alert('Encontrista cadastrado com sucesso!');
    loading.value = false;
  };

  const getEncontristas = async () => {
    loading.value = true;

    const { data, error } = await client.from('encontrista').select();

    if (error) {
      throw createError({
        statusCode: 400,
        message: error.message,
      });
    }

    encontristas.value = data as Encontrista[];
    loading.value = false;
  };

  return {
    loading,
    addEncontrista,
    getEncontristas,
    encontristas
  };
};
