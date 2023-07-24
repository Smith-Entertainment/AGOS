import { Obra } from "@/model/obraModel"
import {Meses } from "@/model/mesesModal"

export class Periodo{
    id!: number;
    ano!: number;
    obra!: Obra;
    mes!: Meses;
}