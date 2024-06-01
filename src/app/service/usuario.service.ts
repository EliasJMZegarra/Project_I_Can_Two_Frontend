import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { Observable, Subject } from 'rxjs';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';
const base_url = enviroment.base
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = `${base_url}`
  private listaCambio = new Subject<Usuario[]>();

  constructor(private http: HttpClient) { }

  list(): Observable<any>{
    return this.http.get<Usuario[]> (this.url + "/listar");
  }
  insert(usuario:Usuario){
    return this.http.post(this.url+'/registrar', usuario);
  }
  update(usuario:Usuario){
    return this.http.put(this.url+"/actualizar",usuario);
  }
  delete(id:string){
    return this.http.delete(this.url+"/eliminar/"+id);
  }
  setList(listaNueva: Usuario[]){
    this.listaCambio.next(listaNueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
}
