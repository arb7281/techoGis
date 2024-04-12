import {combineReducers} from "@reduxjs/toolkit"

import productsReducer from "../slices/productsSlice"
import authReducer from "../slices/authSlice"
import filterReducer from "../slices/filterSlice"

const rootReducer = combineReducers({
    products: productsReducer,
    auth:authReducer,
    filter: filterReducer
})

export default rootReducer