import React from 'react'

function Card({title, btnText="Click"}) {
  return (
      <div className="card rounded-xl mx-2" style={{width: "18rem", border: "1px solid #fff"}}>
        <img src="https://images.pexels.com/photos/29352963/pexels-photo-29352963/free-photo-of-charming-italian-architecture-in-vernazza.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="card-img-top" alt="..." />
        <div className="card-body mt-4">
          <h2 className="card-title font-bold">{title}</h2>
          <p className="card-text font-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary mt-4">{btnText}</a>
        </div>
      </div>
  )
}

export default Card