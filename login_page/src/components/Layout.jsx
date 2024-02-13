import React from 'react'
import { NavBar } from './NavBar'
import { Outlet } from 'react-router-dom'


export const Layout = ({children}) => {
  return (
  <div>
    <NavBar/>
    <Outlet/>
  </div>
  )
}
