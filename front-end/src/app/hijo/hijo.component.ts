import { Component, OnInit, Input } from '@angular/core';
import { EADDRNOTAVAIL } from 'constants';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor() { }
  @Input() valorDelPadre: string;

  ngOnInit() {

  }

  alertaValorPadre() {
    alert(this.valorDelPadre)
  }


@Input() men: string;
  mensaje() {
    alert(this.men)
    
  }
 

}