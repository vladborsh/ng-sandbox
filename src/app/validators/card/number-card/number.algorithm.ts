import {AbstractControl} from "@angular/forms";

export function numberAlgorithm(input: AbstractControl): {[key: string]: boolean} | null {
  let sum = 0;
  let inputLength = input.value;

  for(let i = 0; i < inputLength.length; i++) {
    let cardNum = parseInt(inputLength[i]);

    if ((inputLength.length - i) % 2 === 0) {
      cardNum = cardNum * 2;

      if (cardNum > 9) {
        cardNum = cardNum - 9;
      }
    }

    sum += cardNum;
  }

  if(sum % 10 !== 0) {
    return {numberAlgorithm: true};
  }
  return null;
}
