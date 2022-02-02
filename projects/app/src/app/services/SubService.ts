import { Injectable, ClassProvider } from "@angular/core";
import { CoreService } from "./CoreService";

@Injectable()
export class SubService extends CoreService {
	constructor() {
		super();
		console.log("Create SubService", this.rnd);
	}

	public override getMsg() {
		return `Hello from SubService ${this.rnd}`;
	}

	public SUBX = Math.random();
}

export const providerSub: ClassProvider = {
	provide: CoreService,
	useClass: SubService
};
