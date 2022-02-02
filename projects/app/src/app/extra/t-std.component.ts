import { Component, Input, OnInit, Inject, Optional, SkipSelf, Self, Host } from "@angular/core"
import { BDirective } from "./b.directive";

@Component({
  selector: "t-cmp",
  templateUrl: "./b.template.html",
  
})
export class TComponent  {
  constructor( @Self() public self:BDirective) {
  }
  
}