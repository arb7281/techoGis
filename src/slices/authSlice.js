import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    signupData: null,
    isLoggedin: false
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setSignupData(state, value){
            state.signupData = value.payload
        },
        setisLoggedIn(state, value){
            state.isLoggedin = value.payload
        }
    }
})

export const {setSignupData, setisLoggedIn} = authSlice.actions

export default authSlice.reducer