import { Injectable, Input, inject } from '@angular/core';
import { Cocktail } from '../models/cocktail';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  // @Input()
  cocktails: Cocktail[] = [];
  /* [
    new Cocktail(
      "Cendrillon (Cinderella)", 15, 
      "https://www.cocktailmag.fr/media/k2/items/cache/6ef598b10d1539793d4ace8d8b7b613f_M.jpg"),
      new Cocktail(
        "Martini Cocktail (1888)", 16, 
        "https://www.cocktailmag.fr/media/k2/items/cache/martini-cocktail.jpg"),
        new Cocktail(
          "Lemon Drop Martini", 16, 
          "https://www.cocktailmag.fr/media/k2/items/cache/0dc247c07eee71a72cf9409729fb3455_M.jpg"),        
  ]

  getCocktails() :Cocktail[] {
    return this.cocktails;
  } */

  // HttpClient implementation
  private http = inject(HttpClient);
  // Observable with json file read implementation
  getCocktails(): Observable<Cocktail[]> {
    const obsCocktails = this.http.get<Cocktail[]>("assets/cocktails.json");
    return obsCocktails;
  }

}
