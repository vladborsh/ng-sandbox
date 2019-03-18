import {AbstractControl} from "@angular/forms";

export function cvvNumberValidator(input: AbstractControl): {[key: string]: boolean} | null {
  for(let i = 0; i < input.value.length; i++) {
    if(input.value[i] === '.' || input.value[i] === '+' || input.value[i] === '-') {
      return {cvvNumberValidator: true};
    }
  }
  return null;
}
