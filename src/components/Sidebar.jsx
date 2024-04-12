import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation } from 'react-router-dom';
import { setSelectedCategory } from '../slices/filterSlice';

const Sidebar = () => {

  const dispatch = useDispatch()
  const {allProducts, loading} = useSelector((state) => state.products)
  const [activeCategory, setActiveCategory] = useState(null);
  const uniqueCategories = [...new Set(allProducts?.map(item => item.Category))]

  const location = useLocation()

  async function handleClick(category){
    setActiveCategory(category)
    
    dispatch(setSelectedCategory(category))
    
  }


  return (
    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
      {
        loading ? (<div>Loading....</div>)
      
                : <div className="card card-product">
                    <div className="card-body">
                        <ul className="list-group list-group-flush">

                        {
                          uniqueCategories?.map((category) =>(
                             <li key={category._id} 
                             className={`list-group-item ${category === activeCategory ? 'active' : ''}`}
                             onClick={() => handleClick(category)}><Link to={`/categories/${category}`}>{category}</Link></li>
                             )
                          )
                        }

                          </ul>
                    </div>
                </div>
      }        
            </div>
  )
}

export default Sidebar