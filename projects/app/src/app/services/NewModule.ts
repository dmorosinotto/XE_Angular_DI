import { NgModule } from "@angular/core"; 
import { providerNew } from "./NewService";

@NgModule({
  providers: [providerNew]
})
export class NewModule {
  constructor() {
    console.log("NewModule");
  }
}
