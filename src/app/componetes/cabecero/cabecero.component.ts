import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/servicios/login.service';
import {Router} from '@angular/router';
import { ConfiguracionServicio} from 'src/app/servicios/configuracion.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
 isLoggedIn:boolean;
 loggedInUser:string;
 //mostrarRegistro:boolean;
 permitirRegistro:boolean;
  constructor(private loginservice:LoginService,
     private router:Router,
     private configuracionservicio:ConfiguracionServicio) { }

  ngOnInit(): void {
    this.loginservice.getAuth().subscribe(auth=>{
      if(auth){
        this.isLoggedIn=true;
        this.loggedInUser=auth.email;
      }
      else{
        this.isLoggedIn=false;
      }
    });

    this.configuracionservicio.getConfiguracion().subscribe(configuracion=>{
      this.permitirRegistro=configuracion.permitirRegistro;
    })
  }

  logout(){
    this.loginservice.logOut();
    this.isLoggedIn=false;
    this.router.navigate(['/login']);

  }





}
