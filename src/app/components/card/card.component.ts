import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from "@angular/forms";
import { numberAlgorithmValidator } from "../../validators/card/number-card/number.algorithm.validator";
import { inputMinLength } from "../../validators/card/min.length.validator";
import { cvvNumberValidator } from "../../validators/card/cvv/cvv.number.validator";
import { dateMonthValidator } from "../../validators/card/date-finish-card/date.month.validator";
import { dateYearValidator } from "../../validators/card/date-finish-card/date.year.validator";
import { typeOfValidator } from "../../validators/card/type.of.validator";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CardComponent),
    multi: true
  }]
})
export class CardComponent implements OnInit, OnDestroy, ControlValueAccessor {
  public cardForm: FormGroup;
  public _card;
  private onChange: (card: any) => {};
  private onTouch: () => {};
  constructor() { }

  ngOnInit() {
    this.cardForm = new FormGroup({
      numberCard: new FormControl('', [
        Validators.required,
        inputMinLength(16),
        typeOfValidator,
        numberAlgorithmValidator
      ]),

      dateFinishCard: new FormControl('', [
        Validators.required,
        inputMinLength(4),
        typeOfValidator,
        dateMonthValidator,
        dateYearValidator
      ]),

      cvv: new FormControl('', [
        Validators.required,
        inputMinLength(3),
        typeOfValidator,
        cvvNumberValidator
      ])
    });

  }

  submit() {
    console.log(this.cardForm.value);
    this.writeValue(this._card);
  }

  writeValue(card: any): void {
    this._card = card;
    if(this._card) {
      this.onChange(this._card);
      this.onTouch();
    }
  };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  };

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  };

  ngOnDestroy() {

  }
}
