import React from 'react'
import ServiceData from './ServiceData'
import CardComponent from './CardComponent'

const Service = () => {
  return (
    <>
      <h1 className='my-3 text-center'>Our Services</h1>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-11 col-md-10 mx-auto">
            <div className="row g-5">
              {
                ServiceData.map((data, index) => {
                  return <CardComponent key={index} img={data.imgSrc}  title={data.title} desc={data.desc} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service