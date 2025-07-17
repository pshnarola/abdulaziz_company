import Home from '@/pages/Home'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddCompany from '@/pages/AddCompany'
import EditCompany from '@/pages/EditCompany'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/company',
        children: [
          {
            path: '/company/add',
            element: <AddCompany />
          },
          {
            path: '/company/:id/edit',
            element: <EditCompany />
          },
        ]
      }
    ]
  }
])

const AppRoute = () => {
  return <RouterProvider router={router} />
}

export default AppRoute