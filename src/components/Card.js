import React from 'react'
import "../styles/Card.css"

function Card({name,dept,phone,dob}) {
    return (
        <div className="card card-group">
            <p>{name}</p>
            <p>{dept}</p>
            <p>{phone}</p>
            <p>{dob}</p>
        </div>
    )
}

export default Card