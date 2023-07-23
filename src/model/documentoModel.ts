import { GrupoProjeto } from "@/model/grupoProjetoModel"
import { Arquivo } from "@/model/arquivoModel"
import { Obra } from "@/model/obraModel"

export class Documento{

    id! : number
    grupoProjeto! : Array<GrupoProjeto>
    arquivos! : Array<Arquivo>
    obra! : Array<Obra>

    constructor() {
        this.id = 0;
        this.grupoProjeto = new Array;
        this.arquivos = new Array;
        this.obra = new Array;
    }

}