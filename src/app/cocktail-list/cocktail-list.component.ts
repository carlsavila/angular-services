import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Cocktail } from '../models/cocktail';
import { CocktailService } from '../services/cocktail.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {

  public cocktails: Cocktail[] = [];

  private cocktailService = inject(CocktailService);

  @Output()
  cocktailEmitter : EventEmitter<Cocktail> = new EventEmitter();
  cocktailToEmit!: Cocktail;

  sendCocktail (cocktail: Cocktail){
    this.cocktailToEmit = cocktail;
    this.cocktailEmitter.emit(this.cocktailToEmit);
  }

  ngOnInit(): void {
     //this.cocktails = this.cocktailService.getCocktails();

     // subscribe implementation
     this.cocktailService.getCocktails().subscribe(
      cocktailsFromJsonFile => {
        console.log(cocktailsFromJsonFile)
        this.cocktails = cocktailsFromJsonFile;
      }
     )
  }
}
