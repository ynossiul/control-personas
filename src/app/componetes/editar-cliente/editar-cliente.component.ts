import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/clientes.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  clientes: Cliente[];
  cliente:Cliente= {
    Nombre:'',
    Apellido:'',
    Email:'',
    Saldo:0
  }
  id:string;

  constructor(private clienteservicio: ClienteServicio,
    private flashmessages:FlashMessagesService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.clienteservicio.getCliente(this.id).subscribe( cliente => {
      this.cliente=cliente;
    });
  }

  guardar({value,valid}: {value: Cliente, valid:boolean}){
    if(!valid){
      this.flashmessages.show("Por favor llena el formulario correctamente",{
        cssClass: 'alert-danger', timeout: 4000
      })
    }
    else{
      value.id=this.id;
      //modificar clienye
      this.clienteservicio.modificarCliente(this.cliente);
      this.router.navigate(['/']);
    }
  }

  eliminar(){
    if(confirm ('seguro que desea eliminar el cliente?')){
      this.clienteservicio.eliminarCliente(this.cliente);
      this.router.navigate(['/']);
    }
  }

}
