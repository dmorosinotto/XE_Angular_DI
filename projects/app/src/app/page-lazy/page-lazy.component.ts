import { NgModule, Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

@Component({
	selector: "page-lazy",
	template: ` <p>page-lazy works!</p> `,
	styles: []
})
export class PageLazyComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}

const routes: Routes = [{ path: "", component: PageLazyComponent }];

@NgModule({
	declarations: [PageLazyComponent],
	imports: [CommonModule, RouterModule.forChild(routes)]
})
export class PageLazyModule {}
