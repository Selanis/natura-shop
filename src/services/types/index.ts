import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { TProductAction } from "../actions/product-action";
import { store } from "../root-reducer";
import { TOrderAction } from "../actions/order-action";


export type TGoodsType = {
    name: string;
    description: string;
    sku: string;
    variants?: {
        sku: string,
        color: string
    }[];
    price: string;
    priceCrossedOut?: string;
    category: string;
    image: string;
    realGroupUrl: string;
    brandName: string;
}

export type TOrderType = {
    sku: string;
    quantity: number;
    price: string;
}


export type TApplicationActions = TProductAction |
    TOrderAction;


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>;
export type AppThunkAction<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>;
