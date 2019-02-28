import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AccountState } from "./account";
import { AppState } from "../../app.state";

export const selectAccount = createFeatureSelector<AppState, AccountState>(
  'accounts'
);

export const selectAccountList = createSelector(
  selectAccount,
  (state: AccountState) => state.accountList
)
