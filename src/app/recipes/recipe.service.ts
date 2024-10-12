import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "src/shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class RecipeService{

   recipesChanged = new Subject<Recipe[]>();

   recipes: Recipe[] = [
      // new Recipe(
      //       'Manchurian',
      //       "This is simply a test",
      //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzGbx87i8TCsYsbiuPxv9Eios1qhpPTdVbg&s",
      //       [
      //          new Ingredient('Carrot',50),
      //          new Ingredient('Cabbage', 50)
      //       ]),
      // new Recipe(
      //       'Mutter Paneer',
      //       "This is simply a test", 
      //       "https://lh5.googleusercontent.com/p/AF1QipPjK9F5PdGyDVNHcmFSg9sdYdjCZOAehVokHEYb=w92-h92-n-k-no",
      //       [
      //          new Ingredient('Mutter', 10),
      //          new Ingredient('Paneer', 100)
      //       ]),
      // new Recipe(
      //       'paav Bhaji',
      //       "This is simply a test",
      //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUpH78G3_-KtUlbcBac9__vDAhZbzsKJzsCw&s",
      //       [
      //          new Ingredient('Buns', 30),
      //          new Ingredient('Bhaaji', 50)
      //       ]),
      ];

     

      constructor(private slService: ShoppingListService){}

      setRecipes(recipes: Recipe[]){
         this.recipes = recipes;
         this.recipesChanged.next(this.recipes.slice());
      }

      getRecipe(index: number){
         return this.recipes[index];
      }
      getRecipes(){
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
         this.recipes.push(recipe);
         this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe:Recipe){
         this.recipes[index] = newRecipe;
         this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
         this.recipes.splice(index,1);
         this.recipesChanged.next(this.recipes.slice());
      }
}