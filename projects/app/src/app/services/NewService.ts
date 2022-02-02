import { Injectable, ClassProvider } from "@angular/core"
import { IService, TOKEN } from "./token";

@Injectable()
export class NewService implements IService {
  public rnd = Math.random();
  constructor() {
    console.log("Create NewService", this.rnd);
  }

  public getMsg() {
    return `Hello from NewService ${this.rnd}`; 
  }
  
}

export const providerNew: ClassProvider = { provide: TOKEN, useClass: NewService }