import data from '../../assets/data.json'
import { TProductAction } from '../actions/product-action';
import { CHANGE_CATEGORY } from '../constants';
import { TGoodsType } from '../types'

interface IProductInitialState {
    data: {
        products: Array<TGoodsType>
    };
    category: string;
}

const initialState = {
    data: data,
    category: 'makeup'
}

export const productReducer = (state=initialState, action: TProductAction): IProductInitialState => {
    switch (action.type) {
        case CHANGE_CATEGORY: {
            return {
                ...state,
                category: action.category
            }
        }

        default: {
            return state
        }
    }
}