import { Action } from "@ngrx/store";
import { CustomerInterface } from "../../services/pseudo-backend/models/customer.interface";

export enum CustomerActionsType {
  LOAD_CUSTOMER_LIST = ' [Customer] load customer',
  ADD_CUSTOMER = ' [Customer] save customer',
  UPDATE_CUSTOMER = ' [Customer] update customer',
<<<<<<< HEAD
  DELETE_CUSTOMER = ' [Customer] remove customer'
=======
  DELETE_CUSTOMER = ' [Customer] remove customer',
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90
}

export class LoadCustomer implements Action {
  readonly type = CustomerActionsType.LOAD_CUSTOMER_LIST;


  constructor(public payload: CustomerInterface[]) {}
}

export class AddCustomer implements Action {
  readonly type = CustomerActionsType.ADD_CUSTOMER;

  constructor(public payload: CustomerInterface) {}
}

export class UpdateCustomer implements Action {
  readonly type = CustomerActionsType.UPDATE_CUSTOMER;

  constructor(public payload: CustomerInterface) {}
}

export class DeleteCustomer implements Action {
  readonly type = CustomerActionsType.DELETE_CUSTOMER;

  constructor(public payload: CustomerInterface) {}
}

export type CustomerActionsUnion = LoadCustomer | AddCustomer | UpdateCustomer | DeleteCustomer;
