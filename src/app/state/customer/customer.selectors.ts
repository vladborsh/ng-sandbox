import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomerState } from "./customer";
import { AppState } from "../../app.state";
<<<<<<< HEAD
import { CustomerInterface } from "../../services/pseudo-backend/models/customer.interface";
=======
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90

export const selectorCustomer = createFeatureSelector<AppState, CustomerState>('customers');

export const selectorCustomerList = createSelector(
  selectorCustomer,
  (state: CustomerState) => state.customerList
)
<<<<<<< HEAD

export const selectCustomerActive = createSelector(
  selectorCustomerList,
  (state: CustomerInterface[], id) => state.filter(c => c.id === id)
);
=======
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90
