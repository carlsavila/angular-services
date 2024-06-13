import { Component, inject } from '@angular/core';
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

  ngOnInit() {
      this.cocktails = this.cocktailService.getCocktails();
  }
}
