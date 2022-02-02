import { inject, FactoryProvider } from "@angular/core";
import { TOKEN, IService } from "./token";


export function factService(rnd:number): IService {
  return { rnd, getMsg: ()=>"FactoryService " + rnd}
}

export const provideFact = [
  { provide:'RND', useValue: Math.random() },
  { provide: TOKEN, useFactory: factService, deps:['RND']},
  // { provide: TOKEN, useFactory: ()=> ({ rnd: 123, getMsg: ()=>"CIAO" })}
]