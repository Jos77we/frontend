import React from 'react'
import './Topbar.css'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <>
    <div className='topbar-bar'>
    <Link to="/Dashboard" style={{color:"white"}}>Upload</Link>
    </div>
    </>
  )
}

export default Topbar