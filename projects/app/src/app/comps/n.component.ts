import { Component, Input, OnInit, Inject, Optional, SkipSelf, Self, Host } from "@angular/core"

@Component({
  selector: "n-cmp",
  template: `<div [style.--color]="color"> 
                {{this.constructor.name}}
                <pre>{{cmpsvc}}</pre>
                <p-cmp></p-cmp>
                <p-cmp color="pink"></p-cmp>
                <aside><ng-content></ng-content></aside>
            </div>`,
  providers: [{provide: "CMPSVC", useValue: "CMPSVC provide in n-cmp" }],
})
export class NComponent {
  constructor(@Inject("CMPSVC") public cmpsvc: string) {

  }
  @Input() color: string = "gray";
  
}

