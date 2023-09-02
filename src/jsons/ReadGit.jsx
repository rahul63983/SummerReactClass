import React, { useEffect, useState } from 'react'
import axios from "axios";
const ReadGit = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://api.github.com/users").then(response=>{
            setData(response.data);

        }).catch(error=>{
            alert(error);

        });
    })
  return (
    <div className="d-flex justify-content-center m-3">
        <h2>Reading Git Information</h2>
        <table className="table table-dark">
            <thead className='table table-warning'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>photo</th>
                </tr>
            </thead>
            <tbody className='table table-success'>
                {data.map((row)=>(
                    <tr>
                        <td>{row.id}</td>
                        <td>{row.login}</td>
                        <td> <img src={row.avatar_url} width="200px" height="200px" alt="pic not found"/></td>
                    </tr>
                ))}
            </tbody>

        </table>
        {/* {JSON.stringify(data)} */}
        
        </div>
  )
}

export default ReadGit