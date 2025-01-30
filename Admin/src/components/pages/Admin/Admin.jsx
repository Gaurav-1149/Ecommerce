import React from 'react'
import './Admin.css'
import { SideBar } from '../../SideBar/SideBar'
import { Route, Routes } from 'react-router-dom'
import { AddProduct } from '../../AddProduct/AddProduct'
import { ListProduct } from '../../ListProduct/ListProduct'


export const Admin = () => {
  return (
    <div className='Admin'>
        <SideBar/>
        <Routes>
            <Route path='/addproduct' element={<AddProduct/>} />
            <Route path='/listproduct' element={<ListProduct/>} />
        </Routes>
    </div>
  )
}
