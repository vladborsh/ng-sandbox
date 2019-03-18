import {AbstractControl} from "@angular/forms";

export function inputValidatorTypeOf(input: AbstractControl): {[key: string]: boolean} | null {
  if(isNaN(input.value) || (input.value * 1 === 0) || (input.value[0] === ' ')) {
    return {inputValidatorTypeOf: true};
  }
  return null;
}
