import {AbstractControl} from "@angular/forms";

export function inputMinLength(inputNumber: number) {
  return (input: AbstractControl): {[key: string]: boolean} | null => {
    if(inputNumber > input.value.length) {
      return {inputMinLength: true};
    }
    return null;
  }
}
