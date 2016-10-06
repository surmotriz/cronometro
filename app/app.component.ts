import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
    `
      <h1>My First Angular App</h1>
      <h2>Cronometro</h2>
      <button>Empezar</button>
      <button>Lapso</button>
      <button>Parar</button>      
      <div>
        <p>{{hora}} : {{minuto}} : {{segundo}} </p>
      </div>
    `
})

export class AppComponent {
  public hora: number = 0;
  public minuto: number = 0;
  public segundo: number = 0;

  constructor(){
    
  }

 }
