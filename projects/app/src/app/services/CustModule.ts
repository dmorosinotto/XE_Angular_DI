import { NgModule } from "@angular/core"; 
import { providerCust } from "./CustService";

@NgModule({
  providers: [providerCust]
})
export class CustModule {
  constructor() {
    console.log("CustModule");
  }
}
