import { Obra } from "@/model/obraModel"
import {Meses } from "@/model/mesesModal"

export class Periodo{
    id!: number;
    ano!: number;
    obra?: Array<Obra>;
    mes!: Meses;

    constructor(){
        this.obra = new Array<Obra>()
    }
}

