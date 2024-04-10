import React from 'react'
import ProductDescriptionModal from './ProductDescriptionModal'
import LoginSignupModal from './LoginSignupModal'

const ProductList = () => {
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
                                                
                                                <a href="#" className="btn btn-dark">DOWNLOAD PDF <i className="fa-regular fa-file-pdf"></i></a>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tr>
                                        <td width="5%">
                                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/>
                                        </td>
                                        <td width="25%">
                                            Chemistry 1
                                        </td>
                                        <td width="50%">
                                            Process 1.1
                                        </td>
										<td width="20%">
                                            <a href="#">View Details</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/>
                                        </td>
                                        <td>
                                            Chemistry 1
                                        </td>
                                        <td>
                                            Process 1.2
                                        </td>
										<td>
                                            <a href="#">View Details</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/>
                                        </td>
                                        <td>
                                            Chemistry 2
                                        </td>
                                        <td>
                                            Process 2.1
                                        </td>
										<td>
                                            <a href="#">View Details</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/>
                                        </td>
                                         <td>
                                            Chemistry 2
                                        </td>
                                        <td>
                                            Process 2.2
                                        </td>
										<td>
                                            <a href="#">View Details</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/>
                                        </td>
                                         <td>
                                            Chemistry 3
                                        </td>
                                        <td>
                                            Process 3.1
                                        </td>
										<td>
                                            <a href="#">View Details</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/>
                                        </td>
                                         <td>
                                            Chemistry 3
                                        </td>
                                        <td>
                                            Process 3.2
                                        </td>
										<td>
                                            <a href="#">View Details</a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <ProductDescriptionModal/>
                    <LoginSignupModal/>
                    </div>
  )
}

export default ProductList