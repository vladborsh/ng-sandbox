import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from "@angular/forms";
import { numberAlgorithm } from "../../validators/card/number-card/number.algorithm";
import { inputValidatorTypeOf } from "../../validators/card/type.of.validator";
import { inputMinLength } from "../../validators/card/min.length.validator";
import { cvvNumberValidator } from "../../validators/card/cvv/cvv.number.validator";
import { dataTypeValidator } from "../../validators/card/data-finish-card/data.type.validator";
import { dataNumberValidator } from "../../validators/card/data-finish-card/data.min.length.validator";
import { dataMonthValidator } from "../../validators/card/data-finish-card/data.month.validator";
import { dataYearValidator } from "../../validators/card/data-finish-card/data.year.validator";
import {Observable} from "rxjs/internal/Observable";

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
  public cardNumberErrors = {};
  public dateErrors = {};
  public cvvErrors = {};
  public dateSlesh: string = '';
  public numberCardGaps: string = '';
  private onChange: (card: any) => {};
  private onTouch: () => {};
  constructor() { }

  ngOnInit() {
    this.cardForm = new FormGroup({
      numberCard: new FormControl('', [
        Validators.required,
        inputMinLength(16),
        numberAlgorithm,
      ]),

      dataFinishCard: new FormControl('', [
        Validators.required,
        inputMinLength(4),
        dataNumberValidator,
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
      this.cardNumberErrors = this.cardForm.controls['numberCard'].errors;
      this.dateErrors = this.cardForm.controls['dataFinishCard'].errors;
      this.cvvErrors = this.cardForm.controls['cvv'].errors;
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
  getDateSlesh(str: string) {
    this.dateSlesh = str;
    if (this.dateSlesh.length === 2) {
      this.dateSlesh += ' / ';
    } else if((+this.dateSlesh[0] + +this.dateSlesh[1]) === 0) {
      return this.dateSlesh = '';
    } else if((this.dateSlesh[2] + this.dateSlesh[3] + this.dateSlesh[4]) !== ' / ') {
      return this.dateSlesh = '';
    } else if(this.dateSlesh[0] === ' ') {
      return this.dateSlesh = '';
    } else if(this.dateSlesh[5] === ' ' || this.dateSlesh[6] === ' ') {
      return this.dateSlesh = '';
    }
  }
  getNumberCard(str: string) {
    this.numberCardGaps = str;

    if(this.numberCardGaps.length === 4 || this.numberCardGaps.length === 9 || this.numberCardGaps.length === 14) {
      this.numberCardGaps += ' ';
    } else if(this.numberCardGaps[4] !== ' ') {
      return this.numberCardGaps = '';
    } else if(this.numberCardGaps.length > 8 && this.numberCardGaps.length < 12) {
      if(this.numberCardGaps[9] !== ' ') {
        return this.numberCardGaps = '';
      }
    } else if(this.numberCardGaps.length > 13) {
      if(this.numberCardGaps[14] !== ' ') {
        return this.numberCardGaps = '';
      }
    }
  }
}
