export interface Encontrista {
  nome: string;
  identidade: string;
  cpf: string;
  dt_nascimento: Date;
  contato: string;
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
