import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [{ provide: "VService", useValue: { rnd: 123, name: "I WIN" } }],
	bootstrap: [AppComponent]
})
export class AppModule {}
