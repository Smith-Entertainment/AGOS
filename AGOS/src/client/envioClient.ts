import axios, {AxiosInstance} from "axios";

import { envioModel } from "@/model/envioModel";


export class envioClient {

  private axiosClient: AxiosInstance;

  constructor(){
      this.axiosClient = axios.create({
        baseURL: "localhost:8080/api/envio",
        headers:{"Content-Type": "application/json"},
      });
  }

public async findAllEnvios():Promise<envioModel[]>{

  try{
    const response = await this.axiosClient.get<envioModel[]>(`/lista`);
    const data = response.data;
    return data;
  }
  catch(error:any){
    return Promise.reject(error.response);
    
  }


  public async  cadastrarEnvio(envio:envioModel): Promise<void> {
    
    try{
      return (await this.axiosClient.post(`/`,envioModel)).data;
    }

    catch(error:any){
      return Promise.reject(error);
    }

  }


  public async editarEnvio(id:number, envio:envioModel): Promise<void>{
    try{
      return (await this.axiosClient.put(`/${id}`,envioModel)).data
    }

    catch(error:any){

      return Promise.reject(error.response)
    }
  }


  public async excluirEnvio(id:number):Promise<void>{

    try{
      return (await this.axiosClient.delete(`/${id}`) ).data
    }

    catch(error:any){
      return Promise.reject(error.response)
    }
  }

}


export default new envioClient();


