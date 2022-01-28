import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PageAboutRoutingModule } from "./page-about-routing.module";
import { PageAboutComponent } from "./page-about.component";

@NgModule({
	declarations: [PageAboutComponent],
	imports: [CommonModule, PageAboutRoutingModule]
})
export class PageAboutModule {}
