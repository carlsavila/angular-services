import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HelloWorldService } from './services/hello-world.service';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { NasaService } from './services/nasa.service';
import { Imgoftheday } from './models/imgoftheday';
import { Cocktail } from './models/cocktail';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CocktailListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Atelier Services';

  // Atelier : injection de service:
  //1er méthode avec le constructeur
  /*   constructor(private helloWorldService: HelloWorldService) { };   */

  // 2ème méthode, plus récente(depuis la version 14 d'Angular, sortie en juin 2022.), avec inject
  private helloWorldService = inject(HelloWorldService); 

  private nasaService = inject(NasaService);
  // Initialisation fixes error : title undifined
  public imgOfTheDay: Imgoftheday = {
    copyright : "",
    date: new Date(), 
    explanation: "",
    hdurl: "",
    media_type: "",
    service_version: "",
    title: "",
    url : "",
  };

  clickedCocktail!: Cocktail;

  onGetCocktail (event: Cocktail): void {
    //For  DEBUG only : console.log(this.helloWorldService.getHelloWorld());
    this.clickedCocktail = event;
    //For  DEBUG only : 
    console.log(event.name);
    alert("C'est bon! Enregistré ! :) Très bon choix :P " + event.name );

  }

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe(
      imageFromNasa => {
        //For DEBUG only : console.log(imageFromNasa);
        this.imgOfTheDay = imageFromNasa;
        //For DEBUG only : console.log(this.imgOfTheDay);
      }
    )
  }
}
