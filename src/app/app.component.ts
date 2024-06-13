import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HelloWorldService } from './services/hello-world.service';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CocktailListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Services';

  // injection de service:
  //1er méthode avec le constructeur
  /*   constructor(private helloWorldService: HelloWorldService) { };   */

  // 2ème méthode, plus récente(depuis la version 14 d'Angular, sortie en juin 2022.), avec inject
  private helloWorldService = inject(HelloWorldService); 

  onClick () {
    console.log(this.helloWorldService.getHelloWorld());
    alert("C'est bon! Enregistré!")
  }
}
