import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AccountState } from "./account";
import { AppState } from "../../app.state";
<<<<<<< HEAD
import { AccountInterface } from "../../services/pseudo-backend/models/account.interface";
=======
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90

export const selectAccount = createFeatureSelector<AppState, AccountState>(
  'accounts'
);

export const selectAccountList = createSelector(
  selectAccount,
  (state: AccountState) => state.accountList
<<<<<<< HEAD
);

export const selectAccountActive = createSelector(
  selectAccountList,
  (state: AccountInterface[], id) => state.filter(i => i.id === id)
);

=======
)
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90
