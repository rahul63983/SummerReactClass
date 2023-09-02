import React, { useEffect, useState } from 'react'
import ToggleUseEffect from './ToggleUseEffect';

const UseStateEx = () => {
    const [count,setCount]=useState(0);
    const[X,setX]=useState();
    const[Y,setY]=useState();
    const [toggle,setToggle]=useState(false);
    const increment=()=>{
        //setCount(count +1);
        // setCount((prevCount)=>prevCount+1);
        // console.log(count);
        setCount((prevCount)=>prevCount+1);
        
    };
    const changeToggle=()=>{
        setToggle(!toggle);
    };
    const increment5=()=>{
        increment();//in react when it have bunch of command which are same , it only select one of them
        //
        increment();
        increment();
        increment();
        increment();
    };
    // useEffect(()=>{//when ever any rerendering in our page useEffect is called 
    //     console.log("Inside useEffect");}
    // );
    const mouseMove=(event)=>
    {setX(event.clientX);
        setY(event.clientY);
        console.log("inside mouseMove");

    }
    useEffect(()=>{//when ever any rerendering in our page useEffect is called 
        console.log("Inside useEffect");
        window.addEventListener("mousemove",mouseMove);
        return()=>{
            window.removeEventListener("mousemove",mouseMove);//to close the eventlistener when event is off
        }
    }//,[count]
    );//this is call only one time 
  return (
    <div className='m-3'>
        <button className="btn btn-primary" onClick={increment}>Increment</button>
        {" " + count}
        <button className="btn btn-primary mx-2" onClick={increment5}>Increment +5</button>
        <ToggleUseEffect/>
        <button className="btn btn-primary mx-2" onClick={changeToggle}> Show Toggle</button>
        <h2>X:{X} and Y :{Y}</h2>
    </div>
  )
}

export default UseStateEx