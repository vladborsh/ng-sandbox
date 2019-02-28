import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomerState } from "./customer";
import { AppState } from "../../app.state";

export const selectorCustomer = createFeatureSelector<AppState, CustomerState>('customers');

export const selectorCustomerList = createSelector(
  selectorCustomer,
  (state: CustomerState) => state.customerList
)
