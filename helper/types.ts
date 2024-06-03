export interface Encontrista {
  nome: string;
  identidade: string;
  cpf: string;
  dt_nascimento: Date;
  contato: string;
  contato2: string;
  mt_pagamento: string;
  cuidados_medicos: boolean;
  medicamento: boolean;
  alergico: boolean;
  religiao: ReligiaoEnum;
}

export enum ReligiaoEnum {
  EVANGELICO = 'Evangelico',
  CATOLICO = 'Católico',
  ESPIRITA = 'Espirita',
  OUTROS = 'Outros',
}
