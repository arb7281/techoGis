import React, { useState } from 'react'
import { setLoading } from '../../slices/authSlice'
import {useSelector, useDispatch} from "react-redux"
import { signUp, login } from '../../services/operations/authAPI'
import { generatePDF } from '../../Download/downloadProducts'


const LoginSignupModal = ({modalData, checkedItems, setOpenLoginSignUpModal}) => {

    
    const {loading} = useSelector((state) => state.auth)

    const [formData, setFormData] = useState({
        email:'',
        password:''
    })

    const [signUpFormData, setSignUpFormData] = useState({
        name:'',
        location:'',
        companyName:'',
        phoneNumber:'',
        email:'',
        remarks:''
    })

    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

      const handleOnChange = (e) => {
        const { name, value } = e.target;
        setSignUpFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      }

      const handleSignup = async () => {
            dispatch(signUp(signUpFormData))
            setFormData({
                name:'',
                location:'',
                companyName:'',
                phoneNumber:'',
                email:'',
                remarks:''
            })
      }

      const handleLogin = async () => {
            dispatch(login(formData, setOpenLoginSignUpModal))
            
            generatePDF(checkedItems)
      }


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      
      <div className="fixed inset-0 bg-black opacity-50"></div>
      {
        loading ? (<div>Loading...</div>): (<div className="row">
        <div className="col-12">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row w-100">
                <div className="col-xl-6">
                  <div className="modal-form">
                    <h3>Login to Download</h3>
                    <button
                      onClick={() => setOpenLoginSignUpModal(false)}
                      className="absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                    >
                      <svg
                        className="h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M13.414 12l5.293-5.293a1 1 0 10-1.414-1.414L12 10.586l-5.293-5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 001.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12z"
                        />
                      </svg>
                    </button>
                    <form action="">
                      <div className="mb-3">
                        <input
                          type="text"
                          name="email"
                          value={formData.email}
                          id=""
                          placeholder="Email ID"
                          className="form-control"
                          onChange={(e) => handleInputChange(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          name='password'
                          value={formData.password}
                          id=""
                          placeholder="Password"
                          className="form-control"
                          onChange={(e) => handleInputChange(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <button type="submit" className="btn btn-light" onClick={handleLogin}>
                          Login
                        </button>
                        {/* <a className="btn btn-light">Sign Up</a> */}
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-xl-6 modal-d">
                  <div className="modal-form">
                    <h3>New User</h3>
                    <form action="">
                      <div className="mb-3">
                        <input
                          type="text"
                          name='name'
                          value={signUpFormData.name}
                          id=""
                          placeholder="Name"
                          className="form-control"
                          onChange={(e) => handleOnChange(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          name='companyName'
                          value={signUpFormData.companyName}
                          id=""
                          placeholder="Enter Company Name"
                          className="form-control"
                          onChange={(e) => handleOnChange(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          name='location'
                          value={signUpFormData.location}
                          id=""
                          placeholder="Enter Location"
                          className="form-control"
                          onChange={(e) => handleOnChange(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          name='phoneNumber'
                          value={signUpFormData.phoneNumber}
                          id=""
                          placeholder="Enter Phone Number"
                          className="form-control"
                          onChange={(e) => handleOnChange(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          name='email'
                          value={signUpFormData.email}
                          id=""
                          placeholder="Enter Email ID"
                          className="form-control"
                          onChange={(e) => handleOnChange(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <textarea
                          name='remarks'
                          value={signUpFormData.remarks}
                          className="form-control"
                          placeholder="Enter remarks"
                          id=""
                          rows="3"
                          onChange={(e) => handleOnChange(e)}
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <button type="submit" className="btn btn-light" onClick={handleSignup}>
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)
      }
      
    </div>
  );
}

export default LoginSignupModal
