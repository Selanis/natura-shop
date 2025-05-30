import { TOrderAction } from "../actions/order-action";
import { ADD_TO_ORDER, DECREASE_ITEM_ORDER, DELETE_FROM_ORDER, INCREASE_ITEM_ORDER } from "../constants";
import { TOrderType } from "../types";


interface IOrderInitialState {
    order: Array<TOrderType>
}

const initialState = {
    order: []
}

export const orderReducer = (state=initialState, action: TOrderAction): IOrderInitialState => {
    switch (action.type) {
        case ADD_TO_ORDER: {
            return {
                ...state,
                order: [
                    ...state.order,
                    {
                        sku: action.sku,
                        quantity: 1,
                        price: action.price
                    }
                ]
            }
        }

        case DELETE_FROM_ORDER: {
            return {
                ...state,
                order: state.order.filter((item: TOrderType) => item.sku !== action.sku)
            }
        }

        case INCREASE_ITEM_ORDER: {
            return {
                ...state,
                order: state.order.map((item: TOrderType) => 
                    item.sku === action.sku ? {
                        ...item, 
                        quantity: item.quantity + 1
                    } : {...item}
                )
            }
        }

        case DECREASE_ITEM_ORDER: {
            return {
                ...state,
                order: state.order.map((item: TOrderType) => 
                    item.sku === action.sku ? {
                        ...item, 
                        quantity: item.quantity - 1
                    } : {...item}
                )
            }
        }

        default: {
            return state
        }
    }
}