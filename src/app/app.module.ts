import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {FormsModule} from '@angular/forms';
import {ClienteServicio} from './servicios/cliente.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceroComponent } from './componetes/cabecero/cabecero.component';
import { TableroComponent } from './componetes/tablero/tablero.component';
import { ClientesComponent } from './componetes/clientes/clientes.component';
import { EditarClienteComponent } from './componetes/editar-cliente/editar-cliente.component';
import { LoginComponent } from './componetes/login/login.component';
import { RegistroComponent } from './componetes/registro/registro.component';
import { ConfiguracionComponent } from './componetes/configuracion/configuracion.component';
import { NoEncontradoComponent } from './componetes/no-encontrado/no-encontrado.component';
import { PiePaginaComponent } from './componetes/pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    TableroComponent,
    ClientesComponent,
    EditarClienteComponent,
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    NoEncontradoComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore, 'control-clientes'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ClienteServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
