import { AccountActionsType, AccountActionsUnion } from "./account.actions";
import { AccountState } from "./account";
import { AccountInterface } from "../../services/pseudo-backend/models/account.interface";

export const initialeState: AccountState = {
  accountList: []
<<<<<<< HEAD
};
=======
}
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90

export function accountReducer(state: AccountState = initialeState, action: AccountActionsUnion): AccountState {
  switch (action.type) {
    case AccountActionsType.LOAD_ACCOUNT_LIST:
      return {
        ...state,
        accountList: [...action.payload]
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90
    case AccountActionsType.ADD_ACCOUNT:
      return {
        ...state,
        accountList: [...state.accountList, action.payload]
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90
    case AccountActionsType.DELETE_ACCOUNT:
      return {
        ...state,
        accountList: [...state.accountList.filter(a => a.id !== action.payload.id)]
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90
    case AccountActionsType.UPDATE_ACCOUNT:
      return {
        ...state,
        accountList: [...state.accountList.map((account: AccountInterface) => account.id === action.payload.id? action.payload: account)]
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90
    default:
      return state;
  }
}
