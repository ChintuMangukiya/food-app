import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {



  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(form:NgForm){

    const value = form.value;

    const newIngredient = new Ingredient(value.name, value.amount);

    this.slService.onIngredientAdded(newIngredient);
  }

  clearBasket(){
    let confirm = window.confirm("on click ok all the shopping items will be removed!");

    if(confirm)
    {
      this.slService.onClearBasket();
    }
  }
}