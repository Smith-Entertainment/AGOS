import {Periodo} from "@/model/periodoModel";
import {Item} from "@/model/itemModel";

export class Cronograma{

    id!: number;
    item!: Item
    periodo!: Periodo;
    previstoFinanceiro!:number;
    previstoFisico!:number;
    realizadoFinanceiro!:number;
    realizadoFisico!:number;
    valorContrato!:number;
}




