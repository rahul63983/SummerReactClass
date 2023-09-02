import React, { useState } from 'react'

const FormEx = () => {
    const[form,setForm]=useState({
        name:"",
        pwd:"",
        gender:"",
    });
    // const [checkName,setCheckName]=useState();
    // const [checkValue,setCheckValue]=useState();
    // const [gender,setGender]=useState();
    // const [name,setName]=useState("MCA");
    // const [pwd,setPwd]=useState();
    const changeInput=(event)=>{

        const {name,value}=event.target;
        // setCheckName(event.target.name);
        // setCheckValue(event.target.value);
       setForm({...form ,[name]:value});//(...form)it is used for to show previous variable
        //inside the name is key[name]:
    };
    // const changePwd=(event)=>{
    //     setPwd(event.target.value);
    // };
    // const changeGender=(event)=>{
    //     setGender(event.target.value);
    // }
  return (
    <div className='m-3 d-flex flex-column'>
        <h2>Form Example</h2>
        <form className='d-flex flex-column col-3'>
            <label>Enter your name</label>
            <input type='text' name ="name" value={form.name} placeholder='Enter Name' onChange={changeInput}/>
            <label>Enter your password</label>
            <input type='password' name ="pwd" value={form.pwd} placeholder='Enter Password' onChange={changeInput}/>
            <label>Gender</label>
            <div>
            <input type='radio' name='Gender' value="Male" onChange={changeInput}></input>
            
            <b>&nbsp;Male</b>
            &nbsp;&nbsp;
            <input type='radio' name='Gender' value="Female" onChange={changeInput}></input>
            <b>&nbsp;Female</b>
            </div>
            <div>
                {JSON.stringify(form)}
                
            </div>

        </form>
    </div>
  )
}

export default FormEx