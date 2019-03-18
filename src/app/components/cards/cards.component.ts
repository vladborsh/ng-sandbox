import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from "@angular/forms";
import { numberAlgorithm } from "../../validators/card/number-card/number.algorithm";
import { inputValidatorTypeOf } from "../../validators/card/type.of.validator";
import { inputMinLength } from "../../validators/card/min.length.validator";
import { cvvNumberValidator } from "../../validators/card/cvv/cvv.number.validator";
import { dataTypeValidator } from "../../validators/card/data-finish-card/data.type.validator";
import { dataMonthValidator } from "../../validators/card/data-finish-card/data.month.validator";
import { dataYearValidator } from "../../validators/card/data-finish-card/data.year.validator";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CardsComponent),
    multi: true
  }]
})
export class CardsComponent implements OnInit, OnDestroy, ControlValueAccessor {
  public validCardForm: string;
  public cardForm: FormGroup;
  public _card;
  public cardFormErrors = {};
  private onChange: (card: any) => {};
  private onTouch: () => {};
  constructor() { }

  ngOnInit() {
    this.cardForm = new FormGroup({
      numberCard: new FormControl('', [
        Validators.required,
        inputMinLength(16),
        inputValidatorTypeOf,
        numberAlgorithm,
      ]),

      dataFinishCard: new FormControl('', [
        Validators.required,
        inputMinLength(4),
        dataMonthValidator,
        dataYearValidator,
        dataTypeValidator
      ]),

      cvv: new FormControl('', [
        Validators.required,
        inputMinLength(3),
        inputValidatorTypeOf,
        cvvNumberValidator
      ])
    });

    this.cardForm.statusChanges.subscribe(value => {
      this.validCardForm = value;
      console.log('from validForm', this.validCardForm);
      this.cardFormErrors = this.cardForm;
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
