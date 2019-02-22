import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { CustomerInterface } from "./models/customer.interface";
import { AccountInterface } from "./models/account.interface";

@Injectable({
  providedIn: "root"
})
export class PseudoBackendService {
  constructor() {}

  public getCustomers$(): Observable<CustomerInterface[]> {
    return of([
      {
        id: "J-34556",
        name: "Владимир Зайцев",
        phone: "345-456-456",
        address: "Тирасспольская 2",
        relatedAccountId: "M-9056"
      },
      {
        id: "D-11556",
        name: "Александр Наумов",
        phone: "787-451-426",
        address: "Магнитная 10",
        relatedAccountId: "M-9056"
      },
      {
        id: "B-114889",
        name: "Людвиг Борисович",
        phone: "005-118-456",
        address: "Магнитная 123",
        relatedAccountId: "О-1256"
      },
      {
        id: "A-7890056",
        name: "Андрей Арестович",
        phone: "345-678-341",
        address: "Тирасспольская 67",
        relatedAccountId: "M-9056"
      },
      {
        id: "G-311456",
        name: "Аркадий Ватушкович",
        phone: "678-343-456",
        address: "Малая Арнаутская 45",
        relatedAccountId: "О-1256"
      },
      {
        id: "О-183756",
        name: "Семен Слепакович",
        phone: "678-005-118",
        address: "Малая Арнаутская 18",
        relatedAccountId: "L-9446"
      }
    ]);
  }

  public getAccount$(): Observable<AccountInterface[]> {
    return of([
      {
        id: "L-9446",
        amount: 324555,
        bankName: 'Тиньк',
      },
      {
        id: "О-1256",
        amount: 12344455,
        bankName: 'Сбер',
      },
      {
        id: "M-9056",
        amount: 633783,
        bankName: 'Альфа',
      },
    ]);
  }
}
