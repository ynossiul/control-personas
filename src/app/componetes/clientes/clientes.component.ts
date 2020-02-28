import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import { Cliente } from 'src/app/modelo/clientes.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {NgForm} from '@angular/forms'


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  cliente:Cliente= {
    Nombre:'',
    Apellido:'',
    Email:'',
    Saldo:0


  }

  @ViewChild("clienteForm") clienteForm:NgForm;
  @ViewChild("botonCerrar") botonCerrar:ElementRef;

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
      this.clienteservicio.agregarCliente(value);
      this.clienteForm.resetForm();
      this.cerrarModal();
    }

  }

  private cerrarModal(){
    this.botonCerrar.nativeElement.click();
  }

}
