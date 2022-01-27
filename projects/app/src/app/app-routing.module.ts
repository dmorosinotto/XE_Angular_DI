import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LibComponent, LibModule } from "lib";

const routes: Routes = [{ path: "", component: LibComponent }];

@NgModule({
	imports: [RouterModule.forRoot(routes), LibModule],
	exports: [RouterModule]
})
export class AppRoutingModule {}
