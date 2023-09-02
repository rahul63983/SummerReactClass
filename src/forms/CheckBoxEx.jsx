import React, {  useEffect, useState } from 'react'

const CheckBoxEx = () => {
    const [selectLang,setSelectLang]=useState([]);
    const[lang,setLang]=useState({
        java:false,
        python:false,
        javascript:false,
        c:false,
    });
    const checkLang=(event)=>{
        const {name,checked}=event.target;
        setLang({...lang,[name]:checked});
        //setSelectLang([...selectLang,name]);
       // displayLang();
    }
    useEffect(()=>{
        displayLang();
    })
    const displayLang=()=>{
        setSelectLang([]);
        if(lang.java===true){
            setSelectLang((prevSel)=>[...prevSel,"Java"]);

        }
        if(lang.java===true){
            setSelectLang((prevSel)=>[...prevSel,"python"]);

        }
        if(lang.python){
            setSelectLang([...selectLang,""]);

        }
        if(lang.java===true){
            setSelectLang((prevSel)=>[...prevSel,"Java"]);

        }
       
    }

  return (
    <div className='m-3'>
        <h3>Select your language</h3>
        <form className='d-flex flex-column '>
            <div><input type="checkbox" name="java" onClick={checkLang} />
            <b>&nbsp;Java</b></div>
            <div>
            <input type="checkbox" name="Python" onClick={checkLang} />
            <b>&nbsp;Python</b></div>
            <div>
            <input type="checkbox" name="Javascript"onClick={checkLang}  />
            <b>&nbsp; Javascript</b></div>
            <div>
            <input type="checkbox" name='c++' onClick={checkLang} />
            <b>&nbsp; c++</b>
            </div>
            
        </form>
        {JSON.stringify(lang)}
        </div>
  )
}

export default CheckBoxEx