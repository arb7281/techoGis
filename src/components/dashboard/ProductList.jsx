import React, { useEffect, useState } from 'react'
import ProductDescriptionModal from './ProductDescriptionModal'
import LoginSignupModal from './LoginSignupModal'
import {useSelector, useDispatch} from "react-redux"
import { fetchAllProducts } from '../../services/operations/fetchProductAPI'
import {setAllProducts} from "../../slices/productsSlice"
import { generatePDF } from '../../Download/downloadProducts'

// import {useSelector, useDispatch} from "react-redux"

const ProductList = () => {
    const dispatch = useDispatch()
    useEffect(()  => {
        const getAllProducts = async () =>{
        await fetchAllProducts(dispatch, setAllProducts)
        }
        getAllProducts()
    }, [])

    const {allProducts} = useSelector((state) => state.products)

    const {isLoggedin} = useSelector((state) => state.auth)
    const [openDescriptionModal, setOpenDescriptionModal] = useState(null)
    const [openLoginSignUpModal, setOpenLoginSignUpModal] = useState(false)
    
    const {selectedChemistry, selectedProcess, selectedCategory, keyWordSearch} = useSelector((state) => state.filter)
    // console.log("printing selectedChemistry, selectedProcess,  selectedCategory", selectedChemistry, selectedProcess, selectedCategory)
    const filteredArray = allProducts?.filter(item => {


        // If a category is selected and the item's category doesn't match exclude the item
        if (selectedCategory && item.Category !== selectedCategory) {
          return false;
        }
        // If a chemistry is selected and the item's chemistry doesn't match exclude the item
        if (selectedChemistry && item.Chemistry !== selectedChemistry) {
          return false;
        }
        // If a process is selected and the item's process doesn't match, exclude the item
        if (selectedProcess && item.Process !== selectedProcess) {
          return false;
        }

        const keywordMatch = item.Category.toLowerCase().includes(keyWordSearch.toLowerCase()) ||
                       item.Chemistry.toLowerCase().includes(keyWordSearch.toLowerCase()) ||
                       item.Process.toLowerCase().includes(keyWordSearch.toLowerCase());

        return keywordMatch;
      })
    
      const [checkedItems, setCheckedItems] = useState([])

      const handleCheckbocChange = (item) => {
        //check if item already exist
        const isChecked = checkedItems.includes(item)

        //if it was pre selected then remove
        const updatedItems = isChecked
            ? checkedItems.filter((checkedItem) => checkedItem !== item)
            : [...checkedItems, item]

         setCheckedItems(updatedItems)   
      }
    

   

    

  return (
    <div>
    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th colspan="2">
                                                
                                                <label className="form-check-label ms-2" for="defaultCheck1">
                                                    Select Product(s)
                                                </label>
                                            </th>
                                            <th className="text-end" colspan="2">
                                                
                                                <a href="#" className="btn btn-dark" onClick={() => {
                                                     if(isLoggedin){
                                                        generatePDF(checkedItems)
                                                    }else{
                                                        setOpenLoginSignUpModal(true)
                                                    }
                                                }}>DOWNLOAD PDF <i className="fa-regular fa-file-pdf"></i></a>
                                            </th>
                                        </tr>
                                    </thead>

                                    {
                                        filteredArray?.map((item, index) => {
                                                    return  <tr key={index}>
                                                            <td width="5%">
                                                                <input 
                                                                 className="form-check-input" 
                                                                 type="checkbox" 
                                                                 id="checkboxNoLabel" 
                                                                 value="" 
                                                                 aria-label="..."
                                                                 onChange={() => handleCheckbocChange(item)}
                                                                 checked={checkedItems.includes(item)}
                                                                 />
                                                            </td>
                                                            <td width="25%">
                                                                {item.Chemistry}
                                                            </td>
                                                            <td width="50%">
                                                                {item.Process}
                                                            </td>
                                                            <td width="20%">
                                                                <a href="#" onClick={() => setOpenDescriptionModal(item)}>View Details</a>
                                                            </td>
                                                        </tr>
                                        })
                                    }
                                   
                                </table>
                            </div>
                        </div>
                    </div>
          {openDescriptionModal ? <ProductDescriptionModal modalData = {openDescriptionModal} setOpenDescriptionModal={setOpenDescriptionModal} />: (<div></div>)}          
           {openLoginSignUpModal ? <LoginSignupModal modalData = {openLoginSignUpModal} setOpenLoginSignUpModal = {setOpenLoginSignUpModal} checkedItems={checkedItems}/> : (<div></div>)}         
                    </div>
  )
}

export default ProductList