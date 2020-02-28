import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';


@Injectable()
export class LoginService{
  constructor(private authservice: AngularFireAuth){}

  Login(email:string,password:string){
    return new Promise((resolve,reject)=>{
      this.authservice.auth.signInWithEmailAndPassword(email,password)
      .then(datos=> resolve(datos),
      error=> reject(error)
      )
    })
  }

  getAuth(){
    return this.authservice.authState.pipe(
      map(auth=> auth)
    );
  }

  logOut(){
    this.authservice.auth.signOut();
  }

  registrarse(email:string,password:string){
    return new Promise((resolve,reject)=>{
      this.authservice.auth.createUserWithEmailAndPassword(email,password)
      .then(datos=>resolve(datos),error=>reject(error))
    });
  }

}
