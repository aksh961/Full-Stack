import React from 'react'
import { Link } from 'react-router-dom'

export default function Hp() {
  return (
    <><div style={{backgroundColor: 'violet'}}>Home Page</div>
      <div> <p>                                                     </p></div>
     <div>
     <Link
                    className="btn btn-primary mx-2"
                    to={`/Dashboard`}
                  >
                    Admin
                  </Link>
     </div>
     <div> <p>                </p></div>
                <div>
                <Link
                    className="btn btn-primary mx-2"
                    to={`/Home`}> Users </Link>
                  </div> 
                  <div><p>                         </p>

                  </div>
                  <div>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/Home`}
                  >
                  Job Seeker
                  </Link>
                  </div>
                  
      </>
  )
}
