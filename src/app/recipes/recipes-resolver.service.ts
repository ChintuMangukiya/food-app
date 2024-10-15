import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';
import { Observable, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipesService: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Subscription | any {
    const recipes = this.recipesService.getRecipes();

    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
  }
}

// import { Injectable } from '@angular/core';
// import {
//   Resolve,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot
// } from '@angular/router';

// import { Recipe } from './recipe.model';
// import { DataStorageService } from '../../shared/data-storage.service';
// import { RecipeService } from './recipe.service';
// import { Observable, Subscription } from 'rxjs';

// @Injectable({ providedIn: 'root' })

// export class RecipesResolverService implements Resolve<Recipe[]> {
//   constructor(
//     private dataStorageService: DataStorageService,
//     private recipesService: RecipeService
//   ) {}

//   // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

//   // }

//   // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
//   //   const recipes = this.recipesService.getRecipes();

//   //   if (recipes.length === 0) {
//   //     return this.dataStorageService.fetchRecipes();
//   //   } else {
//   //     return recipes;
//   //   } 
//   // }


//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Promise<Recipe[]> | any {
//     const recipes = this.recipesService.getRecipes();

//     if(recipes.length !== 0)
//     {
//       return recipes;
//     }
//   }
// }
