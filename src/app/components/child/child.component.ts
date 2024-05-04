import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template:`
  Child Component
  <ng-content></ng-content>
  `,
  providers:[{provide:'Example Provider',useValue:'Example Provider Value'}]
})
export class ChildComponent {
@ContentChild('contentChild') _contentChild:ElementRef;

ngAfterContentInit(){
  this._contentChild.nativeElement.style.color="blue"
}
}
