import axios, { type AxiosInstance } from "axios";
import { Bairro } from "@/model/bairroModel";

export class BairroClient{
  private axiosClient : AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api",
      headers: { "Content-type": "application/json" },
    });
  }

  public async findById(id : number) : Promise<Bairro> {
    try {
      return (await this.axiosClient.get<Bairro>(`/bairro?id=${id}`)).data;
    }
    catch (error : any) {
      return Promise.reject(error.response);
    }
  }

  public async findAll() : Promise<Bairro[]> {
    try {
      return (await this.axiosClient.get<Bairro[]>(`/bairro/lista`)).data;
    }
    catch (error : any) {
      return Promise.reject(error.response);
    }
  }

  public async create(bairro : Bairro) : Promise<string> {
    try {
      return (await this.axiosClient.post<string>(`/bairro`, bairro)).data;
    }
    catch (error : any) {
      return Promise.reject(error.response);
    }
  }

  public async update(id : number, bairro : Bairro) : Promise<string> {
    try {
      return (await this.axiosClient.put<string>(`/bairro?id=${id}`, bairro)).data;
    }
    catch (error : any) {
      return Promise.reject(error.response);
    }
  }

  public async delete(id : number) : Promise<string> {
    try {
      return (await this.axiosClient.delete<string>(`/bairro?id=${id}`)).data;
    }
    catch (error : any) {
      return Promise.reject(error.response);
    }
  }
}
export default new BairroClient();