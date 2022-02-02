import { Component, Inject, Optional, VERSION } from "@angular/core";
import { CoreService } from "./services/CoreService";
import { SubService } from "./services/SubService";
import { IService, TOKEN } from "./services/token";
import { LibService } from "lib";

@Component({
	selector: "app-root",
	template: `
		<!--The content below is only a placeholder and can be replaced.-->
		<div style="text-align:center" class="content">
			<h1>Welcome to {{ title }}!</h1>
			<span style="display: block">{{ lib.rnd }} app is running!</span>
			<img
				width="300"
				alt="Angular Logo"
				src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="
			/>
		</div>

		<nav>
			<a routerLink="lib">Lib</a> | <a routerLink="login">Login</a> | <a routerLink="lazy">Lazy</a> |
			<a routerLink="about">About</a> | <a routerLink="prov">Providers</a>
		</nav>
		<router-outlet></router-outlet>

		<aside class="main">
			<p>
				Edit <code>app.module.ts</code> to experiment with DI providers and then check message in Console for
				service use!
				<button (click)="greet()">Greet</button>
			</p>
			<hr />
			<n-cmp><c-cmp color="white"></c-cmp></n-cmp>
			<w-cmp w-dir [color]="'green'" (evt)="show($event)"></w-cmp>
			<!-- <t-cmp color="cyan" (evt)="show($event)"></t-cmp> -->
			<!-- <ui-cmp color="yellow" (evt)="show($event)"></ui-cmp> -->
		</aside>
	`,
	styles: [".main { color: red }"]
})
export class AppComponent {
	title = "XE Angular DI " + VERSION.major;

	//constructor(@Inject(TOKEN) private svc: IService , @Inject(CoreService) core: SubService) {
	constructor(
		@Inject(TOKEN) private svc: IService,
		core: CoreService /*SubService*/,
		@Optional() public lib: LibService
	) {
		console.log(
			`AppComponent TOKEN -> ${svc.getMsg()} \n CORE => ${core.getMsg()} INSTANCEOF ${core.constructor.name}`
		);
		console.log("SUBX", (core as any)?.SUBX ?? "NO SUBSERVICE!");
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
