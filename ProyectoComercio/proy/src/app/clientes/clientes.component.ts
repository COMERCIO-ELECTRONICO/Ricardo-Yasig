import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { clienteService } from '../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  string;
  credencial ='';
  nombre ='';
  direccion='';
  telefono ='';


  constructor(
    private readonly _router: Router,
    private readonly _Registrocliente: clienteService,  

  ) { }

  ngOnInit(): void {

    this._Registrocliente.listaCliente('http://localhost:1337/clientes')
    .subscribe((listas)=>{

     // console.log(JSON.stringify(listas[1]['id']));

      this.string=listas;
      

      this.string = listas;
      this.string=this.string;
    })

  }

  agregar(){
     this._Registrocliente.creoCliente({
          
       credencial: this.credencial,
       nombre:this.nombre,
       direccion: this.direccion,
       telefono: this.telefono
        
        }).subscribe(
          (registroCreado)=> {
            console.log('registroCreado');
            console.log(registroCreado);
        
          }
        )
         
  }



  delete(valor){
   
    this._Registrocliente.eliminarCliente((`http://localhost:1337/clientes/${valor}`))
    
    .subscribe((datos)=>{

      this.string = datos;
     
    })
    }


    Editar(dato){
      console.log('valor name')
      console.log(dato);
      this._router.navigate(['cliente/'+ dato])
      
    }

    


}

