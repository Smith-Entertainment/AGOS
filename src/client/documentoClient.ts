import axios, { AxiosInstance } from "axios";
import { DocumentoModel } from "@/model/documentoModel";

export class DocumentoClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<DocumentoClient> {
        try {
            return (await this.axiosClient.get<DocumentoClient>(`/obra/documento?id=${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findAll() : Promise<DocumentoClient[]>{
        try {
            return (await this.axiosClient.get<DocumentoClient[]>(`/obra/documento/lista`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async create(documentoClient: DocumentoClient): Promise<string> {
		try {
            return (await this.axiosClient.post<string>(`/obra/documento`, documentoClient)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async update(id: number, documentoClient: DocumentoClient): Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/obra/documento?id=${id}`, documentoClient)).data
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
