import axios from 'axios';
import React, { useEffect, useState } from 'react'

const StudentData = () => {
    const[students,setStudents]=useState([]);
    useEffect(()=>{
        axios.get("http://10.21.78.79:8080/students")
        .then((response) => {
            setStudents(response.data);
        })
        .catch((error)=>{
            alert(error);
        });

    },[]);

  return (
    <div>
        <h2>Student Information</h2>
        <div>
            <table className=' table table -success'>

                <thead className='table table -success'>

                
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Student Course</th>
                </thead>
                <tbody>
                    {students.map((student)=>(
                        <tr>
                            <td>{student.sid}</td>
                            <td>{student.name}</td>
                            <td>{student.course}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>

    </div>
  )
}

export default StudentData