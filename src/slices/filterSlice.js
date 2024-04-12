import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    selectedChemistry: '',
    selectedProcess: '',
    selectedCategory: '',
    keyWordSearch: ''
}

const filterSlice = createSlice({
    name: "filter",
    initialState: initialState,
    reducers: {
        setSelectedChemistry(state, value){
            state.selectedChemistry = value.payload
        },
        setSelectedProcess(state, value){
            state.selectedProcess = value.payload
        },
        setSelectedCategory(state, value){
            state.selectedCategory = value.payload
        },
        setKeyWordSearch(state, value){
            state.keyWordSearch = value.payload
        }
    }
})

export const {setSelectedChemistry, setSelectedProcess, setSelectedCategory, setKeyWordSearch} = filterSlice.actions

export default filterSlice.reducer