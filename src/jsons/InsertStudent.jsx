import React, { useState } from 'react'
import axios from 'axios'
export const InsertStudent = () => {
    const[students,setStudents]=useState({
        sid:"",
        name:"",
        course:"",
    })
    const insertInfo=(event)=>{
        const{name,value}=event.target;
        setStudents({...students,[name]:value});
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        if(students.sid!==0&&students.name!=="" && students.course!==""){
            axios.post("http://10.21.78.78:8080/students",students).then((respons)=>{
                alert("Information Inserted!");
            })
            .catch((error)=>{
                alert(error);
            });
        }
    }
  return (
    <div>
        <h2>Insert Student Data</h2>
        <form className="d-flex flex-column col-4" onSubmit={onSubmit}>
            <label>Enter Student id</label>
            <input type="text" name="sid" value={students.sid} onChange={insertInfo}/>
            <label>Enter Student Name</label>
            <input type="text" name="name" value={students.name} onChange={insertInfo}/>
            <label>Enter Student course</label>
            <input type="text" name="course" value={students.course} onChange={insertInfo}/>
            <button type="submit" className="btn-success m-2">Insert Data</button>

        </form>
    </div>
  )
}
export default InsertStudent