import { Component, OnInit } from "@angular/core";
import { LibService } from "./lib.service";

@Component({
	selector: "lib-comp",
	template: ` <p>Lib works! {{ srv.rnd }}</p> `,
	styles: []
})
export class LibComponent implements OnInit {
	constructor(public srv: LibService) {
		console.log("LibService -> ", srv);
	}

	ngOnInit(): void {}
}
