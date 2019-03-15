import { CustomerState } from "./customer";
import { CustomerActionsType, CustomerActionsUnion } from "./customer.actions";
import { CustomerInterface } from "../../services/pseudo-backend/models/customer.interface";

export const initialeState: CustomerState = {
  customerList: []
}

export function customerReducer(state: CustomerState = initialeState, action: CustomerActionsUnion): CustomerState {
  switch (action.type) {
    case CustomerActionsType.LOAD_CUSTOMER_LIST:
      return {
        ...state,
        customerList: [...action.payload]
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90
    case CustomerActionsType.ADD_CUSTOMER:
      return {
        ...state,
        customerList: [...state.customerList, action.payload]
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90
    case CustomerActionsType.DELETE_CUSTOMER:
      return {
        ...state,
        customerList: [...state.customerList.filter(c => c.id !== action.payload.id)]
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90
    case CustomerActionsType.UPDATE_CUSTOMER:
      return {
        ...state,
        customerList: [...state.customerList.map((customer: CustomerInterface) => customer.id === action.payload.id? action.payload: customer)]
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 1664a2395254fdaa1b7e5bf011212ea831db4d90
    default:
      return state;
  }
}
