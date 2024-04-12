import React from 'react'

const ProductDescriptionModal = ({modalData, setOpenDescriptionModal}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="row">
        <div className="col-12">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row w-100">
                <div className="col-xl-12">
                  <div className="modal-form">
                    <h3>Product Description</h3>
                    <h2 style={{ fontWeight: 'bold' }}>{modalData.Category}</h2>
                    <button
                      onClick={() => setOpenDescriptionModal(false)}
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
                    <h4>
                      {modalData.Chemistry} - {modalData.Process}
                    </h4>

                    <p>{modalData.Description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescriptionModal