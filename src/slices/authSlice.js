import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoggedin: false,
    loading: false
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setisLoggedIn(state, value){
            state.isLoggedin = value.payload
        },
        setLoading(state, value){
            state.loading = value.payload
        }
    }
})

export const {setisLoggedIn, setLoading} = authSlice.actions

export default authSlice.reducer