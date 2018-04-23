import { Directive, ElementRef, Input,OnInit,Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective{

   
   constructor(private el:ElementRef ,private renderer: Renderer2) {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow')
    }

     
    
}