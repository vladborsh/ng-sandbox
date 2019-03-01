import { Action } from "@ngrx/store";
import { AccountInterface } from "../../services/pseudo-backend/models/account.interface";

export enum AccountActionsType {
  LOAD_ACCOUNT_LIST = '[Account] load account',
  ADD_ACCOUNT = '[Account] save account',
  UPDATE_ACCOUNT = '[Account] update account',
  DELETE_ACCOUNT = '[Account] delete account',
}

export class LoadAccount implements Action {
  readonly type = AccountActionsType.LOAD_ACCOUNT_LIST;

  constructor(public payload: AccountInterface[]) {}
}

export class AddAccount implements Action {
  readonly type = AccountActionsType.ADD_ACCOUNT;

  constructor(public payload: AccountInterface) {}
}

export class UpdateAccount implements Action {
  readonly type = AccountActionsType.UPDATE_ACCOUNT;

  constructor(public payload: AccountInterface) {}
}

export class DeleteAccount implements Action {
  readonly type = AccountActionsType.DELETE_ACCOUNT;

  constructor(public payload: AccountInterface) {}
}

export type AccountActionsUnion = LoadAccount | AddAccount | UpdateAccount | DeleteAccount;
