import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { ProducService } from '../services/pro.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  string;
  titulo ='';
  clasificacion ='';
  consola='';
  fabricante ='';
  version ='';
  catagolo ='';

  constructor(
    private readonly _router: Router,
    private readonly _RegisPro: ProducService,  

  ) { }

  ngOnInit(): void {

    this._RegisPro.lisProduc('http://localhost:1337/producto')
    .subscribe((listas)=>{

      this.string = listas;

    })
  }



  agregarPro(){
    this._RegisPro.creoProductos({
         
      titulo : this.titulo,
      clasificacion: this.clasificacion,
      consola: this.consola,
      fabricante: this.fabricante,
      version: this.version,
      catagolo : this.catagolo
       
       }).subscribe(
         (pro)=> {
           console.log('producto creado');
           console.log(pro);
       
         }
       )
         }



         delete(val){
   
          this._RegisPro.eliminar((`http://localhost:1337/producto/${val.id}`))
          
          .subscribe((dat)=>{
      
            this.string = dat;
           
          })
          
        }

        editar(edit){

        }



}
