import { GrupoProjeto } from "@/model/grupoProjetoModel"
import { ArquivoModel } from "@/model/arquivoModel"
 import { Obra } from "@/model/obraModel"
export class Documento{

    id! : number
    grupoProjeto! : GrupoProjetoModel[]
    arquivos! : ArquivoModelo[]
    obra! : Obra

}