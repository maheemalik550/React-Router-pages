

import React from 'react'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Sign_up } from '../pages/sign_up'
import { Layout } from '../components/Layout'
import { Login } from '../pages/login'
import { Home } from '../pages/home'




const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>} >
           <Route path='/' element={<Home/>} />
            <Route exect path='login' element={<Login/>} />
            <Route path='sign_up' element={<Sign_up/>}  />
        </Route>
    )
)




export const Router_app = () => {
  return (
    <RouterProvider router={router} />
  )
}
