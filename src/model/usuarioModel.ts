import { Obra } from "@/model/obraModel.ts"

export class Usuario{
    id !: number;

    nome !: string;

    usuario !: string;

    email !: string;

    cpf !: string;

    celular !: string;

    tituloEleitor !: string;

    senha !: string;

    nomePai : string;

    nomeMae !: string;

    dataNascimento !: Date;

    obras : Array<Obra>

    constructor(){
        this.nomePai = "";
        this.obras = new Array<Obra>();
    }
}