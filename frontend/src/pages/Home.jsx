import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex gap-3 p-4'>
      <div>Home</div>
      <Link className='inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background' to="/company/add">Add Company</Link><br />
      <Link className='inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background' to="/company/1/edit">Edit Company</Link>
    </div>
  )
}

export default Home