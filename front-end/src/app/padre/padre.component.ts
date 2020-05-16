import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor() { }

  valorDelInput = '';

  ngOnInit(): void {

  }
  valoredad = '';

  age;
  showAge;
  ageCalculator(){
   
if(this.age){
  var convertAge = new Date(this.age);
  var timeDiff = Math.abs(Date.now() - convertAge.getTime());
  this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
return this.showAge;
  }
  }
  }

