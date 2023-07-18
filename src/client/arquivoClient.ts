import axios, { AxiosInstance } from "axios";
import { Arquivo } from "@/model/arquivoModel";

export class ArquivoClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Arquivo> {
        try {
            return (await this.axiosClient.get<Arquivo>(`/obra/arquivo?id=${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findAll() : Promise<Arquivo[]>{
        try {
            return (await this.axiosClient.get<Arquivo[]>(`/obra/arquivo/lista`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async create(arquivo: Arquivo): Promise<string> {
		try {
            return (await this.axiosClient.post<string>(`/obra/arquivo`, arquivo)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async update(id: number, arquivo: Arquivo): Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/obra/arquivo?id=${id}`, arquivo)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async delete(id: number) : Promise<string> {

        try {
            return (await this.axiosClient.delete<string>(`/obra/arquivo?id=${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
}
export default new ArquivoClient();
