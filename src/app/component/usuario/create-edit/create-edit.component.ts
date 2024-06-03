import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../../model/usuario';
import { UsuarioService } from '../../../service/usuario.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Rol } from '../../../model/rol';
import { RolService } from '../../../service/rol.service';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrl: './create-edit.component.css'
})
export class CreateEditComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  usuario: Usuario = new Usuario();
  mensaje: string = '';
  id: number = 0;
  //edicion: boolean = false;
  lista: Rol[]=[];
  public idRolSeleccionado: number=0;

  constructor(
    private usuarioService: UsuarioService,
    private rolService:RolService,
    private router: Router,
    private route : ActivatedRoute
  ){}

  ngOnInit(): void {
    /*this.route.params.subscribe((data:Params)=>
      {
        this.id=data['id'];
        this.edicion=data['id']!=null;
        this.init();
      }
    );*/
    //this.rolService.list().subscribe(data => {this.lista = data}),

    this.form=new FormGroup({
      id: new FormControl(),
      nombre: new FormControl('',[Validators.required]),
      edad: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      rol: new FormControl()
    });
  }
  aceptar(): void{
    this.usuario.id = this.form.value['id'];
    this.usuario.username = this.form.value['nombre'];
    this.usuario.edad = this.form.value['edad'];
    this.usuario.correo = this.form.value['correo'];
    this.usuario.rol.tipoRol = this.form.value['rol.tipoRol'];
    if(this.idRolSeleccionado>0){
      let r = new Rol();
      r.id = this.idRolSeleccionado;
      console.log(r);
      this.usuario.rol = r;
      console.log(this.usuario);
      this.usuarioService.insert(this.usuario).subscribe(()=>{
        this.usuarioService.list().subscribe(data =>{
          this.usuarioService.setList(data);
        })
      })
      this.router.navigate(['usuarios']);
    }
  }
}
