import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email = '';
  contrasena = '';

  obtenerFormulario(formulario) {
    console.log(formulario);
    alert(
      'correo: ' +
        formulario.controls.email.value +
        'password: ' +
        formulario.controls.contrasena.value
    );

    }

    Pnombre = '';
    Snombre = '';
    pass = '';
    vpass='';
  
    obtenUser(formulario) {
      console.log(formulario);
      alert(
        'nombre: ' +
          formulario.controls.Pnombre.value +
          'SegundoName:  ' +
          formulario.controls.Snombre.value+
          'Pass: ' +
          formulario.controls.pass.value+
          'VerificaPass: ' +
          formulario.controls.vpass.value

      );
      }
}






