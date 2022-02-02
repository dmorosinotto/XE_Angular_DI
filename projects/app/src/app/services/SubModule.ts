import { NgModule } from "@angular/core"; 
import { providerSub } from "./SubService";

@NgModule({
  providers: [providerSub]
})
export class SubModule {
  constructor() {
    console.log("SubModule");
  }
}
