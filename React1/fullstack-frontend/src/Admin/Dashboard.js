
import React from 'react'
import { Link } from 'react-router-dom'
export default function Dashboard() {
  return (
    <>
   <div style={{backgroundColor: 'green'}}>Home Page</div>
    <div>
    <Link
    className="btn btn-primary mx-2"
    to='/Home'>
JOB POSTS
  </Link>
        </div>
    </>
  )
}
