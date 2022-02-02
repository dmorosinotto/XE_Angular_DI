import { Directive, Input, OnInit, Inject } from '@angular/core';

@Directive({
  selector: '[w-dir]',
  providers: [{ provide: 'CMPSVC', useValue: 'CMPSVC provide in w-dir' }],
})
export class WDirective implements OnInit {
  constructor(@Inject('CMPSVC') public cmpsvc: string) {
    this.logColor('CTOR :: ' + cmpsvc);
  }

  private _color: string = 'red';
  @Input() set color(value: string) {
    this._color = value;
    this.logColor('SET');
  }
  get color() {
    return this._color;
  }

  ngOnInit() {
    this.logColor('ONINIT');
  }

  private logColor(into: string) {
    console.error(`${this.constructor.name} ${into} color= ${this._color}`);
  }
}
