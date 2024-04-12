import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { setSelectedChemistry, setSelectedProcess, setKeyWordSearch } from '../../slices/filterSlice';
// import  from "react-redux"

const FilterSection = () => {

    const {selectedChemistry, selectedProcess, selectedCategory, keyWordSearch} = useSelector((state) => state.filter)
    const [uniqueProcesses, setUniqueProcesses] = useState([]);

    const dispatch = useDispatch()

    const {allProducts} = useSelector((state) => state.products)

    
    // const uniqueProcesses = [...new Set(product?.map(item => item.Process))];

    const handleChemistryChange = (event) => {
        const selectedChem = event.target.value;
        dispatch(setSelectedChemistry(selectedChem));
    };

    useEffect(() => {
        dispatch(setSelectedChemistry(null))
        dispatch(setSelectedProcess(null))
    },[selectedCategory])

    useEffect(() => {
        // Filter unique processes based on the selected chemistry
        const processes = allProducts
            ?.filter(item => item.Chemistry === selectedChemistry)
            .map(item => item.Process);
        setUniqueProcesses([...new Set(processes)]);
    }, [selectedChemistry, allProducts]);

    const uniqueChemistries = selectedCategory
        ? [...new Set(allProducts?.filter((item) => item.Category === selectedCategory).map(item => item.Chemistry))]
        : [...new Set(allProducts?.map(item => item.Chemistry))];
    
        const handleSearchChange = (keyword) => {
            dispatch(setKeyWordSearch(keyword));
          };

  return (
    
    <div className="col-12 mb-4">
                        <div className="card filter-card">
                            <div className="card-body">
                                <form className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-8 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="form-label" for="Filter_by_Chemistry">Filter by Chemistry <span className="text-danger">*</span></label>
                                            <select name="" id="Filter_by_Chemistry" className="form-select" value={selectedChemistry} onChange={(e) => handleChemistryChange(e)} >
												<option>Select Chemistry</option>
                                                {
                                                    uniqueChemistries?.map((chemistry, index) =>{
                                                        return <option key={index} value={chemistry}>{chemistry}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-8 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="form-label" for="Filter_by_Chemistry">Filter by Process</label>
                                            <select name="" id="Filter_by_Chemistry" className="form-select" value={selectedProcess} onChange={(e) => dispatch(setSelectedProcess(e.target.value))}>
												<option>Select Process</option>
                                                {
                                                    uniqueProcesses?.map((process, index) =>{
                                                        return <option key={index} value={process}>{process}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-8 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="form-label" for="Filter_by_Chemistry">Search Keyword</label>
                                            <input type="text" placeholder="Search here..." onChange={(e) => handleSearchChange(e.target.value)} className="form-control"/>
                                            {/* <input type="text" name="" id="" placeholder="Search here..." className="form-control"/> */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </div>
  )
}

export default FilterSection