import axios, { AxiosInstance } from "axios";
import { ArquivoModel } from "@/model/arquivoModel";

export class ArquivoClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<ArquivoClient> {
        try {
            return (await this.axiosClient.get<ArquivoClient>(`/obra/arquivo?id=${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findAll() : Promise<ArquivoClient[]>{
        try {
            return (await this.axiosClient.get<ArquivoClient[]>(`/obra/arquivo/lista`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async create(arquivoClient: ArquivoClient): Promise<string> {
		try {
            return (await this.axiosClient.post<string>(`/obra/arquivo`, arquivoClient)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async update(id: number, arquivoClient: ArquivoClient): Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/obra/arquivo?id=${id}`, arquivoClient)).data
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
