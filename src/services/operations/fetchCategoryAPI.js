import { categoryEndpoint } from "../apis"
import { apiConnector } from "../apiConnector"
const {GET_CATEGORIES_API} = categoryEndpoint

export const fetchCategories = async () =>{
    let result = []
    console.log("printing category api",GET_CATEGORIES_API )
    try{
        const response = await apiConnector("GET", GET_CATEGORIES_API)

        if(!response?.data?.success){
            throw new Error("Could Not Fetch Categories")
        }
        
      return result = response?.data?.data
        // console.log("printing result", result)
    }catch(error){
        console.log("GET_CATEGORIES_API error", error)

    }
}