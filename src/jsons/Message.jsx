import React from 'react'

const Message = (props) => {
  return (
    <div className=' card card-light d-flex flex-column justify-content-center align-items-center'>
        <h2>Message Information</h2>
        <div className=" card card-light d-flex flex-column justify-content-center align-items-center">
            <h3>ID:{props.id}</h3>
            <h3>Message Title:{props.title}</h3>
            <h3>Message Body{props.body}</h3>

        </div>
        </div>
  )
}

export default Message