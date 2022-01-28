import { Injectable, InjectionToken, type Provider } from "@angular/core";

export interface IService {
	rnd: number;
	name?: string;
}
abstract class BaseIService implements IService {
	rnd: number = Math.random();
	constructor() {
		console.log(print(this, "Created"));
	}
}

export function print(obj: IService, prefix = "") {
	return [prefix || new Date().toISOString(), obj?.name ?? (obj as Object).constructor.name, obj.rnd].toString();
}

@Injectable()
export class Service extends BaseIService {}

@Injectable()
export class ExplicitClass extends BaseIService {}

@Injectable()
export class Alias extends BaseIService {}

export const TService = new InjectionToken<IService>("IService");

export type T = number;
const options = { providedIn: "root", factory: () => 42 } as const;
export const Token = new InjectionToken<T>("ANSWER", options);

export const PROVIDERS: Provider[] = [
	Service,
	{ provide: ExplicitClass, useClass: ExplicitClass },
	{ provide: Alias, useExisting: ExplicitClass },
	{ provide: "VService", useValue: { rnd: 42 } as IService },
	{
		provide: TService,
		useFactory: () =>
			({
				rnd: Math.random(),
				name: "Factory"
			} as IService)
	},
	{ provide: TService, useFactory: (val: any) => ({ ...val, name: "Factory with deps" }), deps: ["VService"] }
];
