import { AbstractControl } from "@angular/forms";

export function dataMonthValidator(input: AbstractControl): {[key: string]: boolean} | null{
  if((input.value[0] + input.value[1]) > 12) {
    return {dataMonthValidator: true};
  }
  return null;
}
