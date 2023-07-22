import { TipoObra } from "@/model/tipoobraModel"
import { Usuario } from "@/model/usuarioModel"
export class Obra {
    id!: number;
    titulo!: string;
    imagem?: string;
    objetivo?: string;
    licitacao?: string;
    dataCertame?: Date;
    valorEdital!: number;
    bairro!: string;
    rua!: string;
    numero!: number;
    voluntarios?: Array<Usuario>;
    valorContratado?: number;
    dataInicio?: Date;
    dataTermino?: Date;
    numeroContrato?: number;
    empresaContratada?: string;
    finalizado?: boolean;
    tipoObra?: TipoObra; 
    
    constructor(){
      this.voluntarios = new Array<Usuario>()
  }
  }