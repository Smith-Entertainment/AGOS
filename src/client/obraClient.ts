import axios from "axios";
import type { AxiosInstance } from "axios";
import { Obra } from "@/model/obraModel";

export class ObraClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api",
      headers: { "Content-type": "application/json" },
    });
  }

  public async findById(id: number): Promise<Obra> {
    try {
      return (await this.axiosClient.get<Obra>(`/obra/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findAll(): Promise<Obra[]> {
    try {
      return (await this.axiosClient.get<Obra[]>(`/obra/lista`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async create(obra: Obra): Promise<string> {
    try {
      return (await this.axiosClient.post<string>("/obra", obra)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async update(id: number, obra: Obra): Promise<string> {
    try {
      return (await this.axiosClient.put<string>(`/obra/${id}`, obra)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async delete(id: number): Promise<string> {
    try {
      return (await this.axiosClient.delete<string>(`/obra/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}

export default new ObraClient();
