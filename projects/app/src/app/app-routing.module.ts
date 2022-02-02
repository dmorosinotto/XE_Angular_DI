import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LibComponent, LibModule } from "lib";
import { PageLoginComponent } from "./page-login/page-login.component";
import { UseTokenComponent, UseTokenModule } from "./providers/use-token.component";

const routes: Routes = [
	{ path: "prov", component: UseTokenComponent },
	{ path: "lib", component: LibComponent },
	{ path: "login", component: PageLoginComponent },
	{ path: "about", loadChildren: () => import("./page-about/page-about.module").then(m => m.PageAboutModule) },
	{ path: "lazy", loadChildren: () => import("./page-lazy/page-lazy.component").then(m => m.PageLazyModule) }
];

@NgModule({
	declarations: [PageLoginComponent],
	imports: [RouterModule.forRoot(routes), LibModule, UseTokenModule],
	exports: [RouterModule]
})
export class AppRoutingModule {}
