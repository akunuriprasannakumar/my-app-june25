import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCapital]' // selector used in HTML
})
export class CapitalDirective {
  constructor(private _elementRef: ElementRef) {
    // This runs automatically when used in HTML — DO NOT call manually
  }

  @HostListener('input', ['$event'])
  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase();
  }
}
