import { ActionTypes } from "../constants/actions-type";

// * The reducer always take the initial state and the action

const initialState = {
    products: [],
}
export const productReducer = (state = initialState, 
    // * here we destructure the action to type and payload 
    {type, payload}) => {
        switch (type) {
            case ActionTypes.SET_PROUDCTS:
                return {...state, products: payload};        
            default:
                return state;        
        }
}
export const SelectedProductReducer = (state={}, 
    // * here we destructure the action to type and payload 
    {type, payload}) => {
        switch (type) {
            case ActionTypes.SELECTED_PRODUCT:
                return {...state, ...payload};  
            case ActionTypes.REMOVE_SELECTED_PRODUCT:
                return {};      
            default:
                return state;        
        }
}