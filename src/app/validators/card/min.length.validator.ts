import { AbstractControl } from "@angular/forms";

export function inputMinLength(inputNumber: number) {
  return (input: AbstractControl): {[key: string]: string} | null => {
    if(inputNumber > input.value.length) {
      return {inputMinLength: `Type ${inputNumber} numbers`};
    }
    return null;
  }
}
