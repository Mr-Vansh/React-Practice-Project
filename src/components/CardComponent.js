import React from 'react'
import { NavLink } from 'react-router-dom'

const CardComponent = (props) => {
    return (
        <>
            <div className="col-12 col-md-4 mx-auto">
                <div className="card">
                    <img className="card-img-top" src={props.img} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title fs-4 fw-bold mt-2">{props.title}</h5>
                        <p className="card-text mt-2">{props.desc}</p>
                        <NavLink to="" className="btn btn-primary">Explore More</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardComponent