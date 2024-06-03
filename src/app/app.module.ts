import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { RolComponent } from './component/rol/rol.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { UsuarioListarComponent } from './component/usuario/usuario-listar/usuario-listar.component';
import { CreateEditComponent } from './component/usuario/create-edit/create-edit.component';
import { RolListarComponent } from './component/rol/rol-listar/rol-listar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule }from '@angular/material/table';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
//import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DialogoComponent } from './component/usuario/usuario-listar/dialogo/dialogo.component'
@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    RolComponent,
    UsuarioListarComponent,
    CreateEditComponent,
    RolListarComponent,
    NavbarComponent,
    DialogoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatToolbarModule,
    MatDialogModule,
    //MatMomentDateModule,
    MatSelectModule,
    MatGridListModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
