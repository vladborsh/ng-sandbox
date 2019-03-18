import {AbstractControl} from "@angular/forms";

export function dataNumberValidator(input: AbstractControl): {[key: string]: boolean} | null{
   if(input.value.length !== 7) {
    return {dataNumberValidator: true};
  }
  return null;
}
