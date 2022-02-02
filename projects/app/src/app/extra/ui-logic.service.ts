import { Injectable, Input, Inject, Optional, SkipSelf, Self, Host, Output, EventEmitter } from "@angular/core"
import { Subject } from "rxjs"

@Injectable()
export class UILogic {

  constructor(@Inject("CMPSVC") public cmpsvc: string) {
    this.logColor("CTOR" + cmpsvc);
  }
  
  private _color = "red";
  get color(): string {
    return this._color;
  } 
  set color(value: string) {
    this._color = value;
    this.logColor("SET");
  }
  evt = new Subject<string>();
  
  emitEvt(value: string) { this.evt.next(value); }
  
  private logColor(into: string) {
    console.log(`${this.constructor.name} ${into} color= ${this._color}`)
  }
}