import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html'
})

export class AppComponent {
    titulo:string = 'Lista de Heroes';
    heroe:Heroe = { id: 1, nombre: 'El Capitan Fanegas' };
 }

 export class Heroe{
     id:number;
     nombre:string;
 }
