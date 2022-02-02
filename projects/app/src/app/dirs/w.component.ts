import {
  Component,
  Input,
  OnInit,
  Inject,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'w-cmp',
  template: `<div [style.--color]="color"> 
            <button (click)="onClk()"> {{this.constructor.name}} </button>
                <pre>{{cmpsvc}}</pre>
            </div>`,
  providers: [{ provide: 'CMPSVC', useValue: 'CMPSVC provide in w-cmp' }],
})
export class WComponent implements OnInit {
  constructor(@Inject('CMPSVC') public cmpsvc: string) {
    this.logColor('CTOR->' + cmpsvc);
  }

  private _color: string = 'blue';
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

  @Output() evt = new EventEmitter<string>();
  onClk() {
    this.evt.emit(this._color);
  }

  private logColor(into: string) {
    console.warn(`${this.constructor.name} ${into} color= ${this._color}`);
  }
}
