import { productEndpoint } from "../apis"
import { apiConnector } from "../apiConnector"
const {GET_PRODUCTS_API, GET_ALL_PRODUCTS_API} = productEndpoint

export const fetchProduct = async (dispatch, setLoading, categoryId) =>{
    let result = []
    dispatch(setLoading(true))
    try {
    const response = await apiConnector("POST", GET_PRODUCTS_API, {categoryId: categoryId});

    if (!response?.data?.success) {
        throw new Error("Could Not Fetch Products");
    }
    dispatch(setLoading(false));
    return (result = response?.data?.data);
    } catch (error) {
    console.log("", error);
    }
    dispatch(setLoading(false));
}

export const fetchAllProducts = async (dispatch, setAllProducts) =>{
    let result = []
    
    try {
    const response = await apiConnector("GET", GET_ALL_PRODUCTS_API);
        console.log("printing response from all products", response)
    if (!response?.data?.success) {
        throw new Error("Could Not Fetch Products");
    }

    dispatch(setAllProducts(response?.data?.data))
    } catch (error) {
    console.log("", error);
    }
    
}