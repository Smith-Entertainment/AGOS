import { Cronograma } from "@/model/cronogramaModel";
import type {AxiosInstance } from "axios";
import axios from "axios";

export class CronogramaClient{
    private axiosClient: AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: "http://localhost:8080/api",
            headers:{ "Content-Type": "application/json"}
        }); 
    }
    
    public async findById(id: number) : Promise<Cronograma> {
        try {
            return (await this.axiosClient.get<Cronograma>(`/cronograma?id=${id}`)).data;
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findAll() : Promise<Cronograma[]>{
        try{
            return (await this.axiosClient.get<Cronograma[]>(`/cronograma/list`)).data;
        } catch (error:any){
            return Promise.reject(error.response);
        }
    }

    public async create(cronograma: Cronograma) : Promise<string>{
        try{
            return (await this.axiosClient.post<string>(`/cronograma`, cronograma)).data;
        } catch (error:any){
            return Promise.reject(error.response);
        }
    }
    
    public async update(id: number ,cronograma: Cronograma) : Promise<string>{
        try{
            return (await this.axiosClient.put<string>(`/cronograma?id=${id}`, cronograma)).data;
        } catch (error:any){
            return Promise.reject(error.response);
        }
    }
}