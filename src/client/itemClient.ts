import { Item } from "@/model/itemModel";
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

    public async findById(id: number) : Promise<Item>{
        try{
            return (await this.axiosClient.get<Item>(`/item?id=${id}`)).data;
        } catch (error:any){
            return Promise.reject(error.response);
        }
    }

    public async findAll() : Promise<Item[]>{
        try{
            return (await this.axiosClient.get<Item[]>(`/item/list`)).data;
        } catch (error:any){
            return Promise.reject(error.response);
        }
    }


    public async create (item: Item) : Promise<string>{
        try{
            return (await this.axiosClient.post<string>(`/item`, item)).data;
        } catch (error:any){
            return Promise.reject(error.response);
        }
    }

    public async updata(id: number, item: Item) : Promise<string>{
        try{
            return (await this.axiosClient.put<string>(`/item?id=${id}`, item)).data;
        } catch (error:any){
            return Promise.reject(error.response);
        }
    }

}