import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../reducers";
import valueReducer from "../reducers/value";
import cartReducer from "../reducers/cart";

export default configureStore({
    reducer:{
        productData:productsReducer,
        value:valueReducer,
        cartData:cartReducer,
    },
})