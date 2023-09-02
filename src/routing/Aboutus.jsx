import React from 'react'
import { useNavigate,Outlet} from 'react-router-dom'

const Aboutus = () => {
    const navigate=useNavigate();
  return (
    <div>
        <h2>KIET MCA DEPARTMENT</h2>
        <button className='btn btn-warning' onClick={()=>navigate("/")}> Home</button>
        <nav className='m-3'>
            <link className='m-2 text-decoration-none' to="aboutone"> About One</link>
            <link className='m-2 text-decoration-none' to="abouttwo"> About Two</link>


        </nav>
        <Outlet/>

    </div>
  )
}

export default Aboutus