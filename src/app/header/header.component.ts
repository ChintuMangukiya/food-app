import { Component, OnDestroy, OnInit } from "@angular/core";
import { DataStorageService } from "src/app/shared/data-storage.service";
import { AuthService } from "../Auth/auth.service";
import { Subscription } from "rxjs";
import { RecipeService } from "../recipes/recipe.service";

@Component({
       selector: 'app-header',
       templateUrl: './header.component.html',
       styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy{

       isAuthenticated = false;

       private userSub: Subscription;

       constructor(private dataStorageServices: DataStorageService, private authService: AuthService, private recipeService: RecipeService){}

       onSaveData(){
              this.dataStorageServices.storeRecipes();
       }
       onFetchData(){
              this.dataStorageServices.fetchRecipes();
       }

       ngOnInit(): void {
             this.userSub =  this.authService.user.subscribe(user => {
                  this.isAuthenticated = !!user;
             });
       }

       onLogout(){
             this.authService.logout();
       }

       ngOnDestroy(): void {
              this.userSub.unsubscribe();
       }

}