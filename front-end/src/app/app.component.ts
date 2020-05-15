import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  
  tituloPadre = 'soy tu padre hola';
  nombreBotonPadre = 'alertar!!!!!!!!';
  imagenPadre = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFM1zczz0IQAvViVhuCLh3ou6vhfFbYgLMEE1PB5nehOwfcHa2&usqp=CAU';

  datosHijo = {
    tituloPadre: 'soy tu padre hola',
    nombreBotonPadre: 'alertar!!!!!!!!',
    imagenPadre: 'https://djmagmx.com/wp-content/uploads/2019/03/img-destaque-post-tracks-trance-europeu-asot-armin-1-695x400.jpg',
  };


  obtenerRespuestaHjo(evento) {
    console.log(evento)
  }
}
