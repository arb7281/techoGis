const BASE_URL = process.env.BACKEND_APP_BASE_URL

export const categoryEndpoint = {
    GET_CATEGORIES_API : "http://localhost:4000/api/v1/products/showAllCategories"
}

export const productEndpoint = {
    GET_PRODUCTS_API : "http://localhost:4000/api/v1/categoryProducts/getMatchedCategoryProduct",
    GET_ALL_PRODUCTS_API: "http://localhost:4000/api/v1/categoryProducts/getAllProducts"
}

export const authEndpoint = {
    LOGIN_API : "http://localhost:4000/api/v1/auth/login",
    SIGNUP_API: "http://localhost:4000/api/v1/auth/signup"
}

