import { Injectable, Input } from '@angular/core';
import { Cocktail } from '../models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  @Input()
  cocktails: Cocktail[] = [
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
  }
}
