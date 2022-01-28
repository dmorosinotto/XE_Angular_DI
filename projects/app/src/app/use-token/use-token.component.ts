import { CommonModule } from "@angular/common";
import { NgModule, Component, OnInit, Inject } from "@angular/core";
import { PROVIDERS, Service, Alias, ExplicitClass, TService, IService } from "../providers/providers.service";

@Component({
	selector: "cmp-use-token",
	template: `
		<p>use-token works! <</p>
		<pre>
value = {{ value | json }}
factory = {{ factory | json }}
</pre>
	`,
	styles: []
})
export class UseTokenComponent implements OnInit {
	constructor(
		public srv: Service,
		public explicit: ExplicitClass,
		public alias: Alias,
		@Inject("VService") public value: IService,
		@Inject(TService) public factory: IService
	) {
		console.dir({ srv, explicit, alias, value, factory });
	}

	ngOnInit(): void {}
}

@NgModule({
	providers: PROVIDERS,
	imports: [CommonModule],
	exports: [UseTokenComponent],
	declarations: [UseTokenComponent]
})
export class UseTokenModule {}
