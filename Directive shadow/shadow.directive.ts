import { Directive, OnInit, Input,OnChanges,ElementRef } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective implements OnInit {

  @Input() appShadow:string= "2px 2px 5px red";

  constructor(private element:ElementRef)
  {
    this.element.nativeElement.style.textShadow= this.appShadow;
  }

  ngOnInit(){

    
    this.element.nativeElement.style.textShadow= this.appShadow;

  }


}