import {AbstractControl} from "@angular/forms";

export function dataTypeValidator(input: AbstractControl): {[key: string]: boolean} | null{
  if(isNaN(+input.value[0] + +input.value[1]) || isNaN(+input.value[2] + +input.value[3])) {
    return {dataTypeValidator: true};
  }
  return null;
}
