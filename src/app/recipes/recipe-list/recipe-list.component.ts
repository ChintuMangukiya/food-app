import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipt-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipes: Recipe[] = [
    new Recipe('Manchurian', "This is simply a test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzGbx87i8TCsYsbiuPxv9Eios1qhpPTdVbg&s"),
    new Recipe('Mutter Paneer', "This is simply a test", "https://lh5.googleusercontent.com/p/AF1QipPjK9F5PdGyDVNHcmFSg9sdYdjCZOAehVokHEYb=w92-h92-n-k-no"),
    new Recipe('paav Bhaji', "This is simply a test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUpH78G3_-KtUlbcBac9__vDAhZbzsKJzsCw&s"),

  ];
  @Output('recipeWaSelected') showRecipe= new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.showRecipe.emit(recipe);
  }

}