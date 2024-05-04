import { Component, ComponentRef, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { appImports } from './app.imports';
import { ChildComponent } from './components/child/child.component';
import { ExampleDirective } from './directives/example.directive';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: appImports,
  template:`
  <input type="text" #txtInput1> 
  <app-child>
    <input type="text" #contentChild>
  </app-child>
  <div #div>1</div>
  <div #div>2</div>
  <div #div>3</div>
  <input #newDiv appExample [(ngModel)]="data"/>
  <hr>
  <h2>Renderer2</h2>
  <h2>ContentChild</h2>

  `
})
export class AppComponent {
  constructor(private r2 :Renderer2){}
data:string="Ali";
  //buradaki static parametresi elementin yada componentin sonradan oluşturulup oluşturulmadığını bildirmemizi sağlar
  //eğer false olursa ilgili nesnenin sayfanın yüklenmesinden sonra oluşturulacağını bildirmiş oluruz.
  //yani afterviewinitden erişebiliriz.
  @ViewChild('txtInput1',{static:true}) _input1:ElementRef;
  @ViewChild(ChildComponent,{static:true}) _childComponent:ChildComponent;
  //birden fazla instance olan nesnelerin ilk değeri işaretlenecektir.
  @ViewChild("div",{static:true}) _div:ElementRef;
  //Viewchild ile referans edilen ögeler birden fazla türle ilişkilendirilerek elde edilebilirler.
  @ViewChild('newDiv',{static:true,read:ExampleDirective}) _newDiv:ExampleDirective
  @ViewChild('newDiv',{static:true,read:NgModel})_newDiv_NgModel;
  // bir chil component içerisinde verilmiş provider a erişme
  @ViewChild(ChildComponent,{static:true,read:"Example Provider"}) _exampleProvider:string;
  @ViewChildren('div') _div_children :QueryList<ElementRef>;


  ngAfterViewInit(){
    // this._input1.nativeElement.value="?"
    // console.log(this._input1.nativeElement);
    // console.log(this._childComponent);
    // this._div.nativeElement.style.backgroundColor="red";
    // console.log(this._newDiv);
    // console.log(this._newDiv_NgModel);
    // console.log(this._exampleProvider);
    // console.log(this._div_children);
    //Renderer2 
    this.r2.setStyle(this._input1.nativeElement,"color","red")
    
    
    
  }
  title = 'DemoApp11';
}
