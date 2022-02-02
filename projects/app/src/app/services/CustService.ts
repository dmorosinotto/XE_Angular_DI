import { Injectable, ClassProvider } from "@angular/core";
import { CoreService } from "./CoreService";

@Injectable()
export class CustService extends CoreService {
	constructor() {
		super();
		console.log("Create CustService", this.rnd);
	}

	public override getMsg() {
		return `Hello from CustService ${this.rnd}`;
	}
}

export const providerCust: ClassProvider = { provide: CoreService, useClass: CustService };
