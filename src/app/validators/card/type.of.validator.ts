import {AbstractControl} from "@angular/forms";

export function typeOfValidator(input: AbstractControl): {[key: string]: string} | null {
  if(isNaN(input.value)){
    return {typeOfValidator: 'Type only numbers'}
  }
  return null;
}
