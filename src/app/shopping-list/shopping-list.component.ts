import { Component, OnInit } from '@angular/core';
import { ignoreElements } from 'rxjs';
import { Ingredient } from 'src/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() {}

  ngOnInit(): void {

  }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  clearBasket(){
    this.ingredients.length = 0;
  }

}
