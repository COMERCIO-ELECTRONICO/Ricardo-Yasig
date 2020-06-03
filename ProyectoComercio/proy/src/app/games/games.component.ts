import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(

    private readonly _RegistroService: RegisterService,
  ) { }

  ngOnInit(): void {
  }


  verUsuarios(){


      this._RegistroService.listarpersonas({
    
     
        
        }).subscribe(
          (registroCreado)=> {
            console.log('registroCreado');
            console.log(registroCreado);
       
          }
        )
       
  }











}
