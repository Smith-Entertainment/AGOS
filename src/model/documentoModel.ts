import { GrupoProjeto } from "@/model/grupoProjetoModel"
import { ArquivoModel } from "@/model/arquivoModel"
 import { ObraModel } from "@/model/obraModel"
export class DocumentoModel{

    id! : number
    grupoProjeto! : GrupoProjetoModel[]
    arquivos! : ArquivoModelo[]
    obra! : ObraModel

}