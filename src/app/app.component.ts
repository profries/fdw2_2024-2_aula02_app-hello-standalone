import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { MyComponentComponent } from './my-component/my-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FormsModule,
    MeuComponenteComponent,
    MyComponentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'World';
  name = 'everybody';
  dispararAlerta() {
    alert("Disparado o alerta");
    this.name= 'Ries'    
  }
}
