import { CommonModule } from "@angular/common";
import { NgModule, Component, OnInit, Inject } from "@angular/core";
import { PROVIDERS, Service, Alias, ExplicitClass, TService, IService, Token } from "./providers.service";

@Component({
	selector: "cmp-use-token",
	template: `
		<p>use-token works! <</p>
		<pre>
value = {{ value | json }}
factory = {{ factory | json }}
</pre>
	`
	//, providers: PROVIDERS, //<-- IF I PUT PROVIDERS HERE THEY HAVE LOCAL SCOPE - AND SHARE COMP LIFECICLE -> ngOnDestroy()
})
export class UseTokenComponent implements OnInit {
	constructor(
		public srv: Service,
		public explicit: ExplicitClass,
		public alias: Alias,
		@Inject("VService") public value: IService,
		@Inject(TService) public factory: IService,
		@Inject(Token) public token: any
	) {
		console.dir({ srv, explicit, alias, value, factory, token });
	}

	ngOnInit(): void {}
}

@NgModule({
	providers: PROVIDERS, //<-- PROVIDERS DECLARED AT EAGER @NgModel -> FLATTED TO root LEVEL
	imports: [CommonModule],
	exports: [UseTokenComponent],
	declarations: [UseTokenComponent]
})
export class UseTokenModule {}
