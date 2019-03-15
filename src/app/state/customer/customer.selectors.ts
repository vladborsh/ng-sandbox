import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomerState } from "./customer";
import { AppState } from "../../app.state";
import { CustomerInterface } from "../../services/pseudo-backend/models/customer.interface";


export const selectorCustomer = createFeatureSelector<AppState, CustomerState>('customers');

export const selectorCustomerList = createSelector(
  selectorCustomer,
  (state: CustomerState) => state.customerList
)

export const selectCustomerActive = createSelector(
  selectorCustomerList,
  (state: CustomerInterface[], id) => state.filter(c => c.id === id)
);
