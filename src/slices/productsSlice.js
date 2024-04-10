import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    categories: null,
    product: null
}

const productsSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        setProduct(state, value){
            state.product = value.payload
        },
        setCategories(state, value){
            state.categories = value.payload
        }
    }
})

export const {setProduct, setCategories} = productsSlice.actions

export default productsSlice.reducer