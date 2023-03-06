import React, { useState } from 'react'
import style from './crud.module.css'
import {Link} from 'react-router-dom'

const Crud = () => {
    // let [count,setCount]=useState({fname:'',lname:''})
  return (
    <section id={style.nav}>
        <Link to="/">CREATE-USERS</Link>
        <Link to="/user">USERS</Link>
       
    </section>
  )
}

export default Crud