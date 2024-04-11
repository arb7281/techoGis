import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    categories: null,
    product: null,
    loading: false
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
        },
        setLoading(state, value){
            state.loading = value.payload
        }

    }
})

export const {setProduct, setCategories, setLoading} = productsSlice.actions

export default productsSlice.reducer