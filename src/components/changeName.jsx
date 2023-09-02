import React, { useState } from 'react'
import MyButton from './MyButton';
const ChangeName = () => {
   // let name="MCA";
   const [name,setName]=useState("MCA");
   const chName=()=>{
       // name="REACT JS";
       // console.log(name);
       setName(" REACT JS");
    }
  return (
    <div>
        <h2>Your name is{name}</h2>
        <MyButton onPress={chName}/>
         {/* <MyButton  */}
        

    </div>
  );
};

export default ChangeName