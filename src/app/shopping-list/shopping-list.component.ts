import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from 'src/shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  ingredients: Ingredient[];

  private subscription: Subscription;

  constructor(private slService:ShoppingListService) {
    this.ingredients = this.slService.getIngredients();

    this.subscription = this.slService.ChangedIngredients.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
    console.log("Constructor");
  }

  ngOnInit(): void {
    console.log("on init");
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }

  onDelete(index: number){
    
    const item = this.slService.getIngredient(index);

    this.slService.deletedItem.emit(item);
    this.slService.onDeleteItem(index);
  }

}
