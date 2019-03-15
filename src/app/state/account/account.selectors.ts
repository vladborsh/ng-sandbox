import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AccountState } from "./account";
import { AppState } from "../../app.state";
import { AccountInterface } from "../../services/pseudo-backend/models/account.interface";

export const selectAccount = createFeatureSelector<AppState, AccountState>(
  'accounts'
);

export const selectAccountList = createSelector(
  selectAccount,
  (state: AccountState) => state.accountList

);

export const selectAccountActive = createSelector(
  selectAccountList,
  (state: AccountInterface[], id) => state.filter(i => i.id === id)
);


