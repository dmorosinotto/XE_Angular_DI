import { Component, Input, OnInit, Inject, Optional, SkipSelf, Self, Host } from "@angular/core"
import { NComponent } from "./n.component";
import { PComponent } from "./p.component";

@Component({
  selector: "c-cmp",
  template: `<div [style.--color]="color"> 
                {{this.constructor.name}} {{rnd}}
                <pre>{{cmpsvc}}</pre>
            </div>`,
  // providers: [{provide: "CMPSVC", useValue: "CMPSVC provide in c-cmp" }],
})
export class CComponent {
  constructor(@Inject("CMPSVC") public cmpsvc: string) {}
  // constructor(@Inject("CMPSVC") @Host() @Optional() public cmpsvc: string) {}
  //DECCOMENTARE RIGA PROVIDERS
  // constructor(@Inject("CMPSVC") @Self() @Optional() public cmpsvc: string) {} 
  // constructor(@Inject("CMPSVC") @SkipSelf() @Optional() public cmpsvc: string) {}

  //ESEMPIO INJECT PARENT COMPONENT + OPTIONAL
  // constructor(@Inject("CMPSVC") public cmpsvc: string, 
  // @Optional() p: PComponent | null, n: NComponent) {
  //   console.log(`C${this.rnd} HO nonno: ${n.cmpsvc}`);
  //   if (p!=null) 
  //     console.log(`C${this.rnd} HO parent: ${p?.cmpsvc}`)
  //   else console.warn(`C${this.rnd} NON HO parent ${p}`);
  // }

  @Input() color: string = "yellow";
  public rnd = Math.random()
  
}