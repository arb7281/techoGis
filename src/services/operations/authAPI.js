import { authEndpoint } from "../apis";
import { apiConnector } from "../apiConnector";
import { setisLoggedIn } from "../../slices/authSlice";
import { setLoading } from "../../slices/authSlice";

const {
    LOGIN_API,
    SIGNUP_API
} = authEndpoint

export function signUp(data) {
    return async (dispatch) => {
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", SIGNUP_API, data)
  
        console.log("SIGNUP API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        window.alert("signUp Successful");
      } catch (error) {
        window.alert("signUp Unsuccessful");
        console.log("SIGNUP API ERROR............", error)
      }
      
      dispatch(setLoading(false))
    }
  }

export function login(data, setOpenLoginSignUpModal) {
    return async (dispatch) => {
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", LOGIN_API, data)
  
        console.log("LOGIN API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
        window.alert("Login Successful");
        dispatch(setisLoggedIn(true))
        setOpenLoginSignUpModal(false)
        
      } catch (error) {
        console.log("LOGIN API ERROR............", error)
        window.alert("Login Failed");
      }
      dispatch(setLoading(false))
    }
  }