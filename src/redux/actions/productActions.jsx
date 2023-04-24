import {ActionTypes} from '../constants/actions-type'

export const SetProducts = (products)=>{
    return{
        type: ActionTypes.SET_PROUDCTS,
        payload: products,
    }
}

export const SelectedProduct = (product)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export const removeSelectedProduct = () => {
    return {
      type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
  };
  