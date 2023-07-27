import {Periodo} from "@/model/periodoModel";
import {Item} from "@/model/itemModel";

export class Cronograma{

    id!: number;
    item!: Array<Item>
    periodo!: Array<Periodo>;
    previstoFinanceiro!:number;
    previstoFisico!:number;
    realizadoFinanceiro!:number;
    realizadoFisico!:number;
    valorContrato!:number;

    constructor(){
        this.periodo = new Array<Periodo>();
        this.item = new Array<Item>();
    }
}




