import { Injectable } from "@angular/core"

export interface ICoreService {
  getMsg(): string
}

@Injectable({providedIn: "root"})
export class CoreService implements ICoreService {
  public rnd = Math.random();
  constructor() {
    console.log("Create CoreService", this.rnd);
  }

  public getMsg() {
    return `Hello CoreService providedIn root ${this.rnd}`; 
  } 
}