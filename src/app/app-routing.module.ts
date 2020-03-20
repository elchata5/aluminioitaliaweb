import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { EditarImagenComponent } from './editar-imagen/editar-imagen.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { CatsComponent } from './nuevo/nuevo.component';

import {AuthGuard} from './guards/auth.guard';
const routes: Routes = [{path: 'contacto' , component: ContactoComponent  },
{path: 'trabajos' , component: TrabajosComponent  },
{path: 'edit/:id', component: EditarImagenComponent, canActivate: [AuthGuard]},
{path: 'sesion' , component: CatsComponent , canActivate: [AuthGuard] },
{path: 'login' , component: LoginComponent  },
{path: '' , component: InicioComponent  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
