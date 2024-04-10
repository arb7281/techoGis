import React from 'react'

const FilterSection = () => {
  return (
    <div className="col-12 mb-4">
                        <div className="card filter-card">
                            <div className="card-body">
                                <form className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-8 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="form-label" for="Filter_by_Chemistry">Filter by Chemistry <span className="text-danger">*</span></label>
                                            <select name="" id="Filter_by_Chemistry" className="form-select">
												<option>Select Chemistry</option>
                                                <option value="">Chemistry 1</option>
                                                <option value="">Chemistry 2</option>
                                                <option value="">Chemistry 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-8 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="form-label" for="Filter_by_Chemistry">Filter by Process</label>
                                            <select name="" id="Filter_by_Chemistry" className="form-select">
												<option>Select Process</option>
                                                <option value="">Process 1.1</option>
                                                <option value="">Process 1.2</option>
                                                <option value="">Process 2.1</option>
                                                <option value="">Process 2.2</option>
                                                <option value="">Process 3.1</option>
                                                <option value="">Process 3.2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-8 col-sm-12 col-12">
                                        <div className="form-group">
                                            <label className="form-label" for="Filter_by_Chemistry">Search Keyword</label>
                                            <input type="text" name="" id="" placeholder="Search here..." className="form-control"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
  )
}

export default FilterSection