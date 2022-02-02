import { Directive, Input, OnInit, Inject, Optional, SkipSelf, Self, Host, Output, EventEmitter } from "@angular/core";
import { BDirective } from "./b.directive";

@Directive({
	selector: "t-cmp",
	providers: [
		{ provide: "CMPSVC", useValue: "CMPSVC provide in d-dir" },
		{ provide: BDirective, useExisting: DDirective }
	]
})
export class DDirective extends BDirective implements OnInit {
	constructor(@Self() @Inject("CMPSVC") public override cmpsvc: string) {
		super(cmpsvc);
	}

	@Input() override set color(value: string) {
		super.color = "orange" || value;
		console.error(`DDirective SET OVVERIDE ${value} -> orange`);
	}
	override get color() {
		return super.color;
	}
}
