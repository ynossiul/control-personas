import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router,ActivatedRoute} from '@angular/router';
import {LoginService} from 'src/app/servicios/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  Email:string;
  Password:string;

  constructor(private router:Router,
              private flashmessages:FlashMessagesService,
              private loginservice:LoginService) { }

  ngOnInit(): void {this.loginservice.getAuth().subscribe(auth=>{
    if(auth){
      this.router.navigate(['/']);
    }
  })
  }
  registro(){
    this.loginservice.registrarse(this.Email,this.Password)
    .then(res=>{
      this.router.navigate(['/']);
    })
    .catch(error=>{
      this.flashmessages.show(error.messages,{
        cssClass:'alert-danger',timeout: 4000
      });
    });
  }

}
