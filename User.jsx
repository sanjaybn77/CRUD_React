import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './crud.module.css'
import { Link, useNavigate } from 'react-router-dom'

const User = () => {
  const [content,setContent] =useState([])
  

  useEffect(()=>{
    axios.get("http://localhost:3000/users")
    .then((resp)=>{
      setContent(resp.data);
    })
    .catch(()=>{
      console.log("something fishy")
    })
  },[])

  let chgdelete =(id)=>{
    axios.delete(`http://localhost:3000/users/${id}`)
    window.location.assign('/user')
   
  }

  return (
   
    <div id={style.user}>
        {content.map((x)=>{
          return(
            <div id={style.card}>
              <table>
              <tr>
                <td><h4>Name</h4></td>
                <td><h4>:{x.name}</h4></td>
              </tr>
              <tr>
                <td><h4>Salary</h4></td>
                <td><h4>:{x.salary}</h4></td>
              </tr>
              <tr>
                <td><h4>Company</h4></td>
                <td><h4>:{x.company}</h4></td>
              </tr>
              <tr>
                <td>
                  <Link to={`/edit/${x.id}`}> Edit </Link>
                </td>
                <td>
                  <button  onClick={()=>{chgdelete(x.id)}}>Delete</button>
                </td>
              </tr>
              </table>
            </div>
          )
        })}

    </div>
  )
}

export default User