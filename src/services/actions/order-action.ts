import { ADD_TO_ORDER, DECREASE_ITEM_ORDER, DELETE_FROM_ORDER, INCREASE_ITEM_ORDER } from "../constants";



interface IAddToOrderAction {
    readonly type: typeof ADD_TO_ORDER;
    readonly sku: string;
    readonly price: string;
}

interface IDeleteFromOrderAction {
    readonly type: typeof DELETE_FROM_ORDER;
    readonly sku: string;
}

interface IIncreaseItemOrderAction {
    readonly type: typeof INCREASE_ITEM_ORDER;
    readonly sku: string;
}

interface IDecreaseItemOrderAction {
    readonly type: typeof DECREASE_ITEM_ORDER;
    readonly sku: string;
}


export type TOrderAction = IAddToOrderAction |
    IDeleteFromOrderAction |
    IIncreaseItemOrderAction |
    IDecreaseItemOrderAction;


export const addToOrderAction = (sku: string, price: string): TOrderAction => ({
    type: ADD_TO_ORDER,
    sku: sku,
    price: price
})

export const deleteFromOrderAction = (sku: string): TOrderAction => ({
    type: DELETE_FROM_ORDER,
    sku: sku
})

export const increaseItemOrderAction = (sku: string): TOrderAction => ({
    type: INCREASE_ITEM_ORDER,
    sku: sku
})

export const decreaseItemOrderAction = (sku: string): TOrderAction => ({
    type: DECREASE_ITEM_ORDER,
    sku: sku
})