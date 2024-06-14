import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HelloWorldService } from './services/hello-world.service';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { NasaService } from './services/nasa.service';
import { Imgoftheday } from './models/imgoftheday';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CocktailListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Services';

  // Atelier : injection de service:
  //1er méthode avec le constructeur
  /*   constructor(private helloWorldService: HelloWorldService) { };   */

  // 2ème méthode, plus récente(depuis la version 14 d'Angular, sortie en juin 2022.), avec inject
  private helloWorldService = inject(HelloWorldService); 

  private nasaService = inject(NasaService);
  public imgOfTheDay: Imgoftheday = {
    copyright : "string",
    date: new Date(), 
    explanation: "",
    hdurl: "",
    media_type: "",
    service_version: "",
    title: "",
    url : "",
  };

  onClick () {
    console.log(this.helloWorldService.getHelloWorld());
    alert("C'est bon! Enregistré!")
  }

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe(
      imageFromNasa => {
        console.log(imageFromNasa);
        this.imgOfTheDay = imageFromNasa;
        console.log(this.imgOfTheDay);
      }
    )
  }
}
