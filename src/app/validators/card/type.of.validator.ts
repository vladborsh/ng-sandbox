import {AbstractControl} from "@angular/forms";

export function inputValidatorTypeOf(input: AbstractControl): {[key: string]: boolean} | null {
  if(isNaN(+input.value)) {
    return {inputValidatorTypeOf: true};
  }
  return null;
}
