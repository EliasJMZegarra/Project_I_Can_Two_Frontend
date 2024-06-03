import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { CreateEditComponent } from './component/usuario/create-edit/create-edit.component';
import { UsuarioListarComponent } from './component/usuario/usuario-listar/usuario-listar.component';

const routes: Routes = [
  {
    path:'usuario', component:UsuarioComponent, children:[
      {
        path:'nuevo', component:CreateEditComponent
      },
      {
        path:'listar', component:UsuarioListarComponent
      },
      {
        path:'edicion/:id', component:CreateEditComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
