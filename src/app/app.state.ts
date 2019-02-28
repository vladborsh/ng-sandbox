import { AccountState } from "./state/account/account";
import { CustomerState } from "./state/customer/customer";
import { ActionReducerMap } from "@ngrx/store";
import { accountReducer } from "./state/account/account.reducers";
import { customerReducer } from "./state/customer/customer.reducers";

export interface AppState {
  accounts: AccountState;
  customers: CustomerState;
}

export const reducer: ActionReducerMap<AppState> = {
  accounts: accountReducer,
  customers: customerReducer
}
