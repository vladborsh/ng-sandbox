import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { FormControl } from "@angular/forms";
import { filter, map } from "rxjs/operators";
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: 'form-control-errors',
  templateUrl: './form-control-errors.component.html',
  styleUrls: ['./form-control-errors.component.scss']
})
export class FormControlErrorsComponent implements OnInit, OnDestroy {
  @Input() control: FormControl;
  public controlErrors$: Observable<any>;
  public ar: string[] = [];
  constructor() { }

  ngOnInit() {
     const errors$: Observable<any> = this.control.statusChanges
      .pipe(
        filter((invalid: string) => invalid !== 'VALID' && !!(Object.keys(this.control.errors).length)),
      );

    this.controlErrors$ = errors$
      .pipe(
        map((str: string) => {
          this.ar = Object.keys(this.control.errors)
            .filter((errorKey: string) => errorKey !== 'required')
            .map((errorKey: string) => this.control.errors[errorKey]);
          return str;
        })
      );
    this.controlErrors$.subscribe(() => this.control);
  }

  ngOnDestroy() {
    this.controlErrors$.forEach(s => s.unsubscribe);
  }
}
