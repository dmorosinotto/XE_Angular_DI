import { Component, Input, OnInit, Self, Output, EventEmitter } from "@angular/core"
import { BDirective } from "./b.directive";
import { UICustomLogic } from "./ui-custom.service";
import { UILogic } from "./ui-logic.service";

@Component({
  selector: "ui-cmp",
  template: `<div [style.--color]="color"> 
                <button (click)="onClk()"> {{this.constructor.name}} </button>
                <pre>{{cmpsvc}}</pre>
            </div>`,
  providers: [ UILogic, { provide: UILogic, useClass: UICustomLogic },
      {provide: "CMPSVC", useValue: "CMPSVC provide in ui-cmp" }],
})
export class UIComponent implements OnInit {
  constructor( @Self() public bl:UILogic) {
    this.logColor("CTOR" + bl.cmpsvc);
  }
  
  @Input() set color(value:string) {
    this.bl.color = value;
    this.logColor("SET");
  }
  get color() {
    return this.bl.color;
  }

  get cmpsvc():string { return this.bl.cmpsvc}  

  @Output() evt = this.bl.evt;
  onClk() { 
    this.color="red"; 
    this.bl.emitEvt(this.color);
  }

  ngOnInit() {
    this.logColor("ONINIT");
  }

  private logColor(into: string) {
    console.log(`${this.constructor.name} ${into} color= ${this.bl.color}`)
  }
}