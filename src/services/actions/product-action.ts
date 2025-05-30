import { CHANGE_CATEGORY } from "../constants";




export interface IChangeCategoryAction {
    readonly type: typeof CHANGE_CATEGORY;
    readonly category: string;
}

export type TProductAction = IChangeCategoryAction;


export const changeCategoryAction = (category: string): TProductAction => ({
    type: CHANGE_CATEGORY,
    category: category
})