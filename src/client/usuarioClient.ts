import axios, { type AxiosInstance } from "axios";
import { Usuario } from "@/model/usuarioModel";

export class UsuarioClient{
    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: "http://localhost:8080/api",
            headers: {"Content-type" : "application/json"}
        });
    }

    public async findById(id : number) : Promise<Usuario> {
        try{
            return (await this.axiosClient.get<Usuario>(`/usuario?id=${id}`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async findAll() : Promise<Usuario[]> {
        try{
            return (await this.axiosClient.get<Usuario[]>(`/usuario/lista`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async create(usuario : Usuario) : Promise<string> {
        try{
            return (await this.axiosClient.post<string>(`/usuario`, usuario)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async update(id : number, usuario : Usuario) : Promise<string> {
        try{
            return (await this.axiosClient.put<string>(`/usuario?id=${id}`, usuario)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async delete(id : number) : Promise<string> {
        try{
            return (await this.axiosClient.delete<string>(`/usuario?id=${id}`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }
}
export default new UsuarioClient();