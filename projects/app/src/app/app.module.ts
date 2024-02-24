import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { provideRoot } from "./services/RootService";
import { providerNew } from "./services/NewService";
import { provideFact } from "./services/factory";
import { NewModule } from "./services/NewModule";
import { RootModule } from "./services/RootModule";
import { providerCust } from "./services/CustService";
import { CustModule } from "./services/CustModule";
import { SubModule } from "./services/SubModule";

import { NComponent } from "./comps/n.component";
import { PComponent } from "./comps/p.component";
import { CComponent } from "./comps/c.component";

import { WComponent } from "./dirs/w.component";
import { WDirective } from "./dirs/w.directive";
import { TComponent } from "./extra/t.component";
import { BDirective } from "./extra/b.directive";
import { DDirective } from "./extra/d.directive";
import { UIComponent } from "./extra/ui.component";
import { LibModule } from "lib";

const COMPS = [NComponent, PComponent, CComponent];

@NgModule({
  imports: [
    BrowserModule,
    LibModule,
    NewModule,
    RootModule,
    // CustModule,
    SubModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ...COMPS,
    WComponent,
    WDirective,
    TComponent,
    BDirective,
    DDirective,
    UIComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: "VService", useValue: { rnd: 123, name: "I WIN" } },
    // provideRoot,
    // providerNew,
    // provideFact,
    // providerCust,
  ],
})
export class AppModule {}
