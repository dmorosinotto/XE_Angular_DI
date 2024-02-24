import { NgModule, Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router, RouterModule, Routes } from "@angular/router";

@Component({
  selector: "page-lazy",
  template: ` <p>page-lazy works!</p>
    <pre>PARAMS={{ route.snapshot.params | json }}</pre>
    <button (click)="r.navigate(['login'])">GOTO LOGIN</button>`,
  styles: [],
})
export class PageLazyComponent implements OnInit {
  constructor(public route: ActivatedRoute, public r: Router) {
    console.log("PageLazyComponent id=", route.snapshot.paramMap.get("id"));
    // r.navigate(["../../login"], {relativeTo: route })
    // route.paramMap.subscribe((params) => {
    //   console.log("PageLazyComponent paramMap=", params.get("id"));
    // });
  }

  ngOnInit(): void {}
}

const routes: Routes = [
  { path: "", redirectTo: "load", pathMatch: "full" },
  { path: "load", component: PageLazyComponent },
  { path: "with/:id/:pippo/:pluto", component: PageLazyComponent },
  { path: "**", redirectTo: "with/NOTFOUND" },
];

@NgModule({
  declarations: [PageLazyComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PageLazyModule {}
