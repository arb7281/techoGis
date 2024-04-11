import React, { useEffect, useState } from 'react'
import { setCategories } from '../slices/productsSlice';
import { useDispatch, useSelector } from "react-redux"
import { fetchCategories } from '../services/operations/fetchCategoryAPI';
import { setLoading } from '../slices/productsSlice';

const Sidebar = () => {

  const dispatch = useDispatch()
  const {categories, loading} = useSelector((state) => state.products)
  // const [categories, setCategories] = useState([])
  console.log("printing categories", categories)

  useEffect(() =>{
    const getCategories = async() =>{
      try{
        const res = await fetchCategories(dispatch, setLoading)
        dispatch(setCategories(res))
      }catch(error){
        console.log("could not fetched categories", error)
      }
      
    }

    getCategories()
  }, [])


  return (
    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
      {
        loading ? (<div>Loading....</div>)
      
                : <div className="card card-product">
                    <div className="card-body">
                        <ul className="list-group list-group-flush">

                        {
                          categories?.map((category) =>(
                             <li key={category._id} className="list-group-item"><a href="/">{category.Category}</a></li>
                             )
                          )
                        }
                            {/* <li className="list-group-item"><a href="/">Gelcoats</a></li>
                            <li className="list-group-item"><a href="/">Solid Surface Resins</a></li>
                            <li className="list-group-item active"><a href="/">Vinyl Ester Resins</a></li>
                            <li className="list-group-item"><a href="/">Resins for Compression Moulding</a></li>
                            <li className="list-group-item"><a href="/">Resins Infusion Moulding</a></li>
                            <li className="list-group-item"><a href="/">LSE Resins</a></li>
                            <li className="list-group-item"><a href="/">Resins Open Mould</a></li>
                            <li className="list-group-item"><a href="/">Resins RTM</a></li>
                            <li className="list-group-item"><a href="/">Resins Pultrusion</a></li>
                            <li className="list-group-item"><a href="/">Bonding Paste & Corner Filling Compound</a></li>
                            <li className="list-group-item"><a href="/">Resins Filament Winding</a></li>
                            <li className="list-group-item"><a href="/">Flame Retardant Resins</a></li>
                            <li className="list-group-item"><a href="/">Resins for Engineered Stone and Composite Marble</a></li>
                            <li className="list-group-item"><a href="/">Tooling System</a></li> */}
                          </ul>
                    </div>
                </div>
      }        
            </div>
  )
}

export default Sidebar