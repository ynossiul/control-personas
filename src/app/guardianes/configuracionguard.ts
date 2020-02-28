import {CanActivate,Router} from '@angular/router';
//import {AngularFireAuth} from '@angular/fire/auth';
import {ConfiguracionServicio} from 'src/app/servicios/configuracion.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from'rxjs/operators';

@Injectable()
export class ConfiguracionGuard implements CanActivate{
  constructor( private router: Router,
  //private afAuth:AngularFireAuth,
  private configuracionservicio:ConfiguracionServicio
){}

canActivate():Observable<boolean>{
  return this.configuracionservicio.getConfiguracion().pipe(
    map(configuracion=>{
      if(configuracion.permitirRegistro){
        return true;
      }
      else{
        this.router.navigate(['/login']);
        return false;
      }
    })
  );
}
}
