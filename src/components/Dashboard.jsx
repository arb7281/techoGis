import React from 'react'
import FilterSection from './dashboard/FilterSection'
import ProductList from './dashboard/ProductList'

const Dashboard = () => {
  return (
    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="row">
                {/* filter section */}
                    <FilterSection/>
                    {/* products list */}
                    <ProductList/>
                </div>
                {/* modal in ProductList*/}
                {/* login and signup modal in ProductList */}             
    </div>
  )
}

export default Dashboard