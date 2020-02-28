import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableroComponent} from './componetes/tablero/tablero.component';
import {LoginComponent} from './componetes/login/login.component';
import {RegistroComponent} from './componetes/registro/registro.component';
import {ConfiguracionComponent} from './componetes/configuracion/configuracion.component';
import {EditarClienteComponent} from './componetes/editar-cliente/editar-cliente.component';
import {NoEncontradoComponent} from './componetes/no-encontrado/no-encontrado.component';
import {AuthGuard} from 'src/app/guardianes/authguard';


const routes: Routes = [
  {path:'',component:TableroComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'registrarse',component:RegistroComponent},
  {path:'configuracion',component:ConfiguracionComponent, canActivate:[AuthGuard]},
  {path:'cliente/editar/:id',component:EditarClienteComponent,canActivate:[AuthGuard]},
  {path:'**',component:NoEncontradoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
