import {
  Component,
  Input,
  OnInit,
  Inject,
  Optional,
  SkipSelf,
  Self,
  Host,
} from '@angular/core';
import { BDirective } from './b.directive';

@Component({
  selector: 't-cmp',
  // templateUrl: "b.template.html",
  template: `<div [style.--color]="self.color"> 
                <button (click)="self.onClk()"> {{this.constructor.name}} </button>
                <pre>{{cmpsvc}}</pre>
            </div>`,
  providers: [{ provide: 'CMPSVC', useValue: 'CMPSVC provide in t-cmp' }],
})
export class TComponent {
  constructor(
    @Self() public self: BDirective,
    @Inject('CMPSVC') public cmpsvc: string
  ) {
    // this.logColor("CTOR" + cmpsvc);
  }

  // // private _color: string = "blue";
  // // @Input() set color(value:string) {
  // //   this._color = value;
  // //   this.logColor("SET");
  // // }
  // // get color() {
  // //   return this._color;
  // // }

  // ngOnInit() {
  //   this.logColor("ONINIT");
  // }

  // private logColor(into: string) {
  //   console.log(`${this.constructor.name} ${into} color= ${this.bl.color}`)
  // }
}
