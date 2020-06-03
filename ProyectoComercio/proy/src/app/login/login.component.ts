import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  pass = '';
  constructor(

    private readonly _router: Router,
    private readonly _loginService: LoginService,  
  ) { }

  ngOnInit(): void {
  }

  ingresar(){


if (this.pass === '1234' && this.email ==='ricardoyasig@hotmail.com') {

alert('Bienvenidos !!')
    this._router.navigate(['/games', 'perfil']);
    // localhost:9000/estudiante/perfil
 
} else {
  alert('no ingreso');
  this._router.navigate(['/login']);
 this.email = '';
  this.pass = '';
}

  }


}
