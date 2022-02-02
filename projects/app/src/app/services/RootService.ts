import { Injectable, ClassProvider } from "@angular/core"
import { IService, TOKEN } from "./token";

@Injectable()
export class RootService implements IService {
  public rnd = Math.random();
  constructor() {
    console.log("Create RootService", this.rnd);
  }

  public getMsg() {
    return `Hello from RootService ${this.rnd}`; 
  }
  
}

export const provideRoot: ClassProvider = { provide: TOKEN, useClass: RootService }