import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router,ActivatedRoute} from '@angular/router';
import {LoginService} from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 Email:string;
 Password:string;
  constructor( private router:Router,
              private flashmessages:FlashMessagesService,
              private loginservice:LoginService) { }

  ngOnInit() {
    this.loginservice.getAuth().subscribe(auth=>{
      if(auth){
        this.router.navigate(['/']);
      }
    })
  }

  login(){
    this.loginservice.Login(this.Email,this.Password)
    .then( res=>{
      this.router.navigate(['/']);
    })
    .catch(error=>{
      this.flashmessages.show(error.messages,{
        cssClass: 'alert-danger', timeout: 4000
      });
    });
  }
}
