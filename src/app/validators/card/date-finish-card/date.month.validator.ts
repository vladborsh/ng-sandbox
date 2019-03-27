import { AbstractControl } from "@angular/forms";

export function dateMonthValidator(input: AbstractControl): {[key: string]: string} | null{
  if((input.value[0] + input.value[1]) > 12 || (+input.value[0] + input.value[1]) < 1) {
    return {dateMonthValidator: 'Type the correct month'};
  }
  return null;
}
