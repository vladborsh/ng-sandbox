import { Injectable } from '@angular/core';
import { PseudoBackendService } from "../pseudo-backend/pseudo-backend.service";
import { AppState } from "../../app.state";
<<<<<<< HEAD
import { Store } from "@ngrx/store";
import {
  AddCustomer,
  LoadCustomer,
  DeleteCustomer,
  UpdateCustomer
} from "../../state/customer/customer.actions";
import { CustomerInterface } from "../pseudo-backend/models/customer.interface";
import { Observable } from "rxjs/internal/Observable";
import { selectorCustomerList } from "../../state/customer/customer.selectors";
import { filter, switchMapTo, take } from "rxjs/operators";
=======
import { select, Store } from "@ngrx/store";
import { AddCustomer, LoadCustomer, DeleteCustomer, UpdateCustomer } from "../../state/customer/customer.actions";
import { CustomerInterface } from "../pseudo-backend/models/customer.interface";
import { Observable } from "rxjs/internal/Observable";
import { selectorCustomerList } from "../../state/customer/customer.selectors";
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private pseudoService: PseudoBackendService, private store$: Store<AppState>) { }

  public getAllCustomer$(): Observable<CustomerInterface[]> {
<<<<<<< HEAD
    const checkStoreCustomers$ = this.store$.select(selectorCustomerList);

    checkStoreCustomers$.pipe(
      take(1),
      filter((c: CustomerInterface[]) => !c.length),
      switchMapTo(this.pseudoService.getCustomers$())
    ).subscribe(value => this.store$.dispatch(new LoadCustomer(value)));

    return checkStoreCustomers$;
  }

=======
    this.pseudoService.getCustomers$().subscribe(value =>
      this.store$.dispatch(new LoadCustomer(value))
    );

    return this.store$.pipe(select(selectorCustomerList));
  }
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90
  public AddCustomer(customer: CustomerInterface): void {
    this.store$.dispatch(new AddCustomer(customer));
  }
  public DeletetCustomer(customer: CustomerInterface): void {
    this.store$.dispatch(new DeleteCustomer(customer));
  }
  public UpdateCustomer(customer: CustomerInterface): void {
    this.store$.dispatch(new UpdateCustomer(customer));
  }
}
