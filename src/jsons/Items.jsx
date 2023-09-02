import React from 'react'

const Items = (props) => {
  return (
    
        <div class="card badge bg-dark m-2" style={{width: "40%",height:"300px"}}>
  <img src={props.thumbnail}
   className="card-img-top"
   
    alt="..."
    width="200px"
    height="150px"
    />
  <div class="card-body">
    <h6 class="card-title">
        <div className='d-flex justify-content-between'>
        <b>Product:</b>
    <i>{props.title}</i>
    <b>Price:</b>
    <i>{props.price}</i>
    </div>
    </h6>
    <h6 className="card-text d-flex justify-content-between">
        <b>Rating:</b>
        <i>{props.rating}</i>
    </h6>
    <h6 className="card-text text-start text-wrap">
    <p class="card-text">
        <b>Description:</b>
        <i>{props.description}</i>
    </p>
    </h6>
    
  </div>
</div>
    
  )
}

export default Items