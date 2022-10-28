import React from 'react'
import { NavLink } from 'react-router-dom'

const CommonComponent = (props) => {
  return (
    <>
      <section className="mt-4 mt-lg-5">
        <div className="container-fluid mt-5 mt-lg-0">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 mt-4 mt-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1 className='text-center text-lg-start mb-4 mb-lg-4'>{props.mainHeading} <strong style={{color: "#056cb1"}}>PracticeProject</strong> </h1>
                  <h5 className='text-center text-lg-start mb-3 mb-lg-3'>We are the team of talented developers making website.</h5>
                  <div className="buttonDiv col-7 col-lg-6 mx-auto mx-lg-0">
                    <button className='w-100'><NavLink to={props.navigatePage} className="btn-text text-decoration-none fw-bolder text-uppercase">{props.btnContent}</NavLink></button>
                  </div>
                </div>
                <div className="image-container col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
                  <img src={props.image} className='img-fluid animated' alt="home" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CommonComponent;