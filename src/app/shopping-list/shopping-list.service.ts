import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "src/shared/ingredients.model";


@Injectable({
    providedIn: 'root'
})

export class ShoppingListService{

    ChangedIngredients = new Subject<Ingredient[]>();

    ingredients: Ingredient[]=[
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

      onIngredientAdded(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ChangedIngredients.next(this.ingredients.slice());
      }

      getIngredients(){
        return this.ingredients.slice();
      }

      onClearBasket(){
        this.ingredients.length = 0;
        this.ChangedIngredients.next(this.ingredients.slice())
      }

      addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ChangedIngredients.next(this.ingredients.slice());
      }
}