import { InjectionToken } from "@angular/core";

export const TOKEN = new InjectionToken<IService>("IService instance" 
, { providedIn: "root", 
    factory: ()=> ({
      rnd: 42,
      getMsg: ()=>"Default providedIn root -> 42"
    }) 
  }
)


export interface IService {
  rnd: number
  getMsg(): string
}