import { NgModule } from "@angular/core"; 
import { provideRoot } from "./RootService";

@NgModule({
  providers: [provideRoot]
})
export class RootModule {
  constructor() {
    console.log("RootModule");
  }
}
