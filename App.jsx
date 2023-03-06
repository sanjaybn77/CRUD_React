import React from 'react'
import Crud from './component/Crud'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Createuser from './component/Createuser'
import User from './component/User'
import Edituser from './component/Edituser'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Crud/>
        <Routes>
            <Route element={<Createuser/>} path="/"/>
            <Route element={<User/>}  path="/user"/>
            <Route element={<Edituser />} path={`/edit/:index`}/>
        </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default App