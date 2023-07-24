import type {AxiosInstance } from "axios";
import { Documento } from "@/model/documentoModel";
import axios from "axios";

export class DocumentoClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Documento> {
        try {
            return (await this.axiosClient.get<Documento>(`/obra/documento?id=${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findAll() : Promise<Documento[]>{
        try {
            return (await this.axiosClient.get<Documento[]>(`/obra/documento/lista`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async create(documento: Documento): Promise<string> {
		try {
            return (await this.axiosClient.post<string>(`/obra/documento`, documento)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async update(id: number, documento: Documento): Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/obra/documento?id=${id}`, documento)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async delete(id: number) : Promise<string> {

        try {
            return (await this.axiosClient.delete<string>(`/obra/documento?id=${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
}
export default new DocumentoClient();
