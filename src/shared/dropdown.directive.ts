import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})


export class DropdownDirective{
    


    @HostBinding('class.open') isOpen = false;

    @HostListener('document.click')  toggleOpen(){
        this.isOpen = false;

    }
    constructor(private elRef: ElementRef){}


    @HostListener('click') toggleOpen1(){
        this.isOpen = !this.isOpen;
    }
}