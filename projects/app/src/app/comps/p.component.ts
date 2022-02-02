import { Component, Input, OnInit, Inject, Optional, SkipSelf, Self, Host } from "@angular/core"

@Component({
  selector: "p-cmp",
  template: `<div [style.--color]="color"> 
                {{this.constructor.name}}
                <pre>{{cmpsvc}}</pre>
                <c-cmp></c-cmp>
            </div>`,
  providers: [{provide: "CMPSVC", useFactory: ()=> `CMPSVC provide in p-cmp ${Math.random()}` }],
})
export class PComponent {
  constructor(@Inject("CMPSVC") public cmpsvc: string) {

  }
  @Input() color: string = "cyan";
  
}