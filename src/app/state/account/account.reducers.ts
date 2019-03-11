import { AccountActionsType, AccountActionsUnion } from "./account.actions";
import { AccountState } from "./account";
import { AccountInterface } from "../../services/pseudo-backend/models/account.interface";

export const initialeState: AccountState = {
  accountList: []
};

export function accountReducer(state: AccountState = initialeState, action: AccountActionsUnion): AccountState {
  switch (action.type) {
    case AccountActionsType.LOAD_ACCOUNT_LIST:
      return {
        ...state,
        accountList: [...action.payload]
      };
    case AccountActionsType.ADD_ACCOUNT:
      return {
        ...state,
        accountList: [...state.accountList, action.payload]
      };
    case AccountActionsType.DELETE_ACCOUNT:
      return {
        ...state,
        accountList: [...state.accountList.filter(a => a.id !== action.payload.id)]
      };
    case AccountActionsType.UPDATE_ACCOUNT:
      return {
        ...state,
        accountList: [...state.accountList.map((account: AccountInterface) => account.id === action.payload.id? action.payload: account)]
      };
    default:
      return state;
  }
}
