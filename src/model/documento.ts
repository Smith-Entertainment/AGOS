import { GrupoProjeto } from "./GrupoProjeto"
import { Arquivo } from "./arquivo"
// import { Obra } from "./obra"
export class Documento{

    id! : number
    grupoProjeto! : GrupoProjeto[]
    arquivos! : Arquivo[]
    obra! : Obra

}