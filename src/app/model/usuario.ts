import { Rol } from "./rol";

export class Usuario {
    id:number =0;
    username:string="";
    edad:number=0;
    correo:string="";
    password:string="";
    enabled:boolean=true;
    rol!:Rol;
}
