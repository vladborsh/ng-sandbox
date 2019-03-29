import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import { FormControl } from "@angular/forms";
import {filter, map, startWith, takeUntil} from "rxjs/operators";
import { Observable } from "rxjs/internal/Observable";
import { Subject } from "rxjs/internal/Subject";

@Component({
  selector: 'form-control-errors',
  templateUrl: './form-control-errors.component.html',
  styleUrls: ['./form-control-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlErrorsComponent implements OnInit, OnDestroy {
  @Input() control: FormControl;
  public controlErrors$: Observable<string[]>;
  private ngUnsubscribe: Subject<boolean> = new Subject();
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    const errors$: Observable<string> = this.control.statusChanges
      .pipe(
        filter((invalid: string) => invalid !== 'VALID' &&  !!(Object.keys(this.control.errors).length))
      );
    this.controlErrors$ = errors$
      .pipe(
        startWith([]),
        map(() => {
          return Object.keys(this.control.errors)
            .filter((errorKey: string) => errorKey !== 'required')
            .map((errorKey: string) => this.control.errors[errorKey]);
        }),
        takeUntil(this.ngUnsubscribe)
      );

    this.controlErrors$.subscribe(() => {
      this.cd.markForCheck();
      console.log(this.control.invalid);
    })
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

