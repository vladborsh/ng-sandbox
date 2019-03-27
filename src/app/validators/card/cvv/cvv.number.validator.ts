import { AbstractControl } from "@angular/forms";

export function cvvNumberValidator(input: AbstractControl): {[key: string]: string} | null {
  for(let i = 0; i < input.value.length; i++) {
    if(input.value[i] === '.' || input.value[i] === '+' || input.value[i] === '-') {
      return {cvvNumberValidator: 'Type only integer'};
    } else if(+input.value === 0) {
      return {cvvNumberValidator: 'The input is incorrect'};
    }
  }
  return null;
}
