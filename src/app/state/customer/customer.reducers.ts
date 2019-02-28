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
      }
    case CustomerActionsType.ADD_CUSTOMER:
      return {
        ...state,
        customerList: [...state.customerList, action.payload]
      }
    case CustomerActionsType.DELETE_CUSTOMER:
      return {
        ...state,
        customerList: [...state.customerList.filter(c => c.id !== action.payload.id)]
      }
    case CustomerActionsType.UPDATE_CUSTOMER:
      return {
        ...state,
        customerList: [...state.customerList.map((customer: CustomerInterface) => customer.id === action.payload.id? action.payload: customer)]
      }
    default:
      return state;
  }
}
