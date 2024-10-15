import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "src/app/shared/ingredients.model";

@Injectable({
    providedIn: 'root'
})

export class ShoppingListService{

    ChangedIngredients = new Subject<Ingredient[]>();

    startedEditing = new Subject<number>();

    deletedItem = new EventEmitter<Ingredient>();

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

      onIngredientAdded(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ChangedIngredients.next(this.ingredients.slice());
      }

      getIngredient(index:number){
        return this.ingredients[index];
      }

      getIngredients(){
        return this.ingredients.slice();
      }


      addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ChangedIngredients.next(this.ingredients.slice());
      }

      updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;

        this.ChangedIngredients.next(this.ingredients.slice());
      }

      onDeleteItem(index: number){
        this.ingredients.splice(index,1);
        this.ChangedIngredients.next(this.ingredients.slice());
      }
}