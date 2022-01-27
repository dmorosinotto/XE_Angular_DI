import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class LibService {
	public rnd = Math.random();
	constructor() {
		console.count(`Created ${(this as Object).constructor.name}, rnd=${this.rnd}`);
	}
}
