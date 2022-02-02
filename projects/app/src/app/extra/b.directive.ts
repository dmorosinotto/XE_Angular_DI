import {
  Directive,
  Input,
  OnInit,
  Inject,
  Optional,
  SkipSelf,
  Self,
  Host,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '_t-cmp',
  providers: [{ provide: 'CMPSVC', useValue: 'CMPSVC provide in b-dir' }],
})
export class BDirective implements OnInit {
  constructor(@Self() @Inject('CMPSVC') public cmpsvc: string) {
    this.logColor('CTOR' + cmpsvc);
  }

  private _color: string = 'red';
  @Input() set color(value: string) {
    this._color = value;
    this.logColor('SET');
  }
  get color() {
    return this._color;
  }

  @Output() evt = new EventEmitter<string>();
  onClk() {
    this.evt.emit(this._color);
  }

  ngOnInit() {
    this.logColor('ONINIT');
  }

  private logColor(into: string) {
    console.warn(`${this.constructor.name} ${into} color= ${this._color}`);
  }
}
