import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../../../model/usuario';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UsuarioService } from '../../../service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrl: './usuario-listar.component.css'
})
export class UsuarioListarComponent implements OnInit{
  lista:Usuario[]=[];
  displayedColumns = ['id', 'nombre', 'edad', 'correo', 'rol', 'editar', 'eliminar'];
  dataSource = new MatTableDataSource<Usuario>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private usuarioService: UsuarioService, private roter:Router){console.log("Load Constructor");}
  ngOnInit(): void {
    this.usuarioService.list().subscribe(data =>this.dataSource.data = data);
    this.usuarioService.getList().subscribe(data => {this.dataSource.data = data});
  }
  filtrar(e:any){
    this.dataSource.filter = e.target.value.trim();
  }
  delete(id:string){
    this.usuarioService.delete(id).subscribe(()=>{
      this.usuarioService.list().subscribe(data=>{
        this.usuarioService.setList(data);
      })
    });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
}
