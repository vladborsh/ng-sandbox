import { AbstractControl } from "@angular/forms";

export function dateYearValidator(input: AbstractControl): {[key: string]: string} | null{
  let date = new Date().getFullYear() + '';
  let myDate = date[2] + date[3];
  let inputDate = input.value[2] + input.value[3];
  if((+myDate + 5) < +inputDate || +inputDate < +myDate) {
    return {dateYearValidator: 'Type the correct year'};
  }
  return null;
}
