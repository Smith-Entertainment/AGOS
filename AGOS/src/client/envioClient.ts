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






  

}









}