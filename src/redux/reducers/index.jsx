import { combineReducers } from "redux";
import { SelectedProductReducer, productReducer } from "./productReducer";

// *  we use index.js inside thr reducers folder so we can combine all our reducers into one place together

export const reducers = combineReducers({
    allProducts: productReducer,
    product: SelectedProductReducer,
});


