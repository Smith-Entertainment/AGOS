import type { Periodo } from "@/model/periodoModel";
import type { AxiosInstance } from "axios";
import axios from "axios";

export class ItemClient{

    private axiosClient: AxiosInstance;
    
    constructor(){
        this.axiosClient = axios.create({
            baseURL: "http://localhost:8080/api",
            headers:{ "Content-Type": "application/json"}
        })
    }

    public async findById(id: number) : Promise<Periodo>{
        try{
            return (await this.axiosClient.get<Periodo>(`/periodo?id=${id}`)).data;
        } catch (error:any){
            return Promise.reject(error.response);
        }
    }

    public async findAll() : Promise<Periodo[]>{
        try{
            return (await this.axiosClient.get<Periodo[]>(`/periodo/list`)).data;
        } catch (error:any){
            return Promise.reject(error.response);
        }
    }


    public async create (periodo: Periodo) : Promise<string>{
        try{
            return (await this.axiosClient.post<string>(`/periodo`, periodo)).data;
        } catch (error:any){
            return Promise.reject(error.response);
        }
    }

    public async updata(id: number, periodo: Periodo) : Promise<string>{
        try{
            return (await this.axiosClient.put<string>(`/periodo?id=${id}`, periodo)).data;
        } catch (error:any){
            return Promise.reject(error.response);
        }
    }

}