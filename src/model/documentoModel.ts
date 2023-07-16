import { GrupoProjeto } from "@/model/grupoProjetoModel"
import { Arquivo } from "@/model/arquivoModel"
 import { Obra } from "@/model/obraModel"
export class Documento{

    id! : number
    grupoProjeto! : GrupoProjeto[]
    arquivos! : Arquivo[]
    obra! : Obra

}