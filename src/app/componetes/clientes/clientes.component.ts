import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/clientes.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  cliente:Cliente= {
    Nombre:'',
    Appellido:'',
    Email:'',
    Saldo:0

  }

  constructor(private clienteservicio: ClienteServicio, private flashmessages:FlashMessagesService) { }

  ngOnInit(): void {
    this.clienteservicio.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    );
  }

  getSaldoTotal() {
    let saldototal: number = 0;
    if (this.clientes) {
      this.clientes.forEach(
        cliente => {
          saldototal += cliente.Saldo;
        }
      )
    }
    return saldototal;

  }

  agregar({value,valid}:{value: Cliente, valid: boolean}){
    if(!valid){
      this.flashmessages.show('Por favor llena el formulario correctamente',{
        cssClass:'alert-danger', timeout: 4000
      });
    }
    else{
      //agregar persona
    }

  }

}
