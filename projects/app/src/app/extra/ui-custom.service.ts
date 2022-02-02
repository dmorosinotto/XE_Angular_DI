import { Injectable, Input, Inject, Optional, SkipSelf, Self, Host, Output, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { UILogic } from "./ui-logic.service";

@Injectable()
export class UICustomLogic extends UILogic {
	constructor(@Inject("CMPSVC") public override cmpsvc: string) {
		super(cmpsvc);
	}

	override set color(value: string) {
		console.log(`UICustomLogic SET OVVERIDE ${value} -> orange`);
		if (value === "red") {
			super.color = "orange";
		} else super.color = value;
	}
	override get color(): string {
		return super.color;
	}
}
