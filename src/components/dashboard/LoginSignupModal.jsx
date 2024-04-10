import React from 'react'

const LoginSignupModal = () => {
  return (
    <div className="row">
    <div className="col-12">
        <div className="modal-content">
            <div className="modal-body">
            <div className="row w-100">
                <div className="col-xl-6">
                <div className="modal-form">
                    <h3>Login to Download</h3>
                    <form action="">
                        <div className="mb-3">
                            <input type="text" name="" id="" placeholder="Email ID" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" name="" id="" placeholder="Password" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-light">Login</button>
                            <a className="btn btn-light">Sign Up</a>
                        </div>
                    </form>
                </div>
                </div>
                <div className="col-xl-6 modal-d">
                <div className="modal-form">
                    <h3>New User</h3>
                    <form action="">
                        <div className="mb-3">
                            <input type="text" name="" id="" placeholder="Name" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <input type="text" name="" id="" placeholder="Enter Company Name" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <input type="text" name="" id="" placeholder="Enter Location" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <input type="text" name="" id="" placeholder="Enter Phone Number" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <input type="text" name="" id="" placeholder="Enter Email ID" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <textarea name="" className="form-control" placeholder="Enter remarks" id="" rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-light">Submit</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default LoginSignupModal