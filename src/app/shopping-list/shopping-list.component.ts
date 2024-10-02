import { Component, OnInit } from '@angular/core';
import { ignoreElements } from 'rxjs';
import { Ingredient } from 'src/shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private slService:ShoppingListService) {
    this.ingredients = this.slService.getIngredients();

    this.slService.ChangedIngredients.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )

    console.log("Constructor");
  }

  ngOnInit(): void {
    console.log("on init");
  }


}
