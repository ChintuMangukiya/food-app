import { Component } from "@angular/core";
import { DataStorageService } from "src/shared/data-storage.service";

@Component({
       selector: 'app-header',
       templateUrl: './header.component.html'
})

export class HeaderComponent{


       constructor(private dataStorageServices: DataStorageService){}

       onSaveData(){
              this.dataStorageServices.storeRecipes();
       }
       onFetchData(){
              this.dataStorageServices.fetchRecipes();
       }
}