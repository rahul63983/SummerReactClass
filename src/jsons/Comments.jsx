import React, { useEffect, useState } from 'react'
import Message from './Message'
import axios from 'axios';
const Comments = () => {
    const[message,setMessage]=useState({});
    const [id,setId]=useState(1);
    const getNext=()=>{
        if(id>=1){
            setId((id)=>id+1);
        }
        else{
            setId(1);
            alert("Already on first message!")
        }
        fetchMessage(id);
    }
    const getPrevious=()=>{
        if(id>=1){
            setId((id)=>id-1);
        }
        else{
            setId(1);
            alert("Already on first message!")
        }
        fetchMessage(id);
    }

    const fetchMessage=(id)=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then((response)=>{
                    setMessage(response.data);
                })
                .catch((error)=>alert("you are on last message!"));
    }

    useEffect(()=>{
        fetchMessage(id);
    },[]);
  return (
    <div>
       <Message id={message.id} title={message.title} body ={message.body}/>
        <button className="btn btn-outline-dark col-1 mx-2" onClick={getPrevious}> Previous</button>
        <button className="btn btn-outline-dark col-1 mx-2" onClick={getNext}> Next</button>
        {/* <button className="btn btn-outline-dark col-1 mx-2" onClick={showModel}> Show</button> */}
    </div>
  )
}

export default Comments