import {Component,Input } from 'angular2/core';
import {NgClass} from 'angular2/common';

@Component({
    selector: 'zippy', 
    template: `
     <div class="zippy">  
        <div class="zippy-title" (click)="toggle()" >
             {{title}} 
            <i class="glyphicon" [ngClass]="
             {
                 'glyphicon-chevron-down': collapse,
                 'glyphicon-chevron-up': !collapse
             }" 
            >
            </i>
         </div>
         <div *ngIf="!collapse" class="zippy-content">
           <ng-content></ng-content>
         </div>
      </div>     
          `,
   directives:[NgClass],
})

export class ZippyComponent {
  collapse = true;
  @Input() title: string ;
  
  toggle(){
      this.collapse = !this.collapse;
  }
}