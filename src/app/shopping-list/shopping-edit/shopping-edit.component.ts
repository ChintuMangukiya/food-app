import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;


  @Output('ingredientAdded') ingredientAdded = new EventEmitter<Ingredient>();

  @Output() onClearBasket = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName= this.nameInputRef.nativeElement.value;
    const ingAmount= this.amountInputRef.nativeElement.value
    const newIngredient = new Ingredient(ingName, ingAmount);

    console.log(newIngredient);
    this.ingredientAdded.emit(newIngredient);

  }

  clearBasket(){
    let confirm = window.confirm("on click ok all the shopping items will be removed!");

    if(confirm)
    {
      this.onClearBasket.emit();
    }
  }
}
