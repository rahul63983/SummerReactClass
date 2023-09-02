import React, { useState } from 'react'

const Cunter = (props) => {
    //const [count,setCount]=useState(3);
  //  const [count,setCount]=useState(Number(props.count));
const {counts,id}=props.counter;
//single source of truth
//state lifting up//when parent component change the state of child component
 // const [count,setCount]=useState(counts);//every component has its private state and state{private state of child component} are not modify by any other component  at runtime  it only initialized 
    //const decrement =()=>{
        
      //  let lcount=count;+
      
      /*
        if(lcount===0)
        {
            setCount(lcount);
        }
        else{
        setCount(--lcount);
        }
        */
     //  setCount(lcount<=0?0:lcount -1);

  //  };
   // const increment =()=>{
//let lcount=count;
       // setCount(lcount + 1);//state-variable first render then updation is happen
   // };
    const changeClass=()=>{
        let check=counts<=0?"btn btn-danger mx-2":"btn btn-warning px-3 mx-2 ";
        return check;
    };
  return (
    <div className='my-3'>
        <button className="btn btn-primary"  onClick={()=>props.onDecrement(props.counter)}>Decrement</button>
        <span className={changeClass()}>{counts===0?"zero":counts}</span>
        <button className="btn btn-primary" onClick={()=>props.onIncrement(props.counter)}>Increment</button>
        <button className="btn btn-danger mx-2" onClick={()=>props.onDelete(id)}>Delete</button>
    </div>
  )
}

export default Cunter