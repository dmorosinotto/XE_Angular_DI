import { Component, Inject, Optional, VERSION } from "@angular/core";
import { CoreService } from "./services/CoreService";
import { SubService, isSub } from "./services/SubService";
import { IService, TOKEN } from "./services/token";
import { LibService } from "lib";
import { CustService } from "./services/CustService";

@Component({
  selector: "app-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>Welcome to {{ title }}!</h1>
      <span style="display: block">{{ lib.rnd }} app is running!</span>
    </div>
    <lib-comp></lib-comp>
    <nav>
      <a routerLink="lib">Lib</a> | <a routerLink="prov">Providers</a> |
      <a routerLink="login">Login</a> | <a routerLink="about">About</a> |
      <a routerLink="lazy">Lazy</a> |
      <a routerLink="lazy/with/123">Lazy 123</a> |
      <a routerLink="lazy/with/42">Lazy 42</a> |
      <a routerLink="lazy/invalid">Lazy INVALID</a> |
    </nav>
    <router-outlet></router-outlet>

    <aside class="main">
      <p>
        Edit <code>app.module.ts</code> to experiment with DI providers and then
        check message in Console for service use!
        <button (click)="greet()">Greet</button>
      </p>
      <hr />
      <n-cmp>
        <h1>ciao</h1>
        <c-cmp color="white"></c-cmp>
      </n-cmp>
      <!-- <w-cmp w-dir [color]="'green'" (evt)="show($event)"></w-cmp> -->
    </aside>
  `, // <t-cmp color="cyan" (evt)="show($event)"></t-cmp> <ui-cmp color="yellow" (evt)="show($event)"></ui-cmp>
  styles: [".main { color: red }"],
})
export class AppComponent {
  title = "XE Angular DI " + VERSION.major;

  //constructor(@Inject(TOKEN) private svc: IService , @Inject(CoreService) core: SubService) {
  constructor(
    @Inject(TOKEN) private svc: IService,
    core: CoreService /*SubService*/,
    @Optional() cust: CustService | null,
    public lib: LibService
  ) {
    console.log(
      `AppComponent TOKEN -> ${svc.getMsg()} 
	   CORE => ${core.getMsg()} INSTANCEOF ${core.constructor.name}`
    );
    if (isSub(core)) {
      console.warn("SUBX", core.SUBX);
    }
    console.log("SUBX", (core as any)?.SUBX ?? "NO SUBSERVICE!");
    console.warn("CUSTOM", cust?.rnd);
  }

  // constructor(@Inject(TOKEN) private svc: IService, public lib: LibService) {
  //   console.log(`AppComponent TOKEN -> ${svc.rnd} ${svc.getMsg()}`);
  //   console.log("APP CTOR ->", lib.rnd);
  // }

  greet() {
    alert(this.svc.getMsg());
  }

  show(e: any) {
    alert(e);
  }
}
