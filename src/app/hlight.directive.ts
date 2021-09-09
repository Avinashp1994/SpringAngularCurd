import { Directive, ElementRef, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHlight]'
})
export class HlightDirective {

  @HostBinding('style.background-color') backColor : string;

  constructor(){
    this.backColor='red';
  }

  // constructor(private el: ElementRef) { 
  //   el.nativeElement.style.backgroundColor = "yellow";
  // }

  @HostListener('click') doSomething(){
    alert('HostListener Works');
  }

  @HostListener('mouseenter') doSomethingElse() {
    console.log('Mouse Just Entered');
  }

  @HostListener('mousemove') doSomethingElseElse() {
    console.log('Mouse Just Move');
  }

  @HostListener('mouseover') doSomethingElseElseElse() {
    console.log('Mouse Just Over');
  }

}
